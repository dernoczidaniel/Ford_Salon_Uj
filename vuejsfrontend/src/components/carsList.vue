<script>
import DataService from "../services/dataservice";
import { ref, computed } from "vue";

export default {
    setup() {
        const models = ref([]);
        const searchQuery = ref("");
        const selectedIndex = ref(0); // új változó

        DataService.getModels()
            .then((resp) => {
                models.value = resp;
                console.log(models.value);
            })
            .catch((err) => {
                console.log(err);
            });

        const filteredModels = computed(() => {
            return models.value.filter((model) => {
                return model.name
                    .toLowerCase()
                    .includes(searchQuery.value.toLowerCase());
            });
        });

        const IndexValaszto = (index) => {
            selectedIndex.value = index; // eltároljuk az indexet
            console.log("Selected index:", selectedIndex.value);
        };

        return { models, searchQuery, filteredModels, IndexValaszto, selectedIndex };
    },
};
</script>


<template >

    <!-- Kocsik -->
<div class="container-fluid p-0 mb-5 ">
    <div class="mb-0 text-center p-5 CarsHeader">
            <h1 class="display-3 text-uppercase mb-0 text-light">Modellek</h1> <!-- cím -->
            <div class="container">
                <div class="row">
                    <div class="center">
                        <div class="col-6 ">
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Keresés az autók között..."
                                    v-model="searchQuery" />

                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="row ">
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
                            </div> -->
            </div>
        </div>
    </div>

    <body class="BodySize">

        <div class="row">
            <div class="col-12 col-md-6 col-xl-4" v-for="model in filteredModels" :key="model.id">
                <div class="card w-100">
                    <div class="card-body">
                        <h2>{{ model.name }}</h2>
                        <img :src="model.img_url" :alt="model.img_url" width="500" height="300">
                        <p>Ár: {{ model.price }} Ft-tól</p>
                        <a href="/Configurator"><button  :id="model.id" class="btn btn-primary" @click="() => IndexValaszto(model.id)"> Konfigurator </button>
                        </a>
                    </div>
                </div>
         
            </div>   
        </div>
    </body>
</template>