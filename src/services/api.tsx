import axios from "axios";

export const api = axios.create({
  baseURL: "https://barbeariaapi.azurewebsites.net/"
})