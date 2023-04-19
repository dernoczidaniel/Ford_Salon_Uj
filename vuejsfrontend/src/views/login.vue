<template>
  <body class="LoginRegistrationbackground BodySize ">
    <div class="center">
      <div class="container-fluid p-0 mt-0 center ">
        <div class="position-relative ">
          <div class="row gx-5 mb-5">
            <div class="col-lg-12 mb-3 ">

              <div class="LoginRegistrationbackgroundMenu ">
                <div class="m-4 p-4 ">

                  <div class="mb-4 ">
                    <h3 class="display-6 text-uppercase mb-0 text-light">Bejelenkezés</h3>
                  </div>

                  <form @submit.prevent="login">

                    <div class="input-group mb-3">
                      <span class="input-group-text">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-envelope" viewBox="0 0 16 16">
                          <path
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>


                      </span>

                      <input type="email" class="form-control inputTransparent text-light" id="email"
                        placeholder="E-mail cím" v-model="email" required>

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
                      <input type="password" class="form-control inputTransparent text-light" id="password"
                        placeholder="Jelszó" v-model="password" required>
                    </div>

                    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

                    <button type="submit" class="btn btn-outline-secondary">Login</button>
                  </form>


                  <hr>

                  <div class="mb-3 m-5">
                    <router-link to="registration">
                      <button class="btn btn-outline-secondary">Még nem
                        regisztráltam.</button>
                    </router-link>
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

<script>

import router from '../router'
import jwt_decode from 'jwt-decode';



export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);

          const token = data.token;
          localStorage.setItem('token', token);
          const decoded = jwt_decode(token);
          console.log(decoded);

          router.push('/'); // navigálás a /dashboard oldalra

          // Handle successful login, e.g. redirect to the user dashboard
        } else if (response.status === 401) {
          const errorData = await response.json();
          this.errorMessage = errorData.message;
          console.log(errorData);
          // Handle login error, e.g. display error message to user
        }
      } catch (error) {
        console.error(error);
        // Handle unexpected errors, e.g. display
      }
    },
    logout() {
      localStorage.removeItem('token');
      router.push('/');
    }
  },
  created() {
    const userToken = localStorage.getItem('token');
    if (userToken) {
      try {
        const decoded = jwt_decode(userToken);
        console.log(decoded);
        // TODO: validate user token on server
        router.push('/summary');
      } catch (error) {
        console.error(error);
      }
    }
  }

}

</script>
