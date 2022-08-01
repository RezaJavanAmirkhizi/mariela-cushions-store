import axios from "axios";

const instance = axios.create({
	baseURL: "https://mariela-json-server.herokuapp.com",
});

export default instance;