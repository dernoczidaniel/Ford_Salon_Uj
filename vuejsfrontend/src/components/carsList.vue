<script>
import DataService from "../services/dataservice";
import { ref, computed } from "vue";
import { useRouter } from 'vue-router'
export default {
    setup() {
        const models = ref([]);
        const searchQuery = ref("");
        const selectedIndex = ref(0);
        const router = useRouter();
        DataService.getModels()
            .then((resp) => {
                models.value = resp;
            })
            .catch((err) => {
                console.log(err);
            });
        const valaszto = (model) => {
            if (model) {
                router.push({ name: 'Configurator', params: { id: model.id } });
            }
        };
        const filteredModels = computed(() => {
            return models.value.filter((model) => {
                return model.name
                    .toLowerCase()
                    .includes(searchQuery.value.toLowerCase());
            });
        });
        const IndexValaszto = (index) => {
            selectedIndex.value = index;
        };
        return { models, searchQuery, filteredModels, IndexValaszto, selectedIndex, valaszto };
    },
};
</script>
<template >
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
            </div>
        </div>
    </div>
    <body class="BodySize">
        <div class="row">
            <div class="col-12 col-md-6 col-xl-4 mb-4" v-for="model in filteredModels" :key="model.id">
                <div class="card w-100">
                    <div class="card-body" >
                        <h2>{{ model.name }}</h2>
                        <hr>
                        {{ model.fuel }} - {{ model.species }}      
                        <img :src="model.img_url" :alt="model.img_url" width="500" height="300">
                        <p>Ár: {{ model.price }} Ft-tól </p>
                        <router-link :to="{ name: 'Configurator', params: { modelId: model.id.toString() } }">
                            <button  :id="model.id" class="btn btn-primary"  @click="() => IndexValaszto(model.id)"> Konfigurator </button>
                        </router-link>
                    </div>
                </div>
            </div>   
        </div>
    </body>
</template>