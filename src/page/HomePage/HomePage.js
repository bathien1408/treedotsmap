
import gmap from "../../component/gmap/";
import  data from './dataHubReponse.json';
import axios from "axios";

const urlApiGetLocation = "https://maps.googleapis.com/maps/api/geocode/json?address=";

export default {
    name: 'HomePage',
    components: {
        gmap
    },
    data: function () {
        return {
            dataHub: data.data,
            isFetching: false
        }
    },
    created: async function () {
        let  _this = this;
        // Start loading  page for get location hub
        this.$loading(true);
        for (let index = 0; index < _this.dataHub.length; index++) {
            let linkQuery =
                    urlApiGetLocation +
                    encodeURIComponent(_this.dataHub[index].road) +
                    "&key=" + _this.$config._config.gmapApiKey;
            // Call API gmap to get lat and lng from address 
            let {
                data
            } = await axios.get(linkQuery);
            // Add location info to dataHub
            _this.dataHub[index]['location'] = data.results[0].geometry.location;
            _this.dataHub[index]['label'] = _this.anphabetIndex(index);
            _this.dataHub[index]['visible'] = true;

        }
        // End loading  page for get location hub
        this.isFetching = true;
        this.$loading(false);
    },
    methods: {
        /*
         * Convert index number to anphabet 
         * @param {interger} index  
         * @returns {string} 
         */
        anphabetIndex: function (index) {
            return (index + 10).toString(36).toUpperCase();
        },
        /*
         * Event function when select hub 
         * @param {interger} index  
         * @returns {null} 
         */
        selectHub: function (index) {
            // Reset all hub to unselect
            for (let indexHub = 0; indexHub < this.dataHub.length; indexHub++) {
                this.dataHub[indexHub]['visible'] = true;
            }
            // Set  selected hub to unvisible
            this.dataHub[index]['visible'] = false;
            // Update map
            this.$refs.gmap.$forceUpdate();
            // Pan map to hub location
            this.$refs.gmap.panToHub(index);
            // Update data in list hub 
            this.$forceUpdate();
        }
    }
};
