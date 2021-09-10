import axios, { AxiosInstance } from "axios";

export const useHttp = () => {
    const token = localStorage.getItem("jwt_token")
    
    const http: AxiosInstance = axios.create({
        baseURL: process.env.BASE_API_URL,
        withCredentials: true
    });

    if(token){
        http.defaults.headers["access_token"] = token
    }

    console.log("== use http axios ==", http)

    return { http }
}