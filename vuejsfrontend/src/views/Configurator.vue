<script setup>
import DataService from "../services/dataservice"
import { ref, onMounted } from 'vue'

const model = ref("Mustang");
const colors = ref([]);
const interiorcolors = ref([]);
const extras = ref([]);
const motor = ref("1.9 TDI");
const price = ref("10 000 000");



const color = ref("red");


const interiorcolor = ref("red");

const red = ref("red");
const white = ref("white");
const black = ref("black");

const Mustang = ref("Mustang");

DataService.getDeliveryNames()
    .then((resp) => {
        colors.value = resp;
        console.log(colors.value);
    })
    .catch((err) => {
        console.log(err);
    });

DataService.getInteriorColor()
    .then((resp) => {
        interiorcolors.value = resp;
        console.log(interiorcolors.value);
    })
    .catch((err) => {
        console.log(err);
    });

const szinValasztas = () => {
    color.value = []
    colors.value = colors.value.filter(r => r.color.name === colors.value)
    console.log(colors.value);
};
</script>


<template>
    <div class="container-fluid mt-0 center  ">
        <div class="position-relative">
            <div class="row gx-5">
                <div class="col-lg-6">

                    <div class="m-4 p-4">

                        <div class="mb-4">
                            <h3 class="display-6 text-uppercase mb-2">Konfigurátor</h3>
                            <h5 class="display-6 text-uppercase mb-2">{{ model }}</h5>

                        </div>


                        <div class="mb-3">
                            <table>
                                <!-- Mustang -->
                                <div v-if="model == Mustang">

                                    <td>
                                        <img v-if="color == red" src="../assets/img/Cars/Mustang/GT/Colors/Red/1.png"
                                            alt="car" width="550" height="300">
                                        <img v-if="color == white"
                                            src="../assets/img/Cars/Mustang/GT/Colors/White/1.png" alt="car" width="550"
                                            height="300">
                                        <img v-if="color == black"
                                            src="../assets/img/Cars/Mustang/GT/Colors/Black/1.png" alt="car" width="550"
                                            height="300">
                                    </td>
                                    <td>
                                        <img v-if="interiorcolor == red"
                                            src="../assets/img/Cars/Mustang/GT/Interior/red.png" alt="car" width="550"
                                            height="300">
                                        <img v-if="interiorcolor == white"
                                            src="../assets/img/Cars/Mustang/GT/Interior/white.png" alt="car" width="550"
                                            height="300">
                                        <img v-if="interiorcolor == black"
                                            src="../assets/img/Cars/Mustang/GT/Interior/black.png" alt="car" width="550"
                                            height="300">
                                    </td>
                                </div>
                                <!---->


                                <div v-if="interiorcolors.value == red">
                                    <td>
                                        <img src="../assets/img/Cars/Mustang/GT/Interior/Ceramic.png" alt="" width="550"
                                            height="300">
                                    </td>
                                </div>



                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mb-0 col-lg-12 p-5 ColorMenu">
        <div class="center">


            <table class="table text-light">
                <tr>
                    <th>Színe</th>
                    <th>Kárpit színe</th>
                    <th>Extra</th>
                    <th>motor</th>
                    <th>ár</th>
                </tr>
                <tr>
                    <td>
                        <select>
                            <option v-for="szin in colors">{{ szin.color }}</option>
                        </select>
                    </td>

                    <td>
                        <select>
                            <option v-for="intcolor in interiorcolors">{{ intcolor.interiorcolor }}</option>
                        </select>
                    </td>
                    <td>
                        <select>
                            <option v-for="extra in extras">{{ extra }}</option>
                        </select>
                    </td>
                    <td>

                        <select>
                            <option>{{ motor }}</option>
                        </select>
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

    <div class="container-fluid mt-0 p-5">
        <h2>FŐBB JELLEMZŐK</h2>
        <p>
            Négy króm kipufogóvég (aktív hangerőszabályozással)
            Aktív kipufogó rendszer (hangerőszabályzással)
            Karosszéria színével megegyező színű tükörház fényezés és hátsó spoiler
            Egyedi GT lökhárító
            Fekete hűtőrács króm Pony logoval
            Króm Pony logo a hűtőrácson, GT felirat hátul és 5.0 embléma az első sárvédőkön
            Fekete könnyűfém felni - Elöl: 19"x 9.0" - Hátul 19"x 9.5"
            Elöl: 255/40R19 gumi Hátul: 275/40R19 gumi
            Elektromosan állítható, behajtható (automatikus), fűthető külső visszapillantó tükrök, tükörházba integrált
            kilépővilágítással
            LED fényszórók
            LED hátsó lámpák
            Laminált szélvédő
            Fekete féknyergek
            Gumijavító készlet
            Sebességváltó fülek a kormányon- automata váltó esetén
            Kétzónás automata klímaberendezés
            12"-os digitális kijelző a kormánykerék mögött
            Aluminium pedálok
            Elektromosan, 6-irányban (előre/hátra, fel/le, háttámla előre-hátra) álítható első ülések, statikus (nem
            állítható) deréktámasszal
            Első szőnyegek - fekete, szövet
            Belső hangulatfény
            Bőrborítású kormánykerék
            Bőrborítású kézifékkar
            Megvilágított küszöbborítás
            Elektronikus Line Lock - pályaalkalmazás, az első kerekeket blokkolja, miközben a hátsó kerekek
            kipöröghetnek
            felmelegítve a gumiabroncsokat, elősegítve a legoptimálisabb kigyorsítást
            Rajtautomatika (manuális váltó esetén)
            Hatdugattyús BremboTM első féknyergek
            Fűthető kormánykerék
            Választható vezetési módok
            CD-rádiós audiorendszer
            9 hangszóró
            8"-os színes érintőképernyős kijelző
            SYNC 3 - Bluetooth kihangosító és hangvezérlő rendszer
            Automatikus távolsági fényszóróvezérlés
            Automatikus fényszóróvezérlés (ki- és bekapcsolás)
            Ütközésmegelőző rendszer (kamera és radar alapú)
            Visszagurulásgátló
            Hátsó parkolóradar
            Keréknyomásfigyelő rendszer
            ISOFIX előkészítés - mindkét hátsó ülésen
            Tolatókamera
            Adaptív sebességtartó automatika
            Sávelhagyásra figyelmeztető rendszer
        </p>
    </div>
</template>