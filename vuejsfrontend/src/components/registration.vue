<template>
  <div class="container">
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>



      <div class="mb-3">
        <label for="telefon" class="form-label">Telefon</label>
        <input type="text" class="form-control" id="telefon" name="telefon" required>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input type="text" class="form-control" id="address" name="address" required>
      </div>
      <div class="mb-3">
        <label for="postalcode" class="form-label">Postal Code</label>
        <input type="text" class="form-control" id="postalcode" name="postalcode" required>
      </div>
      <div class="mb-3">
        <label for="city" class="form-label">City</label>
        <input type="text" class="form-control" id="city" name="city" required>
      </div>
      <div class="mb-3">
        <label for="birthdate" class="form-label">Birthdate</label>
        <input type="date" class="form-control" id="birthdate" name="birthdate" required>
      </div>






      <!-- To be completed -->
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
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
      birthdate: ''
    }
  },
  methods: {
    async register() {
      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'register/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password,
            telefon: this.telefon,
            address: this.address,
            postalcode: this.postalcode,
            city: this.city,
            birthdate: this.birthdate
          })
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          // Handle successful registration, e.g. redirect to a "success" page
        } else {
          const errorData = await response.json();
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