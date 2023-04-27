
<script>
// // import store from '../stores/index';
// const STORAGE_KEY = 'ford_salon_uj'

// export default {
//   computed: {
//     user(){
//         return store.state.user
//     }
//   },
//   watch:{
//     user:{
// 			handler(user){
// 				localStorage.setItem(STORAGE_KEY,JSON.stringify(user))
// 				console.log(user);
// 			},
			
// 		}
// 	},
//     created(){
// 		store.commit('setUser',JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'),)
// 	},

// };

</script>





<template>



<!-- 
<div>
    <h2>{{ user }}</h2>
    <p>Email: {{ user }}</p>
  </div> -->

    <div class="container-fluid p-5 mt-0 center setingsWalpapper">
        <div class="position-relative">
            <div class="row gx-5 ">
                <div class="col-lg-12">

                    <div class="ServiceWalpapperColor">
                        <div class="m-4 p-4">





                            <div class="mb-4 ">
                                <h3 class="display-6 text-uppercase mb-0 text-light"> Beállítások és adatok</h3>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">Család név és Utónév</span>
                                <input type="text" aria-label="Családi név" placeholder="Családi név"
                                    class="form-control">
                                <input type="text" aria-label="Utónév" placeholder="Utónév" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Felhasználónév </span>
                                <input type="text" class="form-control" placeholder="Felhasználónév"
                                    aria-label="Felhasználónév" aria-describedby="basic-addon1">
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Telefonszám</span>
                                <input type="text" class="form-control" placeholder="+36..." aria-label="+36..."
                                    aria-describedby="basic-addon1">
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Születési dátum</span>
                                <input class="form-control" type="date" id="start" name="trip-start" value="2000-01-01"
                                    min="1900-01-01" max="2025-01-01">
                            </div>


                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Irányítószám</span>
                                <input type="text" class="form-control" placeholder="Irányítószám"
                                    aria-label="Irányítószám" aria-describedby="basic-addon1">
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Település</span>
                                <input type="text" class="form-control" placeholder="(Budapest)" aria-label="(Budapest)"
                                    aria-describedby="basic-addon1">
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Utca, házszám</span>
                                <input type="text" class="form-control" placeholder="Utca, házszám"
                                    aria-label="Utca, házszám" aria-describedby="basic-addon1">
                            </div>


                            <div class="input-group mb-3">
                                <button class="btn btn-outline-secondary" type="button">Mentés</button>
                            </div>




                            <hr>
                            <p class="mb-3 text-light">A jelszó megváltoztatásához írja be a régi jelszót!</p>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Régi Jelszó</span>
                                <input type="password" class="form-control" placeholder="" aria-label=""
                                    aria-describedby="basic-addon1">
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Új Jelszó</span>
                                <input type="password" class="form-control" placeholder="" aria-label=""
                                    aria-describedby="basic-addon1">
                            </div>
                            <div class="input-group mb-3">
                                <button class="btn btn-outline-secondary" type="button">Mentés</button>
                            </div>

                            <a href="" class="mb-3">Elfelejtettem a jelszót</a>

                            <hr>
                            <p class="mb-3 text-light">Email cím (nem megváltoztatható): @gmail.com</p>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>