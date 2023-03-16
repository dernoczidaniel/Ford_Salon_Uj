import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:3000/api';

export default {
    getAllColor(){
        return Axios.get('/getcolor')
            .then(resp => {
                //console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                //console.log(err);
                return Promise.reject(err);
            })
    },

}