import axios from "axios";

const customFetch = axios.create({
  baseURL: `https://delivery-app.softprodigyphp.in`,
  // headers: {
  //   // Authorization: token,
  //   Accept: "application/json",
  //   "Content-type": "application/json",
  // },
});

export default customFetch;
