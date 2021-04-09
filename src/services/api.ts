import axios from "axios";

const api = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/Daniel-Vinicius/Worldtrip/continents",
});

export default api;
