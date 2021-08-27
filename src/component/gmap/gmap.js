// @vue/component
export default {
    name: "GoogleMap",
    props: ['dataHub'],
    data() {
        return {
            //defause location
            center: {lat: 1.3631671, lng: 103.8354073},
            markers: this.dataHub,
            places: [],
            currentPlace: null,
            mapOptions: {
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,
                disableDefaultUi: true
            }
        };
    },

    mounted() {
        // Get user location
        this.geolocate();
    },

    methods: {
        /*
         * Set Place on map
         * @param {obj} place 
         */
        setPlace(place) {
            this.currentPlace = place;
        },
        /*
         * Get User Location
         *
         */
        geolocate: function () {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        },
        /*
         * Pan to hub location on map
         * @param {interger} index 
         * @returns {null} 
         */
        panToHub: function (index) {
            //Get position from index data
            let position = this.markers[index]["location"];
            // Pan to location
            this.$refs.mapRef.$mapPromise.then((map) => {
                map.panTo(position)
            })
        },
        /*
         * Get label for marker
         * @param {obj} marker 
         * @returns {string} 
         */
        getLabel: function (marker) {
            return marker.visible ? marker.label : "";
        },
        /*
         * Function event when click marker on map
         * @param {interger} index 
         * @returns {null} 
         */
        clickMarker: function (index) {
            // Sent event to parent component with index of select hub 
            this.$emit('select-hub',index);
        }
    }
};
