// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Geocoder API
const nytSearchAPI = "3d6446c5bbce42a68429fb02c8ad0975";

// Helper Functions (in this case the only one is runQuery)
const helpers = {

  runQuery: (location) => {

    console.log(location);

    // Figure out the geolocation
    const queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;

    return axios.get(queryURL).then((response) => {

      console.log(response);
      return response.data.results[0].formatted;
    });

  }
};

// We export the helpers function (which contains getGithubInfo)
export default helpers;