<script setup>
import { ref } from 'vue'





</script>








    <!-- Egyéb menü csak akkor jelenjen meg ha kivan választva -->









<template>


    <body class="ServiceWalpapper ">

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
                                    <h3 class="display-6 text-uppercase mb-0 text-light">Szervizelési javaslat</h3>
                                </div>
                                <table class="table text-light">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Ok</th>
                                            <th scope="col">Ajánlott dátum (a szevizbe vitelre)</th>
                                            <th scope="col">körülbelüli ár</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Olaj csere</td>
                                            <td>2023.04.05-án</td>
                                            <td>50 000 - 100 000 Ft</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>


                    <div class="container-fluid p-5 mt-0 center ">
                        <div class="position-relative">
                            <div class="row gx-5 ">
                                <div class="col-lg-12">

                                    <div class="ServiceWalpapperColor">
                                        <div class="m-4 p-4">





                                            <div class="mb-4">
                                                <h3 class="display-6 text-uppercase mb-0 text-light">Időpont kérése</h3>
                                            </div>

                                            <div class="input-group mb-3">
                                                <label class="input-group-text" for="inputGroupSelect01"
                                                    placeholder="Válasszon...">Szervízelés oka</label>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option value="1">olajcsere</option>
                                                    <option value="2">...</option>
                                                    <option value="3">Egyéb</option>
                                                </select>
                                            </div>

                                            <div class="input-group mb-3">
                                                <span class="input-group-text">Egyéb</span>
                                                <textarea class="form-control" aria-label="With textarea"></textarea>
                                            </div>

                                            <div class="input-group mb-3">
                                                <label class="input-group-text" for="inputGroupSelect01"
                                                    placeholder="Válasszon...">Szervíz kiválasztása</label>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option value="1">Győr Ford Szalon</option>
                                                    <option value="2">Budapest Ford Szalon</option>
                                                </select>
                                            </div>

                                            Google maps


                                            <div class="input-group mb-3">
                                                <label class="input-group-text" for="inputGroupFile01">Fénykép
                                                    csatolása:</label>
                                                <input type="file" class="form-control" id="inputGroupFile01">
                                            </div>

                                            <div class="input-group mb-3">
                                                <span class="input-group-text">Megjegyzés</span>
                                                <textarea class="form-control" aria-label="With textarea"></textarea>
                                            </div>



                                            <div class="input-group">
                                                <button class="btn btn-outline-secondary" type="button">Küldés</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        
    </body>
</template>