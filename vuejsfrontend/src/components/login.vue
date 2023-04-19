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
import store from '../stores/index';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user'])
  },
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
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

          const user = {
            id: decoded.id,
            name: decoded.name,
            email: decoded.email
          };
          localStorage.setItem('user', JSON.stringify(user));

          // Set user object in store
          this.$store.dispatch('setUser', user);

          router.push('/');
        } else if (response.status === 401) {
          const errorData = await response.json();
          this.errorMessage = errorData.message;
          console.log(errorData);
        }
      } catch (error) {
        console.error(error);
      }
    },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$store.dispatch('setUser', {});
      router.push('/');
    }
  },
  created() {
    const userToken = localStorage.getItem('token');
    if (userToken) {
      try {
        const decoded = jwt_decode(userToken);
        console.log(decoded);

        const user = JSON.parse(localStorage.getItem('user'));
        this.$store.dispatch('setUser', user);

        router.push('/summary');
      } catch (error) {
        console.error(error);
      }
    }
  }
}


</script>
