import axios from "axios";
// import { toast } from "react-toastify";
axios.defaults.baseURL = 'http://ec2-13-233-106-135.ap-south-1.compute.amazonaws.com/';
// axios.defaults.headers.common['Authorization'] = `Bearer ${getCookie('token')}`;
//axios.defaults.timeout = 10000;
// axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';


const headers = { headers: { "Content-Type": "application/json" } };
const httpGet = async (url) => {
    try {
        const response = await axios.get(url, headers);
        //   console.log(response);
        return response;
    } catch (error) {
        //    console.log(error);
        if (error.response?.data?.message) {
            // toast.error(error.response?.data?.message);
            return false;
        } else {
            return error;
        }
    }

}

const httpPost = async (url, params) => {
    //console.log("calling api")
    try {
        const response = await axios.post(url, params, headers)
        //  console.log(response);
        return response;
    } catch (error) {
        console.log("11113333------------>", error.response?.data?.message);
        if (error.response?.data?.message) {
            // toast.error(error.response?.data?.message);
            return false;
        } else {
            return error;
        }
    }
}

const httpPut = async (url, params) => {
    try {
        const response = await axios.post(url, params, headers)
        //  console.log(response);
        return response;
    } catch (error) {
        //    console.log(error);
        if (error.response?.data?.message) {
            // toast.error(error.response?.data?.message);
            return false;
        } else {
            return error;
        }
    }
}

const httpDelete = async (url, params) => {
    try {
        const response = await axios.delete(url, params, headers)
        //  console.log(response);
        return response;
    } catch (error) {
        //    console.log(error);
        if (error.response?.data?.message) {
            // toast.error(error.response?.data?.message);
            return false;
        } else {
            return error;
        }
    }
}

export { httpGet, httpPost, httpPut, httpDelete }