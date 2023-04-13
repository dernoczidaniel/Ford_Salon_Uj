
<template>
  <div>
    <h1>Összegzés</h1>
    <p>Kiválasztott autó: {{ kivalasztottAuto }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      kiválasztottAuto: null
    }
  },
  created() {
    const selectedCar = this.$route?.query?.selectedCar
    console.log("adatok:")
    console.log(selectedCar)

    if (selectedCar) {
      this.kiválasztottAuto = JSON.parse(selectedCar)
      this.sendData(this.kiválasztottAuto)
    }
  },
  methods: {
    sendData(data) {
      axios.post('/api/selected-car', data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>