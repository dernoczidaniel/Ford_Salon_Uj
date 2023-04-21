<template>
  <div>
    <h2>Summary</h2>
    <p>Selected color: {{ color }}</p>
    <p>Selected model: {{ model }}</p>
    <p>Selected interior color: {{ interiorcolor }}</p>
    <p>Selected extras: {{ extras }}</p>
    <button @click="goToPersonalData">Next</button>
  </div>
</template>

<script>
import dataservice from '../services/dataservice.js'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Configurator from '../components/Configurator.vue';


export default {
  props: {
    kivalasztottszin: Object,
    kivalasztottszinkulso: Object,
  },

  components: {
    Configurator
  },

  data() {
    return {
      model: "mustang",
      color: "",
      interiorcolor: "",
      extras: ["nincs"],
    }
  },

  mounted() {
    if (this.kivalasztottszin) {
      this.color = this.kivalasztottszin.color
    }
    if (this.kivalasztottszinkulso) {
      this.interiorcolor = this.kivalasztottszinkulso.interiorcolor
    }
  },

  methods: {
    goToPersonalData() {
      this.$router.push({ name: 'personalData' });
    },

    async sendData() {
      const data = {
        model: this.model,
        color: this.color,
        interiorcolor: this.interiorcolor,
        extras: this.extras,
      }

      try {
        await dataservice.postData(data) // replace with the function that sends data to your backend
        alert('Order sent successfully!')
      } catch (error) {
        console.log(error)
        alert('Error sending order!')
      }
    }
  }
}
</script>