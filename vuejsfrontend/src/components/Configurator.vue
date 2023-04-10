<script setup>
import DataService from "../services/dataservice"
import { ref, watch } from 'vue'
import { defineComponent } from 'vue'
import carsList from '../components/carsList.vue';

const index = ref(1);

// const carsComponent = defineComponent({
//   name: 'carsComponent',
//   components: { carsList },
//   data() {
//     return {
//       selectedIndex: 0,
//     }
//   },
// })
// const index = ref(carsComponent.selectedIndex);
// watch(carsComponent, 'selectedIndex', (newValue) => {
//   index.value = newValue;
// });

const models = ref([]);
const cars = ref([]);
const extras = ref([]);
const price = ref(0);
const description = ref('');

const kivalasztottszin = ref();
const kivalasztottszinkulso = ref();
const color = ref("fehér")
const interiorcolor = ref("fehér");

const colors = ref([]);

const SzinValaszto = () => {
    color.value = kivalasztottszin.value.color;
};
const SzinValasztoKulso = () => {
    interiorcolor.value = kivalasztottszinkulso.value.interiorcolor;
};

DataService.getCars()
    .then((resp) => {
        cars.value = resp;
        console.log(cars.value);

        // colors list
        colors.value = cars.value.map((car) => ({ color: car.color, interiorcolor: car.interiorcolor }));
    })
    .catch((err) => {
        console.log(err);
    });
DataService.getModels()
    .then((resp) => {
        models.value = resp;
        console.log(models.value);
        fetch(models.value[0].description) //indexedik elemére átszerkezteni
            .then((response) => response.text())
            .then((data) => {
                description.value = data;
            });
        // add models[1].price to price
        price.value += models.value[0].price; //indexedik elemére átszerkezteni
    })
    .catch((err) => {
        console.log(err);
    });

DataService.getExtras()
    .then((resp) => {
        extras.value = resp;
        console.log(extras.value);
    })
    .catch((err) => {
        console.log(err);
    });
</script>

<template>
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
                                                <input class="form-check-input" type="radio" :name="extra" :id="extra">
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