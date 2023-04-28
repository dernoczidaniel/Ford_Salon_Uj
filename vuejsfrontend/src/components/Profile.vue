<script>
import Axios from 'axios';

export default {
    name: 'MyComponent',
    data() {
        return {
            users: [],
            index: 0,
        }
    },
    created() {
        this.getUsers().then(data => {
            this.users = data;
            // this.index = this.users.findIndex(user => user.id === this.userId);
        });
    },
    methods: {
        getUsers() {
            return Axios.get('/getUsers')
                .then(resp => {
                    console.log(resp.data);
                    return resp.data;
                })
                .catch(err => {
                    console.log(err);
                    return Promise.reject(err);
                });
        }
    }
}
</script>



<template>
    <body class="BodySize setingsWalpapper">

        <div class="container-fluid p-5 mt-0 center ">
            <div class="position-relative">
                <div class="row gx-5 ">
                    <div class="col-lg-12">

                        <div class="ServiceWalpapperColor">
                            <div class="m-4 p-4">

                                <div class="m-5 center ">

                                    <img src="../assets/img/Pofile/logo.png" alt="logo" style="width: 50%;">

                                </div>


                                <div class="m-5 center ">
                                    <h3 class="display-6 text-uppercase mb-0 text-light"> Adatok</h3>
                                </div>
                                <div class="text-light m-2">
                                    <p>Név: {{ users[index].name }}</p>
                                </div>
                                <div class="m-2">
                                    <p class="text-light">Email: {{ users[index].email }}</p>
                                </div>
                                <div class="m-2">
                                    <p class="text-light">Telefon: {{ users[index].telefon }}</p>
                                </div>
                                <div class="m-2">
                                    <p class="text-light">Lakcím: {{ users[index].postalcode }} {{ users[index].city }} {{
                                        users[index].address }}</p>
                                </div>
                                <div class="m-2">
                                    <p class="text-light">Születésnap: {{ users[index].birthdate }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>