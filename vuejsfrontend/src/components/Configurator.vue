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
            selectedSalon: null,
            salons: [
                {
                    name: "Budapest Ford Szalon",
                    address: "Budapest, Károly körút 1.",
                    city: "Budapest",
                    postalCode: "1052",
                    phone: "+36 1 555 5555"
                },
                {
                    name: "Debrecen Ford Szalon",
                    address: "Debrecen, Piac utca 23.",
                    city: "Debrecen",
                    postalCode: "4025",
                    phone: "+36 52 555 555"
                },
                {
                    name: "Szeged Ford Szalon",
                    address: "Szeged, Kossuth Lajos sugárút 9.",
                    city: "Szeged",
                    postalCode: "6720",
                    phone: "+36 62 555 555"
                }
            ],
        };

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
            const tableColumns = ["Model", "Szín", "Belsöszin", "Extrák", "Motor", "Üzemanyag", "Tag", "Ár (Az ár csak az autó árára vonatkozik)", "Rendelés azonosító"];
            const data = [[this.selectedCars.name, this.selectedCars.color, this.selectedCars.interiorcolor, this.selectedCars.extras, this.selectedCars.motor, this.selectedCars.fuel, this.selectedCars.species, this.selectedCars.price + " Ft", this.orderID]];
            const imgData = '../src/assets/img/logo/Ford_Motor_Company_Logo.svg.png';
            const pdfWidth = doc.internal.pageSize.getWidth();
            const imgWidth = 40;
            const imgHeight = 20;
            const imgX = (pdfWidth - imgWidth) / 2;
            const imgY = 70;


            doc.autoTable({
                head: [tableColumns],
                body: data,
            });




            doc.addImage(imgData, 'JPEG', imgX, imgY, imgWidth, imgHeight);



            // Betűméret beállítása
            doc.setFontSize(14);

            doc.text("Ford Szalon", doc.internal.pageSize.width / 2, 100, { align: "center" });


            doc.setFont("Helvetica", "normal");
            doc.text("Név:    ____________________", 20, 130);
            doc.text("Email cím:    ____________________", 20, 140);
            doc.text("Ezzel szeretném jelezni, hogy az autó vásárlását elfogadom.", 20, 150);
            doc.text("A fent említett összeg már rendezésre került, és az árut átvehetem.", 20, 160);
            doc.text("A vásárlás után a temékre 3 év jótállás vonatkozik.", 20, 180);
            doc.text("Tudomásul veszem, és elfogadom a feltételeket.", 20, 170);
            doc.text("Jogszabály: https://hu.wikipedia.org/wiki/Ad%C3%A1sv%C3%A9tel", 20, 190);




            doc.setFont("Helvetica", "bold");
            doc.text(`Vásárlás dátuma: ${new Date().toLocaleDateString()}`, 20, doc.internal.pageSize.height - 20, { align: "left" });

            doc.text("Eladó aláírás:", doc.internal.pageSize.width - 70, doc.internal.pageSize.height - 40, { align: "right" });
            doc.setLineWidth(0.5);
            doc.line(doc.internal.pageSize.width - 60, doc.internal.pageSize.height - 37, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 37);

            doc.text("Vásárló aláírás:", doc.internal.pageSize.width - 70, doc.internal.pageSize.height - 50, { align: "right" });
            doc.line(doc.internal.pageSize.width - 60, doc.internal.pageSize.height - 47, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 47);

            doc.save("Számla.pdf");
        },

        // Rendelés
        async order() {
            this.LetoltesEllenorzes = true;
            try {
                const response = await fetch('https://weary-tick-miniskirt.cyclic.app/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: this.selectedCars.name,
                        color: this.selectedCars.color,
                        interiorcolor: this.selectedCars.interiorcolor,
                        extra: this.selectedCars.extras,
                        price: this.selectedCars.price,
                        id: this.orderID,
                    })
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                } else if (response.status === 409) {
                    const errorData = await response.json();
                    this.errorMessage = errorData.message;
                    console.log(errorData);
                }
            } catch (error) {
                console.error(error);
            }
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
        DataService.getSalons()
            .then((resp) => {
                models.value = resp;
            })
            .catch((err) => {
                console.log(err);
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
                                        <th>Szín</th>
                                        <th>Kárpit szín</th>
                                        <th>Motor</th>
                                        <th>Üzemanyag</th>
                                        <th>Tag</th>
                                        <th>Ár </th>
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
                            <div class="m-2 form-check d-flex flex-wrap form-switch"
                                v-for="(extra, index) in                              extras                             "
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
                                <th>Ár (Az ár csak az autó árára vonatkozik)</th>
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

            <div class="mt-5 center">
                <h4 class="m-1">Válaszon szalont, ahová rendelt járműve:</h4>
                <select v-model=" selectedSalon ">
                    <option v-for="(    salon, index    ) in     salons    " :key=" index " :value=" salon ">{{ salon.name }}
                    </option>
                </select>

            </div>
            <div v-if=" selectedSalon " class="mt-5 text-center">
                <h2 class="m-2">{{ selectedSalon.name }}</h2>
                <p class="m-2">{{ selectedSalon.address }}</p>
                <p class="m-2">{{ selectedSalon.city }}, {{ selectedSalon.postalCode }}</p>
                <p class="m-2">{{ selectedSalon.phone }}</p>
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
}

select {
    padding: 10px;
    font-size: 16px;
    line-height: 1.3;
    border-radius: 5px;
    border: none;
    background-color: #333;
    color: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
}

select:hover {
    background-color: #555;
}

select:focus {
    outline: none;
    box-shadow: 0 0 2px 1px #666;

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