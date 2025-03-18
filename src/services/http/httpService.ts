import { API_BASE_URL } from "@app/constants";
import { Axios } from "axios";

export const httpService = new Axios({
  baseURL: API_BASE_URL,
});
