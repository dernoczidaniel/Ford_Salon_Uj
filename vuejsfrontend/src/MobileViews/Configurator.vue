<template>
    <div>
        <h3 class="text-uppercase mb-2">{{ models[index].name }}</h3>
        <div class="mb-4">
            <img :src="getCarImage" :alt="models[index].img_url1" width="100%">
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="mb-4">
                    <label for="color">Szín:</label>
                    <select id="color" v-model="color" @change="updatePrice">
                        <option v-for="color in colors" :value="color">{{ color.color }}</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label for="interior-color">Kárpit színe:</label>
                    <select id="interior-color" v-model="interiorcolor" @change="updatePrice">
                        <option v-for="color in colors" :value="color">{{ color.interiorcolor }}</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label for="extra">Extra:</label>
                    <select id="extra" v-model="selectedExtra" @change="updatePrice">
                        <option v-for="extra in extras" :value="extra.price">{{ extra.name }} - {{ extra.price }} Ft
                        </option>
                    </select>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="mb-4">
                    <label>Motor:</label>
                    <span>{{ models[index].motor }}</span>
                </div>
                <div class="mb-4">
                    <label>Üzemanyag:</label>
                    <span>{{ models[index].fuel }}</span>
                </div>
                <div class="mb-4">
                    <label>Tag:</label>
                    <span>{{ models[index].species }}</span>
                </div>
                <div class="mb-4">
                    <label>Ár:</label>
                    <span>{{ price }} Ft</span>
                </div>
            </div>
        </div>
        <div class="mb-4">
            <button @click="sendToSummary">Color to Summary</button>
            <router-link to="/summary">Kész</router-link>
        </div>
        <h4>Leírás</h4>
        <p>{{ description }}</p>
    </div>
</template>


<script>
import DataService from "../services/dataservice"
import carsList from '../components/carsList.vue';
import { mapMutations, mapGetters } from 'vuex';
export default {
    props: {
        modelId: {
            type: String,
            default: ''
        },
        selectedCar: {
            type: Array,
            default: () => []
        },
    },
    mounted() {
        const modelId = this.$route.params.modelId;
        if (modelId) {
            this.index = parseInt(modelId) - 1;
        }
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
            index: 0, // default value is 0
            selectedCars: [], // change the property name to "selectedCar"
            description: '',
        }
    },

    components: {
        carsList
    },
    computed: {
        ...mapGetters(['color'])
    },

    methods: {
        ...mapMutations(['setColor']),
        SzinValaszto() {
            this.color = this.kivalasztottszin.color;
        },
        SzinValasztoKulso() {
            this.interiorcolor = this.kivalasztottszinkulso.interiorcolor;
        },
        Send() {
            this.$store.commit('setColor', this.color);
        }
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