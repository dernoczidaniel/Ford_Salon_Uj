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
    <div class="scrollable-container">

        <div class="col-lg-12">
            <div class="row gx-5">
                <link rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <div class="container-fluid bg-dark px-0" id="oldalteto">
                    <div class="row gx-0">
                        <div class="col-lg-3 bg-dark d-none d-lg-block">
                            <a href="/"
                                class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
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



                                        <router-link class="nav-link " to="/">Kezdőlap</router-link>


                                        <div class="nav-item dropdown">
                                            <a href="#" class="nav-link dropdown-toggle"
                                                data-bs-toggle="dropdown">Modellválaszték</a>
                                            <div class="dropdown-menu rounded-0 m-0 align-items-center">

                                                <div v-for="car in models" :value="car">
                                                    <img :src="car.img_url" :alt="car.img_url" width="190" height="120">
                                                    <router-link to="/Cars"><button class="btn  py-1 px-0">{{ car.name
                                                    }}</button> </router-link>
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
                                            <a href="#" class="nav-link dropdown-toggle"
                                                data-bs-toggle="dropdown">Továbbiak</a>
                                            <div class="dropdown-menu rounded-0 m-0">

                                                <router-link class="dropdown-item" to="/History">Története</router-link>
                                                <router-link class="dropdown-item" to="/About">Rólunk</router-link>
                                                <router-link class="dropdown-item" to="/News">Hírek</router-link>
                                                <router-link class="dropdown-item" to="/Boiling">Források</router-link>
                                                <router-link class="dropdown-item" to="/login">Bejelenkezés</router-link>



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
                                            <i class="bi bi-geo-alt text-primary me-2"></i>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-house m-1" viewBox="0 0 16 16">
                                                <path
                                                    d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                                            </svg>
                                            <p class="mb-0">123 Út, Budapest, HUN</p>
                                        </div>
                                        <div class="d-flex mb-1">
                                            <i class="bi bi-envelope-open text-primary me-2"></i>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-envelope m-1" viewBox="0 0 16 16">
                                                <path
                                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                            </svg>
                                            <p class="mb-0">Ford@example.com</p>
                                        </div>
                                        <div class="d-flex mb-1 ">
                                            <i class="bi bi-telephone text-primary me-2"></i>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-telephone m-1" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                            </svg>
                                            <p class="mb-0">+012 345 67890</p>
                                        </div>
                                    </td>





                                    <td>
                                        <a href="https://hu-hu.facebook.com/fordmagyarorszag/"
                                            class=" fa fa-facebook m-1 "></a>
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
    overflow-x: hidden; /* letiltja az oldalra történő görgetést */
    overflow-y: auto; /* engedélyezi a lefelé görgetést */
    height: 100vh; /* beállítja a konténer magasságát az oldal teljes magasságára */
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
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
}
</style>
