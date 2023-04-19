

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>





<template>




<div>
    <p>User ID: {{ user.id }}</p>
    <p>User Name: {{ user.name }}</p>
    <p>User Email: {{ user.email }}</p>
  </div>




    <div class="container-fluid p-5 mt-0 center ProfileWalpapper ">
        <div class="position-relative">
            <div class="row gx-5 ">
                <div class="col-lg-12">

                    <div class="ServiceWalpapperColor">
                        <div class="m-4 p-4 text-light">





                            <div class="mb-4">
                                <h3 class="display-6 text-uppercase text-light mb-0">Ford Fiók</h3>
                            </div>
                            <h6 class="display-6 text-uppercase text-light mb-0">Saját autója: "autó neve"</h6>


                            <img src="../assets/img/Cars/Focus/Icon.png" alt="my car">




                            <table class="table text-light">
                                <thead>
                                    <tr>
                                        <th> </th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th scope="col">Model:</th>
                                        <th scope="col">Focus</th>
                                    </tr>
                                </thead>


                                <tbody>
                                    <tr>
                                        <th scope="row">Tulajdonos neve:</th>
                                        <td>Teszt Pista</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Vásárlás Dátuma:</th>
                                        <td>2022.01.01</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Ulosó szerivezlés dátuma:</th>
                                        <td>2022.01.01</td>

                                    </tr>

                                    <tr>
                                        <th scope="row">Forgalmi vizsga lejárata:</th>
                                        <td>2022.01.01</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Autó színe:</th>
                                        <td>Piros</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Motor és lóerő:</th>
                                        <td>1.5 150ló</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Üzem anyag:</th>
                                        <td>Benzin</td>
                                    </tr>

                                </tbody>


                            </table>

                            <p>Adja hozzá a fiókjához az autóját a gyorsabb és áttekinthetőbb szervízelés érdekében!
                            </p>

                            <div class="input-group mb-3">
                                <label class="input-group-text" for="inputGroupSelect01">Autója:</label>
                                <select class="form-select" id="inputGroupSelect01" placeholder="Válasszon...">
                                    <option value="1">Nem rendelkezek Ford autóval</option>
                                    <option value="2">xy Modellal rendelkezek</option>
                                    <option value="3">xy Modellal rendelkezek</option>

                                </select>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Autó vásárlásának a dátuma</span>
                                <input class="form-control" type="date" id="start" name="trip-start" value="2000-01-01"
                                    min="1900-01-01" max="2025-01-01">
                            </div>
                            <div class="input-group mb-3">
                                <button class="btn btn-outline-secondary" type="button">Hozzáadás</button>
                            </div>

                            <a href="/Service">
                                <div class="input-group mb-3">
                                    <button class="btn btn-outline-secondary" type="button">Szervíz</button>
                                </div>
                            </a>
                            <a href="/Cars">
                                <div class="input-group mb-3">
                                    <button class="btn btn-outline-secondary" type="button">Autóvásárlás</button>
                                </div>
                            </a>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>





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