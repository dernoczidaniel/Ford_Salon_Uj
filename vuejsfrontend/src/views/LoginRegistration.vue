


<script setup >
import { ref } from 'vue'
const alert = ref();


//Bejelenkezés

const Username = ref([""]);
const password = ref([""]);
const Email = ref([""]);
const BelepesJo = false;


const belepes = () => {
  alert.value = "";
  if (Username.value && Email.value && password.value == "" || password.value.length <= 8) {
    alert.value = "Rosszul adta meg az adatokat!";
  }

}


//Regisztáció


const registrationClickEll = ref(false);
const vizsgal = ref(false);





const Rjo = ref();
const Ralert = ref();
const RFirstName = ref([""]);
const RLastName = ref([""]);
const RUsername = ref([""]);
const REmail = ref([""]);
const RTelefon = ref([""]);
//const RDate = ref([""]);
const RZipCode = ref([""]);
const RCity = ref([""]);
const RAdres = ref([""]);
const Rpassword = ref([""]);


const registration = () => {
  Ralert.value = "";
  Rjo.value = "";
  vizsgal.value = false; // false al jó a regisztráció
  // Email vizsgálat
  for (let index = 0; index < REmail.value.length; index++) {
    if (REmail.value[index] == "@") {
      vizsgal.value = false;
      break
    }
    else {
      Ralert.value = "Az Email cím nem megfelelő formátumú!";
      vizsgal.value = true;
    }
  }
  for (let index = 0; index < REmail.value.length; index++) {
    if (REmail.value[index] == ".") {
      vizsgal.value = false;
      break
    }
    else {
      Ralert.value = "Az Email cím nem megfelelő formátumú!";
      vizsgal.value = true;
    }
  }
  // ---------------------
  // Jelszó vizsgálat
  if (Rpassword.value.length <= 8) {
    Ralert.value = "A jelszó nem megfelelő! Legalább 8 karaktert kell tartalmaznia!";
    vizsgal.value = true;
  }

  for (let index = 0; index < Rpassword.length; index++) {
    if (Rpassword[index] != index) {
      Ralert.value = "A jelszó nem megfelelő! Legalább egy számot kell tartalmaznia!";
      vizsgal.value = true;
    }
  }
  // ---------------------
  // telefon szám vizsgálat
  if (RTelefon.value.length != 8) {
    Ralert.value = "A telefon számot nem jól adta meg!";
    vizsgal.value = true;
  }
  // ---------------------
  // Üres mező vizsgálat
  if (RFirstName.value && RLastName.value && RUsername.value && REmail.value && RTelefon.value && RZipCode.value && RCity.value && RAdres.value && Rpassword.value == "") {
    Ralert.value = "Egyik mező sem lehet üres!";
    vizsgal.value = true;
  }
  // ---------------------
  //Sikeres az ellenörzés
  //további ellenörzés a backend-ben!!
  if (vizsgal.value == false) {
    Rjo.value = "Sikeres regisztráció!";
    registrationClickEll.value = false;
  }

}



const registrationClick = () => {
  registrationClickEll.value = true;
  vizsgal.value = false
}

const Close = () => {
  Rjo.value = vizsgal.value == true;
}









</script>
<template>




  <body class="LoginRegistrationbackground BodySize">
    <div class="">



      <div class="container-fluid p-0 mt-0 center ">
        <div class="position-relative">
          <div class="row gx-5 mb-5">
            <div class="col-lg-12 mb-3">

              <div class="LoginRegistrationbackgroundMenu">
                <div class="m-4 p-4">

                  <div class="mb-4 ">
                    <h3 class="display-6 text-uppercase mb-0 text-light">Bejelenkezés</h3>
                  </div>

                  <div id="app mb-4 center ">
                    <div id="alert" class="text-danger center" v-if="alert">{{ alert }}</div>
                  </div>

                  <div class="input-group mb-3 ">
                    <span class="input-group-text " id="basic-addon1">

                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                      </svg>

                    </span><input type="text" class="form-control inputTransparent" placeholder="Felhasználónév"
                      v-model="Username" aria-label="Felhasználónév" aria-describedby="basic-addon1">
                  </div>












                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">

                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-envelope" viewBox="0 0 16 16">
                        <path
                          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>


                    </span>
                    <input v-model="Email" type="text" class="form-control inputTransparent" placeholder="E-mail cím"
                      aria-label="Email" aria-describedby="basic-addon1">
                  </div>












                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">


                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-key" viewBox="0 0 16 16">
                        <path
                          d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>


                    </span>
                    <input v-model="password" type="password" class="form-control inputTransparent" placeholder="Jelszó"
                      aria-label="" aria-describedby="basic-addon1">
                  </div>


                  <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary" type="submit" @click="belepes">Bejelenkezés</button>
                  </div>
                  <div class="mb-3">
                    <a href="#registracio">
                      <button class="btn btn-outline-secondary" @click="registrationClick">Még nem
                        regisztráltam.</button>
                    </a>
                  </div>





                  <div class="mb-3">
                    <a href="">Elfelejtettem a jelszót.</a>
                  </div>

                  <div id="alert" class="text-success " v-if="Rjo">{{ Rjo }} <button @click="Close"
                      class="btn btn-link">✕</button></div>

                </div>
              </div>






              <div id="registrationClick" v-if="registrationClickEll == true">

                <hr>




                <div class="LoginRegistrationbackgroundMenu">
                  <div class="m-4 p-4">


                    <div class="mb-4">
                      <h3 class="display-6 text-uppercase mb-0 text-light" id="registracio">Regisztráció </h3>
                    </div>

                    <div id="app mb-4 center ">
                      <div id="alert" class="text-danger center" v-if="Ralert">{{ Ralert }}</div>
                    </div>


                    <div class="input-group mb-3">
                      <span class="input-group-text">Család név és Utónév</span>
                      <input v-model="RFirstName" type="text" aria-label="Családi név" placeholder="Családi név"
                        class="form-control inputTransparent">
                      <input v-model="RLastName" type="text" aria-label="Utónév" placeholder="Utónév"
                        class="form-control inputTransparent">
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">Felhasználónév </span>
                      <input v-model="RUsername" type="text" class="form-control inputTransparent"
                        placeholder="Kis Pista" aria-label="Felhasználónév" aria-describedby="basic-addon1">
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">E-mail cím </span>
                      <input v-model="REmail" type="text" class="form-control inputTransparent"
                        placeholder="példa@gmail.com " aria-label="...@gmail.com" aria-describedby="basic-addon1">
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">Telefonszám</span>
                      <input v-model="RTelefon" type="text" class="form-control inputTransparent"
                        placeholder="06 30 000 0000" aria-label="+36..." aria-describedby="basic-addon1">
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">Születési dátum</span>
                      <input class="form-control inputTransparent" type="date" id="start" name="trip-start"
                        value="2000-01-01" min="1900-01-01" max="2025-01-01">
                    </div>




                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">Irányítószám</span>
                      <input v-model="RZipCode" type="number" class="form-control inputTransparent" placeholder="1000"
                        aria-label="Irányítószám" min="1000" max="9999" aria-describedby="basic-addon1">
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">Település</span>
                      <input v-model="RCity" type="text" class="form-control inputTransparent" placeholder="(Budapest)"
                        aria-label="(Budapest)" aria-describedby="basic-addon1">
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">Utca, házszám</span>
                      <input v-model="RAdres" type="text" class="form-control inputTransparent"
                        placeholder="deák ferenc utca 1" aria-label="Utca, házszám" aria-describedby="basic-addon1">
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">Jelszó</span>
                      <input v-model="Rpassword" type="password" class="form-control inputTransparent"
                        placeholder="*****" aria-label="" aria-describedby="basic-addon1">
                    </div>
                    <p>A jelszónak legalább 8 karaktert, kis és nagy betűt kell tartalmaznia!</p>


                    <div class="input-group mb-3">
                      <label class="input-group-text" for="inputGroupSelect01">Rendelkezik már Ford Autóval?</label>
                      <select class="form-select inputTransparent" id="inputGroupSelect01" placeholder="Válasszon...">
                        <option value="1">Nem rendelkezek Ford autóval</option>
                        <option value="2">xy Modellal rendelkezek</option>
                        <option value="3">xy Modellal rendelkezek</option>

                      </select>
                    </div>
                    <p>Válaszon hogy, szervizelését nyomon követhesse!</p>

                    <div class="input-group">
                      <button class="btn btn-outline-secondary mb-3" type="button"
                        @click="registration">Regisztráció</button>
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


