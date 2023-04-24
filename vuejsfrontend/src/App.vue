<script>
import { RouterView } from 'vue-router';
import carsComponent from './components/carsList.vue';
import DataService from "./services/dataservice";
import { ref, computed } from "vue";






export default {
    name: 'cars',
    components: {
        carsId: carsComponent
    },
    selectedCars() {
        return this.$store.state.selectedCars;
    },

    setup() {
        const models = ref([]);
        const isLoggedIn = ref(false);

        DataService.getModels()
            .then((resp) => {
                models.value = resp;
                console.log(models.value);
            })
            .catch((err) => {
                console.log(err);
            });

        const checkLogin = () => {
            const userToken = localStorage.getItem('token');
            if (userToken) {
                // TODO: validate user token on server
                isLoggedIn.value = true;
            }
        };
        checkLogin();

        const logout = () => {
            localStorage.removeItem('token');
            isLoggedIn.value = false;
            router.push('/');
        };

        return { models, isLoggedIn, logout };
    },


};


</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

    <div class="scrollable-container">

        <div class="container-fluid bg-dark px-0" id="oldalteto">
            <div class="row gx-0">
                <div class="col-lg-3 bg-dark d-none d-lg-block">
                    <a href="/" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <img src="../src/assets/img/Logo/Ford_Motor_Company_Logo.svg.png" alt="Logo" width="120"
                            height="60">
                    </a>
                </div>
                <div class="col-lg-9">
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
                        <a href="/" class="navbar-brand d-block d-lg-none">
                            <h1 class="m-0 display-4 text-primary text-uppercase">Ford</h1>
                        </a>

                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto py-0">
                                <router-link class="nav-link" to="/">Kezdőlap</router-link>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown">Modellválaszték</a>
                                    <div class="dropdown-menu rounded-0 m-0 align-items-center">
                                        <div v-for="car in models" :value="car">
                                            <img :src="car.img_url" :alt="car.img_url" width="190" height="120">
                                            <router-link to="/Cars"><button class="btn  py-1 px-0">{{ car.name
                                            }}</button></router-link>
                                        </div>
                                        <div style="background-color: #1351d8;">
                                            <router-link class="nav-link" to="/Cars">Minden modell</router-link>
                                        </div>
                                    </div>
                                </div>
                                <router-link class="nav-link" to="/Profile">Ford fiók</router-link>
                                <router-link class="nav-link" to="/Service">Szervíz</router-link>
                                <a href="#kapcsolat" class="nav-link">Kapcsolat</a>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Továbbiak</a>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <router-link class="dropdown-item" to="/History">Története</router-link>
                                        <router-link class="dropdown-item" to="/About">Rólunk</router-link>
                                        <router-link class="dropdown-item" to="/News">Hírek</router-link>
                                        <router-link class="dropdown-item" to="/Boiling">Források</router-link>
                                        <router-link class="dropdown-item" to="/login">bejelentkezés</router-link>
                                    </div>
                                </div>
                            </div>
                            <router-link to="/login" class="btn btn-primary py-md-3 px-md-5 d-none d-lg-block"
                                v-if="isLoggedIn == false">Bejelenkezés</router-link>


                            <button class="btn btn-danger py-md-3 px-md-5 d-none d-lg-block" @click="logout"
                                v-if="isLoggedIn">Logout</button>

                        </div>
                    </nav>
                </div>
            </div>
        </div>

        <div class="col-lg-12">
            <div class="row gx-5">
                <router-view />
            </div>
        </div>








        <!-- Elérhetőség stb... -->
        <div class="container-fluid bg-dark text-secondary px-5 mt-0 ">
            <div class="row gx-5">
                <div class="col-lg-12 col-md-0">
                    <div class="row gx-12">
                        <div class="col-lg-12 col-md-12 pt-3 mb-0">
                            <table class="">
                                <tr>
                                    <th>
                                        <h4 class="text-uppercase text-light m-0 " id="kapcsolat">Kapcsolat és elérhetőség
                                        </h4>
                                    </th>
                                    <th>
                                        <h4 class="text-uppercase text-light m-0  " id="kapcsolat">Közösségi média
                                        </h4>
                                    </th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex mb-1 ">
                                            <!--cím-->
                                            <div class="icon-container">
                                                <i class="fa fa-home"></i>
                                            </div>
                                            <p class="mb-0">123 Út, Budapest, HUN</p>
                                        </div>
                                        <div class="d-flex mb-1">
                                            <div class="icon-container">
                                                <!--email-->
                                                <i class="far fa-envelope"></i>
                                            </div>
                                            <p class="mb-0">Ford@example.com</p>
                                        </div>
                                        <div class="d-flex mb-1 ">
                                            <div class="icon-container">
                                                <i class="fas fa-phone"></i>
                                            </div>
                                            <!--telefon-->
                                            <p class="mb-0">+012 345 67890</p>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="https://hu-hu.facebook.com/fordmagyarorszag/"
                                            class="fa fa-facebook m-1 "></a>

                                        <a href="https://www.youtube.com/channel/UCKA96UxTdgFBwGZMGZ-135w"
                                            class="fa fa-youtube m-1"></a>
                                        <a href="https://www.instagram.com/ford/" class="fa fa-instagram m-1"></a>
                                        <a href="https://twitter.com/Ford" class="fa fa-twitter m-1"></a>
                                    </td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid py-1 py-lg-0 px-5" style="background: #111111;">
            <div class="row gx-5">
                <div class="col-lg-6">
                    <div class="py-lg-2 ">
                        <p class="text-secondary mb-0">&copy; <a class="text-light fw-bold" href="">Ford Motor Company</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Elérhetőség vége -->


    </div>
</template>

<style scoped>
.fa-home {
    font-size: 24px;
}

.icon-container i {
    font-size: 16px;
    /* vagy más méret, amely megfelelő a designodhoz */
}

th,
td {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 0px;
    padding-right: 250px;
}


/* kisebb képernyők esetén */
@media (max-width: 767px) {
    .navbar-brand img {
        width: 100px;
        height: auto;
    }
}

/* közepes és nagyobb képernyők esetén */
@media (min-width: 768px) {
    .navbar-brand img {
        width: 120px;
        height: 60px;
    }
}

.scrollable-container {
    overflow-x: hidden;
    /* letiltja az oldalra történő görgetést */
    overflow-y: auto;
    /* engedélyezi a lefelé görgetést */
    height: 100vh;
    /* beállítja a konténer magasságát az oldal teljes magasságára */
}


body {
    touch-action: pan-x pan-y;
    user-select: none;
    zoom: reset;
    zoom: 1.0;
    -moz-user-select: none;
    -ms-content-zooming: none;
    -ms-touch-action: pan-x pan-y;
    -ms-user-select: none;
    -ms-touch-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
}
</style>
