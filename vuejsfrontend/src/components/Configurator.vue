<script>
import DataService from "../services/dataservice"
import { ref, watch, reactive } from 'vue'
import carsList from '../components/carsList.vue';

export default {
    name: 'Configurator',
    mounted() {
        const modelId = this.$route.params.modelId;
        this.index = parseInt(modelId-1);
        // Do something with the modelId parameter
    },
    data() {
        return {
            models: [],
            cars: [],
            extras: [],
            price: 0,
            description: '',
            kivalasztottszin: null,
            kivalasztottszinkulso: null,
            color: 'fehér',
            interiorcolor: 'fehér',
            colors: [],
            index: 0
        }
    },

    components: {
        carsList
    },

    methods: {
        SzinValaszto() {
            this.color = this.kivalasztottszin.color;
        },
        SzinValasztoKulso() {
            this.interiorcolor = this.kivalasztottszinkulso.interiorcolor;
        }
    },

    created() {
        DataService.getCars()
            .then((resp) => {
                this.cars = resp;
                console.log(this.cars);

                // colors list
                this.colors = this.cars.map((car) => ({ color: car.color, interiorcolor: car.interiorcolor }));
            })
            .catch((err) => {
                console.log(err);
            });

        DataService.getModels()
            .then((resp) => {
                this.models = resp;
                console.log(this.models);
                fetch(this.models[index].description)
                    .then((response) => response.text())
                    .then((data) => {
                        this.description = data;
                    });
                // add models[1].price to price
                this.price += this.models[index].price;
            })
            .catch((err) => {
                console.log(err);
            });

        DataService.getExtras()
            .then((resp) => {
                this.extras = resp;
                console.log(this.extras);
            })
            .catch((err) => {
                console.log(err);
            });
    },

    watch: {
        index() {
            fetch(this.models[this.index].description)
                .then((response) => response.text())
                .then((data) => {
                    this.description = data;
                });
            // add models[this.index].price to price
            this.price += this.models[this.index].price;
        }
    }
}

</script>

<template>
    {{ index }}
    <div class="container-fluid mt-0 center  ">
        <div class="position-relative">
            <div class="row gx-5">
                <div class="col-lg-6">
                    <div class="m-4 p-4">
                        <div class="mb-4">
                            <h3 class="display-6 text-uppercase mb-2">Konfigurátor</h3>
                            <h5 class="display-6 text-uppercase mb-2">{{ models[index].name }}</h5>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <table class="Config" style="width: max-content;">
                                    <tr>
                                        <td class="col-lg-6 ConfigTd">
                                            <img v-if="color == 'fekete'" :src="models[index].img_color1"
                                                :alt="models[index].img_url1" width="650" height="400">
                                            <img v-if="color == 'fehér'" :src="models[index].img_color2"
                                                :alt="models[index].img_url2" width="650" height="400">
                                            <img v-if="color == 'piros'" :src="models[index].img_color3"
                                                :alt="models[index].img_url3" width="650" height="400">
                                        </td>
                                        <td class="col-lg-6 ConfigTd">
                                            <img v-if="interiorcolor == 'fekete'" :src="models[index].img_interior1"
                                                :alt="models[index].img_interior1" width="650" height="400">
                                            <img v-if="interiorcolor == 'fehér'" :src="models[index].img_interior2"
                                                :alt="models[index].img_interior2" width="650" height="400">
                                        </td>
                                        <td class="col-lg-6 ConfigTd mx-auto">
                                            <h3 class="m-1 text-center">Extra</h3>
                                            <div class="form-check" v-for="extra in extras">
                                                <input class="form-check-input" type="checkbox" :name="extra" :id="extra">
                                                <label class="form-check-label" :for="extra">
                                                    {{ extra.name }} - {{ extra.price }} Ft
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">

            <div class="mb-0 p-5 ColorMenu">
                <div class="center">


                    <table class="table text-light">
                        <tr>
                            <th>Színe</th>
                            <th>Kárpit színe</th>
                            <th>motor</th>
                            <th>üzemanyag</th>
                            <th>Tag</th>
                            <th>ár</th>
                        </tr>
                        <tr>
                            <td>
                                <select v-model="kivalasztottszin" @change="SzinValaszto()">
                                    <option v-for="szin in colors" :value="szin">{{ szin.color }}</option>
                                </select>
                            </td>

                            <td>
                                <select v-model="kivalasztottszinkulso" @change="SzinValasztoKulso()">
                                    <option class="selected" v-for="szin in colors" :value="szin">{{ szin.interiorcolor }}
                                    </option>
                                </select>
                            </td>
                            <td>
                                {{ models[index].motor }}
                            </td>

                            <td>
                                {{ models[index].fuel }}
                            </td>

                            <td>
                                {{ models[index].species }}
                            </td>
                            <td>
                                {{ price }} Ft
                            </td>
                        </tr>

                    </table>
                </div>
                <div class="input-group mb-3 right">
                    <div class="input-group mb-3 right">
                        <a href="/SummaryPage">
                            <button class="btn btn-outline-secondary  m-1" type="button">Tovább</button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <h2 class="m-2">Leírás</h2>
    <p class="m-2">{{ description }}</p>
    <div class="container-fluid mt-0 p-5">
    </div>
</template>