import axios from "axios";

const client = axios.create({
    baseURL : 'http://localhost:5000'
})
export const request = ({...options}) =>{
    const token = localStorage.getItem('accessToken');
    client.defaults.headers.common.Authorization = `Bearer ${token}`

    const onSuccess = res => res
    const onError =err =>{

        return err;
    }
    return client(options).then(onSuccess).catch(onError)
}