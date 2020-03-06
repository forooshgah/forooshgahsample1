import axios from 'axios';

class BaseService {
    
    //baseUrl = 'https://localhost:44312/';
    baseUrl = 'http://185.2.14.80:8094/';

    
    handleError = (error) => {
        switch (error.response.status) {
            case 401:
                console.log('401');
                break;
            case 404:
                //this.redirectTo(document, '/404')
                console.log('404');
                break;
            default:
                //this.redirectTo(document, '/500')
                console.log('500');
                break;
        }

        return Promise.reject(error.response || error.message);
    }

    redirectTo = (document, path) => {
        document.location = path
    }

    // get(path, callback) {
    //     return this.service.get(path).then(
    //         (response) => callback(response.status, response.data)
    //     );
    // }

    post(path, payload) {
        path = this.baseUrl +"api"+ path;
        return axios.request({
            method: 'POST',
            url: path,
            responseType: 'json',
            data: payload
        }).then(response =>{ return response.data })
        .catch(this.handleError);
    }
}

export default new BaseService;