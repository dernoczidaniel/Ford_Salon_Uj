

<template>

        <div class="m-3 mb-0">
            <h3 class="display-6 text-uppercase mb-2 mt-4">Konfigurátor</h3>
            <p class=" mb-2">Egyszerűsített mobile nézet</p>

            <h5 class="display-6 text-uppercase mb-2">{{ this.models[this.index].name }}</h5>
        </div>


        <div class="Config" style="width: 140%; max-width: 1200px; margin: 0 auto;">
            <div class="row">
                <div class="col-12 col-lg-6 ConfigTd">
                    <img v-if="color == 'fekete'" :src="models[index].img_color1" :alt="models[index].img_url1"
                        class="img-fluid">
                    <img v-if="color == 'fehér'" :src="models[index].img_color2" :alt="models[index].img_url2"
                        class="img-fluid">
                    <img v-if="color == 'piros'" :src="models[index].img_color3" :alt="models[index].img_url3"
                        class="img-fluid">
                </div>
                <div class="col-12 col-lg-6 ConfigTd">
                    <img v-if="interiorcolor == 'fekete'" :src="models[index].img_interior1"
                        :alt="models[index].img_interior1" class="img-fluid">
                    <img v-if="interiorcolor == 'fehér'" :src="models[index].img_interior2"
                        :alt="models[index].img_interior2" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table tableColor">
                <thead>
                    <tr>
                        <th>Szín</th>
                        <th>Kárpit</th>
                        <th>Tulajdonságok</th>
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
                                <option class="selected" v-for="szin in colors" :value="szin">{{ szin.interiorcolor }}
                                </option>
                            </select>
                        </td>
                        <td>
                            <p><strong>Motor:</strong> {{ models[this.index].motor }}</p>
                            <p><strong>Üzemanyag:</strong> {{ models[this.index].fuel }}</p>
                            <p><strong>Tag:</strong> {{ models[this.index].species }}</p>
                            <p><strong>Ár:</strong> {{ price }} Ft</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


        <div class="m-2 form-check form-switch" v-for="(extra, index) in        extras       " :key="index">
            <div class="d-flex align-items-center">
                <input class="checkbox mr-2" type="checkbox" :name="extra.name" :id="extra.name" :value="extra.price"
                    v-model="selectedExtras" :checked="selectedExtras.includes(extra.price)"
                    @change="extra.selected = selectedExtras.includes(extra.price); addToSelectedExtras(extra)">
                <label class="label mb-0" :for=" extra.name ">
                    {{ extra.name }} - {{ extra.price }} Ft
                </label>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <button class="btn btn-danger btn-lg m-2" @click=" cancelOrder ">Mégsem</button>
            <button class="btn btn-primary btn-lg m-2" @click=" selectCar ">Kész</button>
        </div>
        <h2 class="m-2">Leírás</h2>
        <p class="m-2">{{ description }}</p>





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
</template>






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

<style>
/* Mobil nézet */
@media only screen and (max-width: 768px) {

    /* Táblázat stílusok */
    .table-responsive {
        width: 100%;
        overflow-x: auto;
    }

    .tableColor th {
        font-size: 14px;
    }

    .tableColor td {
        font-size: 12px;
    }

    .tableColor th,
    .tableColor td {
        padding: 8px 4px;
        text-align: left;
    }

    /* Select menü stílusok */
    select {
        width: 100%;
        max-width: 300px;
        margin: 0;
        margin-bottom: 8px;
        padding: 8px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-repeat: no-repeat;
        background-position: right 8px center;
        background-size: 16px;
        background-color: #fff;
    }



    /* Center the checkbox and label */
    .form-check {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    /* Reduce the margin between checkboxes */
    .form-check+.form-check {
        margin-top: 0.5rem;
    }

    /* Style the checkbox */
    .checkbox {
        height: 1rem;
        width: 1rem;
        margin-right: 0.5rem;
    }

    /* Style the label */
    .label {
        font-size: 1rem;
    }

    body {
        font-size: 16px;
        padding: 10px;
    }

    /* center elements */
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* adjust width and margins */
    .card {
        width: 90%;
        margin: 10px 0;
    }

}
</style>