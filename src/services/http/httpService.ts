import { API_BASE_URL } from "@app/constants";
import { Axios } from "axios";

export const httpService = new Axios({
  baseURL: API_BASE_URL,
  transformResponse: (r) => {
    return JSON.parse(r);
  },
  headers: {
    "Content-Type": "application/json",
  },
  transformRequest: [
    (data) => {
      try {
        return JSON.stringify(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        return data;
      }
    },
  ],
});
