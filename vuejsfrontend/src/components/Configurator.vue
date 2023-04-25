<script>
import DataService from "../services/dataservice"
import carsList from '../components/carsList.vue';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
    props: {
        modelId: {
            type: String,
            default: ''
        },
    },
    mounted() {
        const modelId = this.$route.params.modelId;
        if (modelId) {
            this.index = parseInt(modelId) - 1;
        }
        this.generateOrderID();
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
            ellenorzes: false,
            LetoltesEllenorzes: false,
            selectedExtra: null,
            selectedExtras: [],

        }
    },

    components: {
        carsList
    },

    methods: {
        deleteExtras() {
            this.selectedCars.extras = "Nincs";
            this.selectedCars.price = this.selectedCars.price - this.selectedCars.extras.price;
        },
        addToSelectedExtras(extra) {
            if (extra.selected && !this.selectedExtras.includes(extra)) {
                this.selectedExtras.push(extra);
            } else if (!extra.selected && this.selectedExtras.includes(extra)) {
                const index = this.selectedExtras.indexOf(extra);
                this.selectedExtras.splice(index, 1);
            }
        },
        SzinValaszto() {
            this.color = this.kivalasztottszin.color;
        },
        SzinValasztoKulso() {
            this.interiorcolor = this.kivalasztottszinkulso.interiorcolor;
        },
        cancelOrder() {
            const confirmed = window.confirm('Biztos benne, hogy mégsem szeretné megrendelni a járművet?');
            if (confirmed) {
                this.$router.push('/cars');
            }
        },
        generateOrderID() {
            let randomNumber = Math.floor(1000000 + Math.random() * 9000000);
            this.orderID = randomNumber.toString().substring(0, 7);
        },
        // ...
        selectCar() {
            if (this.selectedExtras.length === 0) {
                this.selectedExtras = "Nincs";
            }

            this.selectedCars = {
                color: this.color,
                interiorcolor: this.interiorcolor,
                name: this.models[this.index].name,
                extras: this.selectedExtras,
                price: this.models[this.index].price,
                index: this.index,
                motor: this.models[this.index].motor,
                species: this.models[this.index].species,
                fuel: this.models[this.index].fuel,
                orderID: '',
            };
            this.ellenorzes = true;
        },
        downloadPDF() {
            const doc = new jsPDF();
            const tableRows = [];

            const tableColumns = ["Model", "Szín", "Belsöszin", "Extrák", "Motor", "Üzemanyag", "Tag", "Ár", "Rendelés azonosító"];
            const data = [[this.selectedCars.name, this.selectedCars.color, this.selectedCars.interiorcolor, this.selectedCars.extras,
            this.selectedCars.motor, this.selectedCars.fuel, this.selectedCars.species, this.selectedCars.price + " Ft", this.orderID]];


            doc.autoTable({
                head: [tableColumns],
                body: data,
            });

            doc.save("Számla.pdf");
        },

        // Rendelés
        order() {
            this.LetoltesEllenorzes = true;

            const orderData = {
                model: this.selectedCars.name,
                color: this.selectedCars.color,
                interiorcolor: this.selectedCars.interiorcolor,
                extras: this.selectedCars.extras,
                price: this.selectedCars.price,

            };
            axios.post('/api/order', orderData)
                .then(response => {
                    // handle successful response
                    console.log(response);
                })
                .catch(error => {
                    // handle error
                    console.error(error);
                    this.ellenorzes = true;

                });
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
        },
    },
}

</script>

<template>
    <body class="BodySize">

        <div v-if="ellenorzes == false">
            <div class="m-5 mb-0">
                <div class="mb-4 text-right">
                    <h3 class="display-6 text-uppercase mb-2">Konfigurátor</h3>
                    <h5 class="display-6 text-uppercase mb-2">{{ this.models[this.index].name }}</h5>
                </div>
            </div>
            <div class="container-fluid mt-0 center  ">

                <div class="position-relative">

                    <div class="row gx-5">
                        <div class="col-lg-6">
                            <div class="m-4 p-4">

                                <div class="row">
                                    <div class="col-lg-6">
                                        <table class="Config" style="width: 100%; max-width: 1200px; margin: 0 auto;">
                                            <tr>
                                                <td class="col-lg-6 ConfigTd">
                                                    <img v-if="color == 'fekete'" :src="models[index].img_color1"
                                                        :alt="models[index].img_url1" width="650" height="400"
                                                        style="max-width: 800px; max-height: 600px;">
                                                    <img v-if="color == 'fehér'" :src="models[index].img_color2"
                                                        :alt="models[index].img_url2" width="650" height="400"
                                                        style="max-width: 800px; max-height: 600px;">
                                                    <img v-if="color == 'piros'" :src="models[index].img_color3"
                                                        :alt="models[index].img_url3" width="650" height="400"
                                                        style="max-width: 800px; max-height: 600px;">
                                                </td>
                                                <td class="col-lg-6 ConfigTd">
                                                    <img v-if="interiorcolor == 'fekete'" :src="models[index].img_interior1"
                                                        :alt="models[index].img_interior1" width="650" height="400"
                                                        style="max-width: 800px; max-height: 600px;">
                                                    <img v-if="interiorcolor == 'fehér'" :src="models[index].img_interior2"
                                                        :alt="models[index].img_interior2" width="650" height="400"
                                                        style="max-width: 800px; max-height: 600px;">
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
                        <div class="table-responsive">
                            <table class="table tableColor">
                                <thead>
                                    <tr>
                                        <th>Színe</th>
                                        <th>Kárpit színe</th>
                                        <th>motor</th>
                                        <th>üzemanyag</th>
                                        <th>Tag</th>
                                        <th>ár</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <select v-model="kivalasztottszin" @change="SzinValaszto()">
                                                <option v-for="szin in colors" :value="szin">{{ szin.color }}</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select v-model="kivalasztottszinkulso" @change="SzinValasztoKulso()">
                                                <option class="selected" v-for="szin in colors" :value="szin">
                                                    {{ szin.interiorcolor }}
                                                </option>
                                            </select>
                                        </td>
                                        <td>{{ models[this.index].motor }}</td>
                                        <td>{{ models[this.index].fuel }}</td>
                                        <td>{{ models[this.index].species }}</td>
                                        <td>{{ price }} Ft</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="input-group mb-3 right">
                            <div class="input-group mb-3 right">
                                <div class="input-group mb-3 right">
                                    <button class="btn btn-danger m-1" @click="cancelOrder">
                                        Mégsem
                                    </button>
                                    <button @click="selectCar" class="btn btn-primary m-1">Kész</button>
                                </div>
                            </div>
                        </div>
                        <div class="left text-light">
                            <div class="m-2 form-check d-flex flex-wrap form-switch" v-for="(extra, index) in   extras  "
                                :key="index">
                                <input class="checkbox mr-2" type="checkbox" :name="extra.name" :id="extra.name"
                                    :value="extra.price" v-model="selectedExtras"
                                    :checked="selectedExtras.includes(extra.price)"
                                    @change="extra.selected = selectedExtras.includes(extra.price); addToSelectedExtras(extra)">
                                <label class="label" :for=" extra.name ">
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
        </div>
        <!---------------------------------------------------------------------------------------------------------------------->
        <div v-if=" ellenorzes == true ">
            <div class="container">
                <div class="m-5">
                    <h1 class="text-center m-5">Rendelés összegzése</h1>
                </div>
            </div>
            <div class="container mt-5">
                <div class="table-responsive ">
                    <table class="table table-striped table-bordered TableFontSize">
                        <thead>
                            <tr>
                                <th>Model</th>
                                <th>Szín</th>
                                <th>Belsőszín</th>
                                <th>Extrák</th>
                                <th>Motor</th>
                                <th>Üzemanyag</th>
                                <th>Tag</th>
                                <th>Ár</th>
                                <th>Rendelés azonosító</th>
                                <th class="text-center">PDF Számla</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ this.selectedCars.name }}</td>
                                <td>{{ this.selectedCars.color }}</td>
                                <td>{{ this.selectedCars.interiorcolor }}</td>
                                <td>{{ this.selectedCars.extras }}</td>
                                <td>{{ this.selectedCars.motor }}</td>
                                <td>{{ this.selectedCars.fuel }}</td>
                                <td>{{ this.selectedCars.species }}</td>
                                <td>{{ this.selectedCars.price }} Ft</td>

                                <td>{{ orderID }}</td>
                                <td class="text-center" v-if=" LetoltesEllenorzes == false ">
                                    <p class="">A letöltéshez rendelje meg!</p>
                                </td>
                                <td class="text-center" v-if=" LetoltesEllenorzes == true ">
                                    <button class="btn btn-primary " @click=" downloadPDF ">
                                        letöltése
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="10">
                                    <div class="d-flex justify-content-end">
                                        <button class="btn btn-danger mx-2" @click=" cancelOrder ">
                                            Mégsem
                                        </button>
                                        <div v-if=" this.selectedCars.extras != 'Nincs' ">
                                            <button class="btn btn-danger mx-2" @click=" deleteExtras() ">
                                                Extrák törlése
                                            </button>
                                        </div>
                                        <button class="btn btn-success mx-2" @click=" order ">
                                            Rendelés
                                        </button>

                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </body>
</template>

<style scoped>
.TableFontSize {
    font-size: 14px;
}

.tableColor {
    color: #fff;
    /* Szöveg színe fehér */
}

select {
    padding: 10px;
    font-size: 16px;
    line-height: 1.3;
    border-radius: 5px;
    border: none;
    background-color: #333;
    /* Háttérszín */
    color: #fff;
    /* Szöveg színe fehér */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
}

select:hover {
    background-color: #555;
    /* Háttérszín hover állapotban */
}

select:focus {
    outline: none;
    /* Eltávolítja a kijelölési keretet */
    box-shadow: 0 0 2px 1px #666;
    /* Árnyék hozzáadása a fókuszált állapotban */

}

@media (max-width: 768px) {
    .left {
        width: 100%;
    }
}

body {
    transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
    body {
        transform: scale(0.97);
    }

    img {
        width: 100%;
        height: 100%;
    }
}

.checkbox {

    margin-right: 5px;
    border: 1px solid #2b2a2a;
}


</style>