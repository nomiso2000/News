import axios from "axios";

export const getItems = (section = "home") => {
  axios.defaults.baseURL = "https://api.nytimes.com";
  const KEY = "59RQizYqGGyqf5Bu8VpViRBqnaFthEVU";
  const url = `/svc/topstories/v2/${section}.json?api-key=${KEY}`;
  return axios.get(url);
};
