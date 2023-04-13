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
import axios from 'axios';


export default {
  data() {
    return {
      email: '',
      password: '',
    
    };
  },
  methods: {
    async login() {
  try {
    await this.$store.dispatch('login', {
      email: this.email,
      password: this.password,
      telefon: this.telefon,
      address: this.address,
      city: this.city,
      id: this.id,
      postalcode:this.postalcode,
      birthdate: this.birthdate,
      name: this.name,
    });
  } catch (error) {
    console.error(error);
  }
},
    async signup() {
      try {
        const response = await axios.post('/signup', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_match: this.password_match,
          citizenship: this.citizenship,
          gender: this.gender,
          birthday: this.birthday
        });
        console.log(response.data);

      } catch (error) {
        console.error(error);
      }
    },

    
  },

  
  mounted() {
    this.citizenship = this.nationality[0];
  }
};
</script>

