import axios from "axios";

export default {
	getDirections: function(query) {
			return axios.get("/api/directions", { params: { q: query } });
	},
	getTrucks: function() {
		return axios.get("/api/trucks");
	}		
};
