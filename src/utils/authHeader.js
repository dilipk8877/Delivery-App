import customFetch from "./axiosGet";

export  const authHeader = ()=>{
    const token = localStorage.getItem('token')
    return {headers: {
        Authorization: token,
        Accept: "application/json",
        "Content-type": "application/json",
      }}
}

export const setToken = (token) => {
  customFetch.defaults.headers.common['Authorization'] = token;
}
