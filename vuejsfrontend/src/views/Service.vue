<script setup>
import { ref } from 'vue'





</script>








    <!-- Egyéb menü csak akkor jelenjen meg ha kivan választva -->








<template>
    <body class="ServiceWalpapper BodySize">
        <div class="my-element animate__animated animate__fadeIn" :style="{ 'animation-delay': '0.5s' }">

        <div>
            <div class="ServiceWalpapperColor container-fluid p-5 mt-0 center">
                <img src="../assets/img/Service/ford_service_Logo.png" alt="">
            </div>
        </div>

        <div class="container-fluid p-5 mt-0 center ">
            <div class="position-relative">
                <div class="row gx-5 ">
                    <div class="col-lg-12">
                        <div class="ServiceWalpapperColor">
                            <div class="m-4 p-4">
                                <div class="mb-4">
                                    <h3 class="display-6 text-uppercase mb-0 text-light">Magyar Ford szervizek:</h3>
                                </div>

                                <input v-model="searchQuery" class="form-control mb-4" type="text" placeholder="Keresés...">

                                <ul class="text-light">
                                    <li v-for="service in filteredServices" :key="service.id">
                                        <h3>{{ service.name }}</h3>
                                        <p>{{ service.address }}</p>
                                        <p>{{ service.phone }}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        </div>

    </body>
</template>

<script>
import { ref } from 'vue';

export default {
    data() {
        return {
            services: [
                {
                    id: 1,
                    name: 'Ford Szerviz Budapest',
                    address: '1139 Budapest, Teve utca 13.',
                    phone: '+36 1 270 2555',
                },
                {
                    id: 2,
                    name: 'Ford Autóház Debrecen',
                    address: '4030 Debrecen, Galamb utca 1.',
                    phone: '+36 52 520 520',
                },
                {
                    id: 3,
                    name: 'Ford-Székelyhíd Kft. - Ford Miskolc',
                    address: '3526 Miskolc, Bajcsy-Zsilinszky utca 2.',
                    phone: '+36 46 509 950',
                },
                {
                    id: 4,
                    name: 'Ford-Suba Kft. - Ford Győr',
                    address: '9027 Győr, Kunszt tér 2.',
                    phone: '+36 96 518 810',
                },
                {
                    id: 5,
                    name: 'Ford Lázár Kft. - Ford Kaposvár',
                    address: '7400 Kaposvár, Csiky Gergely utca 52-54.',
                    phone: '+36 82 522 200',
                },
                {
                    id: 6,
                    name: 'Ford Mészáros Kft. - Ford Szombathely',
                    address: '9700 Szombathely, Hunyadi János utca 57.',
                    phone: '+36 94 500 501',
                },
                {
                    id: 7,
                    name: 'Ford Csillagautó Kft. - Ford Pécs',
                    address: '7630 Pécs, Bajcsy-Zsilinszky út 66.',
                    phone: '+36 72 501 800',
                },
                {
                    id: 8,
                    name: 'Ford Partner 84 Kft. - Ford Székesfehérvár',
                    address: '8000 Székesfehérvár, Budai út 4.',
                    phone: '+36 22 316 530',
                },
                {
                    id: 9,
                    name: 'Ford-Szabó Kft. - Ford Kecskemét',
                    address: '6000 Kecskemét, Dunaföldvári út 40.',
                    phone: '+36 76 501 900',
                },
                {
                    id: 10,
                    name: 'Ford Rudolph Autóház Kft. - Ford Eger',
                    address: '3300 Eger, Széchenyi utca 15.',
                    phone: '+36 36 511 360',
                },
                {
                    id: 11,
                    name: 'Ford Pappas Auto Hungary Kft. - Ford Nyíregyháza',
                    address: '4400 Nyíregyháza, Kölcsey u. 50.',
                    phone: '+36 42 501 700',
                },

            ],
            searchQuery: '',
        };
    },
    computed: {
        filteredServices() {
            if (this.searchQuery === '') {
                return this.services;
            } else {
                return this.services.filter((service) => {
                    const nameMatch = service.name.toLowerCase().includes(this.searchQuery.toLowerCase());
                    const addressMatch = service.address.toLowerCase().includes(
                        this.searchQuery.toLowerCase()
                    );
                    const phoneMatch = service.phone.toLowerCase().includes(
                        this.searchQuery.toLowerCase()
                    );
                    return nameMatch || addressMatch || phoneMatch;
                });
            }
        },
    },
};
</script>