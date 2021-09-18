import axios from 'axios';

const BACKEND_URL = 'https://priceisthegoatbackend.herokuapp.com/';

class APIService {
    getUser(){
        return axios.get(BACKEND_URL + 'user/1');
    }

}

export default new APIService();