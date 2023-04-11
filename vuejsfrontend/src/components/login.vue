<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="submitForm">
        <label>
          Email:
          <input type="text" v-model="email">
        </label>
        <label>
          Password:
          <input type="password" v-model="password">
        </label>
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
      <p v-else-if="success">Login successful!</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: '',
        success: false
      }
    },
    methods: {
      submitForm() {
        this.$http.post('/api/login', {
          email: this.email,
          password: this.password
        }).then(response => {
          if (response.data.success) {
            this.success = true
          } else {
            this.error = 'Invalid email or password'
          }
        }).catch(error => {
          this.error = 'An error occurred'
        })
      }
    }
  }
  </script>

