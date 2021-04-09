import axios from "axios";

const api = axios.create({
  baseURL: "https://mockend.com/Daniel-Vinicius/Worldtrip/continents",
});

export default api;
