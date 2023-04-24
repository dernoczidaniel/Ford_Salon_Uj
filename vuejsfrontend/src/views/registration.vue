<template>
  <body class="LoginRegistrationbackground BodySize ">
      <div class="container-fluid p-0 ">
        <div class="row justify-content-center ">
          <div class="col-lg-6 col-md-8 col-sm-10 ">
            <div class="card LoginRegistrationbackgroundMenu my-5 text-light">
              <div class="card-body ">
                <h3 class="card-title text-center mb-4">Regisztráció</h3>
                <form @submit.prevent="register">
                  <div class="form-group">
                    <label for="name">Név</label>
                    <input type="text" class="form-control" id="name" v-model="name" required>
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" v-model="email" required>
                  </div>
                  <div class="form-group">
                    <label for="password">Jelszó</label>
                    <input type="password" class="form-control" id="password" v-model="password" required>
                  </div>
                  <div class="form-group">
                    <label for="telefon">Telefon</label>
                    <input type="text" class="form-control" id="telefon" name="telefon" v-model="telefon" required>
                  </div>
                  <div class="form-group">
                    <label for="address">Lakcím</label>
                    <input type="text" class="form-control" id="address" name="address" v-model="address" required>
                  </div>
                  <div class="row">
                    <div class="col-md-4 form-group">
                      <label for="postalcode">Irányító szám</label>
                      <input type="text" class="form-control" id="postalcode" name="postalcode" v-model="postalcode"
                        required>
                    </div>
                    <div class="col-md-8 form-group">
                      <label for="city">Település</label>
                      <input type="text" class="form-control" id="city" name="city" v-model="city" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="birthdate">Születésnap</label>
                    <input type="date" class="form-control" id="birthdate" name="birthdate" v-model="birthdate" required>
                  </div>
                  <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
                  <button type="submit" class="btn btn-primary btn-block mt-4">Regisztráció</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  </body>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      telefon: '',
      address: '',
      postalcode: '',
      city: '',
      birthdate: '',
      errorMessage: ''
    }
  },
  methods: {
    async register() {
      try {
        const response = await fetch('https://weary-tick-miniskirt.cyclic.app/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password,
            telefon: this.telefon,
            address: this.address,
            postalcode: this.postalcode,
            city: this.city,
            birthdate: this.birthdate,


          })
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          // Handle successful registration, e.g. redirect to a "success" page
        } else if (response.status === 409) {
          const errorData = await response.json();
          this.errorMessage = errorData.message;
          console.log(errorData);
          // Handle registration error, e.g. display error message to user
        }
      } catch (error) {
        console.error(error);
        // Handle unexpected errors, e.g. display
      }
    }

  }
}

</script>