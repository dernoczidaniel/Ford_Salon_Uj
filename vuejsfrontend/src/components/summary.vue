<template>
    <!-- ... -->
    <div>
      Selected car: {{ selectedCar.modelIndex + 1 }}
      <br>
      Color: {{ selectedCar.color }}
      <br>
      Interior color: {{ selectedCar.interiorcolor }}
      <br>
      Extras: {{ selectedCar.extras }}
    </div>
    <!-- ... -->
  </template>
  
  <script>
  export default {
    name: "Summary",
    computed: {
      selectedCar() {
        return JSON.parse(this.$route.params.selectedCar);
      }
    }
  };
  </script>