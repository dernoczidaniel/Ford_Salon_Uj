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
