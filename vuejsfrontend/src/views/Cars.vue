<script setup>
import dataservice from "../services/dataservice";
import DataService from "../services/dataservice";
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue'

const models = ref([]);




DataService.getModels()
    .then((resp) => {
        models.value = resp;
        console.log(models.value);
    })
    .catch((err) => {
        console.log(err);
    });






</script>


<template>


    <!-- Kocsik -->
    <div class="container-fluid p-0 mb-5 ">
        <div class="  mb-0 text-center p-5 CarsHeader">

            <h1 class="display-3 text-uppercase mb-0 text-light">Modellek</h1> <!-- cím -->



            <div class="container-fluid  center ">




                <div class="row ">
                    <div class="col-lg-12 position-relative">
                        <div class="input-group mb-2 p-5 ">
                            <span class="input-group-text " id="basic-addon1">Kereső: </span>
                            <input type="search" class="form-control " placeholder="írja be az autó nevét..."
                                aria-label="kereso" aria-describedby="basic-addon1">
                        </div>
                    </div>
                </div>






                <div class="row ">
                    <div class="col-lg-12 position-relative">
                        <div class="mb-2 p-5 ">
                            <a class="btn btn-light m-1" style="color: black;">Szűrő:</a>
                            <a class="btn btn-dark m-1" style="color: lightblue;">Mild Hibrid</a>
                            <a class="btn btn-dark m-1" style="color: lightgreen;">Elektromos</a>
                            <a class="btn btn-dark m-1" style="color: gray;">Benzines</a>
                            <a class="btn btn-dark m-1" style="color: orange;">Családi</a>
                            <a class="btn btn-dark m-1" style="color: blue;">Sport</a>
                            <a class="btn btn-dark m-1" style="color: brown;">Terep</a>


                        </div>
                    </div>
                </div>

            </div>






        </div>



    </div>

    <div class="row">
            <div v-for="auto in models" :key="auto.id" class="col-12 col-md-6 col-xl-4">
                <div class="card w-100">
                    <img :src="auto.pictureUrl" class="card-img-top p-3">
                    <div class="card-body">
                        <h5 class="card-title">{{ auto.name }}</h5>
                        <img src="" alt="">
                        <p class="card-text">
                            
                            <img :src="auto.img_url" class="card-img-top p-3">
                            
                            {{ auto.price }} Ft
                        </p>
                        <p class="text-center mb-0">
                           
                            <a href="" class="btn btn-primary">Konfigurator</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

</template>