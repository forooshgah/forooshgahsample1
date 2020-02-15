import axios from 'axios'

const baseUrl = 'http://185.2.14.80:8094/api';
export function search(){
    return axios.post(baseUrl+'/Product/Search',{})
}