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
    <div class="my-element animate__animated animate__fadeIn" :style="{ 'animation-delay': '0.5s' }">

        <div class="container-fluid p-0 mb-5">
            <div class="mb-0 text-center p-5 CarsHeader">
                <h1 class="display-3 text-uppercase mb-0 text-light">Modellek</h1> <!-- cím -->
                <div class="container">
                    <div class="row">
                        <div class="center">
                            <div class="col-12 col-sm-6"> <!-- használjuk a "col-sm-6" class-t a reszponzivitáshoz -->
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
                <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" v-for="model in filteredModels" :key="model.id">
                    <!-- használjuk a "col-lg-4" és "col-xl-3" class-okat a reszponzivitáshoz -->
                    <div class="card w-100">
                        <div class="card-body">
                            <h2>{{ model.name }}</h2>
                            <hr>
                            {{ model.fuel }} - {{ model.species }}
                            <img :src="model.img_url" :alt="model.img_url" class="w-100">
                            <!-- használjuk a "w-100" class-t a kép reszponzivitásának biztosításához -->
                            <p>Ár: {{ model.price }} Ft-tól</p>
                            <router-link :to="{ name: 'Configurator', params: { modelId: model.id.toString() } }">
                                <button :id="model.id" class="btn btn-primary" @click="() => IndexValaszto(model.id)">
                                    Konfigurator </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

        </body>
    </div>
</template>