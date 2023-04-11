<script setup>
import DataService from "../services/dataservice"
import { ref, onMounted } from 'vue'

const model = ref("Mustang");
const color = ref("Red");
const interiorcolor = ref("Red");
const extra = ref("Nincs");
const motor = ref("1.9 TDI");
const price = ref("10 000 000");

</script>


<template>

<body class="BodySize">
    

    <div class="container-fluid p-5 mt-2 mb-5 center ">
        <div class="position-relative">
            <div class="row gx-5 ">
                <div class="col-lg-12">

                    <table class="table">
                        <tr >
                            <td>




                            <div class="">
                                <div class="m-4 p-4">

                                    <div class="mb-4">
                                        <h3 class="display-6 text-uppercase mb-0">Összegzés</h3>
                                    </div>
                                    <table class="table " >
                                        <thead>
                                            <tr>
                                                <th scope="col">Model</th>
                                                <td>{{ model }}</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="col">Szín</th>
                                                <td>{{ color }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">kárpit szín</th>
                                                <td>{{ interiorcolor }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">Extra</th>
                                                <td>{{ extra }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">Motor</th>
                                                <td>{{ motor }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">Ár</th>
                                                <td>{{ price }} Ft</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </td>



                        <td >
                            <div class="mb-4">
                                <h3 class="display-6 text-uppercase mb-0 ">Rendelés</h3>
                            </div>

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto sapiente quis mollitia minima libero ratione ea dolor. Voluptate accusamus, suscipit numquam cupiditate enim maxime praesentium voluptatem eaque consectetur accusantium?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto sapiente quis mollitia minima libero ratione ea dolor. Voluptate accusamus, suscipit numquam cupiditate enim maxime praesentium voluptatem eaque consectetur accusantium?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto sapiente quis mollitia minima libero ratione ea dolor. Voluptate accusamus, suscipit numquam cupiditate enim maxime praesentium voluptatem eaque consectetur accusantium?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto sapiente quis mollitia minima libero ratione ea dolor. Voluptate accusamus, suscipit numquam cupiditate enim maxime praesentium voluptatem eaque consectetur accusantium?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto sapiente quis mollitia minima libero ratione ea dolor. Voluptate accusamus, suscipit numquam cupiditate enim maxime praesentium voluptatem eaque consectetur accusantium?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto sapiente quis mollitia minima libero ratione ea dolor. Voluptate accusamus, suscipit numquam cupiditate enim maxime praesentium voluptatem eaque consectetur accusantium?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto sapiente quis mollitia minima libero ratione ea dolor. Voluptate accusamus, suscipit numquam cupiditate enim maxime praesentium voluptatem eaque consectetur accusantium?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto sapiente quis mollitia minima libero ratione ea dolor. Voluptate accusamus, suscipit numquam cupiditate enim maxime praesentium voluptatem eaque consectetur accusantium?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto sapiente quis mollitia minima libero ratione ea dolor. Voluptate accusamus, suscipit numquam cupiditate enim maxime praesentium voluptatem eaque consectetur accusantium?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto sapiente quis mollitia minima libero ratione ea dolor. Voluptate accusamus, suscipit numquam cupiditate enim maxime praesentium voluptatem eaque consectetur accusantium?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto sapiente quis mollitia minima libero ratione ea dolor. Voluptate accusamus, suscipit numquam cupiditate enim maxime praesentium voluptatem eaque consectetur accusantium?

                        </td>
                        </tr>









                    </table>
                </div>
            </div>
        </div>
    </div>


    <div class="mb-0 col-lg-12 p-5 ColorMenu">

        <div class="input-group mb-3 right">
            <div class="input-group mb-3 right">

                <a href="/Cars">
                    <button class="btn btn-outline-secondary m-1" type="button">Mégse</button>
                </a>
                
                <a href="/SummaryPage">
                    <button class="btn btn-outline-secondary m-1" type="button">Mentés</button>
                </a>
               
                <a href="/SummaryPage">
                    <button class="btn btn-outline-secondary  m-1" type="button">Rendelés</button>
                </a>
                
            </div>
        </div>
    </div>


</body>
</template>