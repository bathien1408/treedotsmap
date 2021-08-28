
import gmap from "../../component/gmap/";
import  data from '../../data/dataHubReponse.json';
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
        // Start loading  page for get location hub
        this.$loading(true);

        for (let index = 0; index < this.dataHub.length; index++) {
            let linkQuery =
                    urlApiGetLocation +
                    encodeURIComponent(this.dataHub[index].road) +
                    "&key=" + this.$config._config.gmapApiKey;
            // Call API gmap to get lat and lng from address 
            let {
                data
            } = await axios.get(linkQuery);
            // Add location info to dataHub
            this.dataHub[index]['location'] = data.results[0].geometry.location;
            this.dataHub[index]['label'] = this.anphabetIndex(index);
            this.dataHub[index]['visible'] = true;
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
            return String.fromCharCode(index + 65);
        },
        /*
         * Event function when select hub 
         * @param {interger} index  
         * @returns {null} 
         */
        selectHub: function (index) {
           

            // Set  selected hub to unvisible
            if (this.dataHub[index]['visible'] == false) {
                // Case unselect
                this.dataHub[index]['visible'] = true;
            } else {
                // Case select
                 // Reset all hub to unselect
                for (let indexHub = 0; indexHub < this.dataHub.length; indexHub++) {
                    this.dataHub[indexHub]['visible'] = true;
                }
                this.dataHub[index]['visible'] = false;
            }

            // Update map
            this.$refs.gmap.$forceUpdate();
            // Pan map to hub location
            this.$refs.gmap.panToHub(index);
            // Update data in list hub 
            this.$forceUpdate();
        }
    }
};
