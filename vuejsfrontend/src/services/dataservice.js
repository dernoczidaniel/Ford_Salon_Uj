import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:3000/api/ford';

export default {
    getCars(){
        return Axios.get('/getCars')
            .then(resp => {
                console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                console.log(err);
                return Promise.reject(err);
            })
    },
    getModels(){
        return Axios.get('/getModels')
            .then(resp => {
                console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                console.log(err);
                return Promise.reject(err);
            })
    },
    getExtras(){
        return Axios.get('/getExtras')
            .then(resp => {
                console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                console.log(err);
                return Promise.reject(err);
            })
    },
    getPayment(){
        return Axios.get('/getPayment')
            .then(resp => {
                console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                console.log(err);
                return Promise.reject(err);
            })
    },
    getSalons(){
        return Axios.get('/getSalons')
            .then(resp => {
                console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                console.log(err);
                return Promise.reject(err);
            })
    },
    getUsers(){
        return Axios.get('/getUsers')
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