<template>
  <div>
    <h1>Összegzés</h1>
    <p>Kiválasztott autó: {{ kiválasztottAuto }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kiválasztottAuto: null
    }
  },
  created() {
    const selectedCar = this.$route?.params?.selectedCar
    if (selectedCar) {
      this.kiválasztottAuto = JSON.parse(selectedCar)
    }
  }
}
</script>