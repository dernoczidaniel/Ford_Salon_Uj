import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:3000/api/ford';

export default {
    getDeliveryNames(){
        return Axios.get('/getDeliveryNames')
            .then(resp => {
                console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                console.log(err);
                return Promise.reject(err);
            })
    },
    getInteriorColor(){
        return Axios.get('/getInteriorColor')
            .then(resp => {
                console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                console.log(err);
                return Promise.reject(err);
            })
    },


}