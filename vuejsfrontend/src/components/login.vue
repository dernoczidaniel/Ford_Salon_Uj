<template>
  <div class="container">
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>

import router from '../router'

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
          router.push('/summary'); // navigálás a /dashboard oldalra

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
    }
  }
}

</script>
