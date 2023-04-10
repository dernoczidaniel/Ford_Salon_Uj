<template>
    <div>
      <h1>Regisztráció</h1>
      <form @submit.prevent="submitForm" ref="formRef">
        <div>
          <label for="name">Név:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div>
          <label for="email">Email cím:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Jelszó:</label>
          <input type="password" id="password" v-model="password" minlength="8" required>
        </div>
        <div v-if="password && !isStrongPassword(password)">
          <p>A jelszónak legalább 8 karakter hosszúnak kell lennie, és tartalmaznia kell legalább egy kisbetűt, egy
            nagybetűt, egy számot és egy speciális karaktert.</p>
        </div>
        <div>
          <label for="city">Település:</label>
          <input type="text" id="city" v-model="city" required>
        </div>
        <div>
          <button type="submit">Regisztráció</button>
        </div>
        <div v-if="error">
          <p>{{ error }}</p>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        city: '',
        error: ''
      }
    },
    methods: {
      submitForm() {
        if (this.$refs.formRef.checkValidity() && this.isStrongPassword(this.password)) {
          axios.post('/register', {
            name: this.name,
            email: this.email,
            password: this.password,
            city: this.city
          })
          .then(response => {
            console.log(response.data);
            // A sikeres regisztráció után a felhasználót átirányítjuk a köszönetoldalra
          })
          .catch(error => {
            console.log(error);
          });
        } else {
          console.log('Hibás adatok');
        }
      },
      isStrongPassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
      }
    }
  }
  </script>