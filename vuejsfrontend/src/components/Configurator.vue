<script>
import DataService from "../services/dataservice"
import { ref, watch, reactive } from 'vue'
import carsList from '../components/carsList.vue';
import { useRoute } from 'vue-router';
// import { useAutoSend } from '../stores';
import { onMounted } from 'vue';

export default {
    props: {
        selectedCar: {
            type: Object,
            default: null
        },
        modelId: {
            type: String,
            default: ''
        }
    },
    mounted() {
        const modelId = this.$route.params.modelId;
        this.index = parseInt(modelId) - 1;
        // Do something with the modelId parameter
    },

    data() {
        return {
            name: '',
            models: [],
            cars: [],
            extras: [],
            price: 0,
            kivalasztottszin: null,
            kivalasztottszinkulso: null,
            color: 'fehér',
            interiorcolor: 'fehér',
            colors: [],
            index: 0,
            selectedCar: [], // change the property name to "selectedCar"
            description: [],
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
        },
        selectAndSendCar() {
            if (this.kivalasztottszin && this.kivalasztottszinkulso) {
                const selectedCar = {
                    color: this.kivalasztottszin.color,
                    interiorcolor: this.interiorcolor,
                    modelIndex: this.index,
                    extras: []
                };
                for (const extra of this.extras) {
                    if (extra.selected) {
                        selectedCar.extras.push({ name: extra.name, price: extra.price });
                        this.price += extra.price;
                    }
                }
                this.$emit('carSelected', this.selectedCar);
                console.log(selectedCar);

            } else {
                alert('Kérlek válaszd ki mindkét színt!');
                console.log("üres")
            }
        },


    },

    created() {
        DataService.getCars()
            .then((resp) => {
                if (typeof resp === 'string') {
                    this.cars = JSON.parse(resp);
                } else {
                    this.cars = resp;
                }
                console.log(this.cars);
                this.colors = this.cars.map((car) => ({ color: car.color, interiorcolor: car.interiorcolor }));
            })
            .catch((err) => {
                console.log('Error while fetching cars:', err);
            });

        DataService.getModels()
            .then((resp) => {
                if (typeof resp === 'string') {
                    this.models = JSON.parse(resp);
                } else {
                    this.models = resp;
                }
                console.log(this.models);
                fetch(this.models[this.index].description)
                    .then((response) => response.text())
                    .then((data) => {
                        this.description = data;
                    });
                this.price += this.models[this.index].price;
            })
            .catch((err) => {
                console.log('Error while fetching models:', err);
            });

        DataService.getExtras()
            .then((resp) => {
                if (typeof resp === 'string') {
                    this.extras = JSON.parse(resp);
                } else {
                    this.extras = resp;
                }
                console.log(this.extras);
            })
            .catch((err) => {
                console.log('Error while fetching extras:', err);
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
    },
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
                        <div class="input-group mb-3 right">
                            {{ selectedCar }}
                            <router-link :to="{ name: 'summary', params: { selectedCar: JSON.stringify(selectedCar) } }">
                                <button @click="selectAndSendCar">Kész</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="left text-light">
                    <div class="m-2 form-check" v-for="(extra, index) in extras" :key="index">
                        <input class="checkbox" type="radio" :name="extra.name" :id="extra.name" :value="extra.price"
                            v-model="selectedExtra" :checked="selectedExtra === extra.price"
                            @change="extra.selected = selectedExtra === extra.price">
                        <label class="label" :for="extra.name">
                            {{ extra.name }} - {{ extra.price }} Ft
                        </label>
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