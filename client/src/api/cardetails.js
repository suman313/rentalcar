import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/cars/",
});

export const fetchAllCars = () => API.get("/");
