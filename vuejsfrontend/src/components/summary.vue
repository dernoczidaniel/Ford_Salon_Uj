<template>
  <div>
    <h2>Selected Car:</h2>
    <p v-if="selectedCar">{{ selectedCar.name }}</p>
    <p v-else>No car selected</p>
    <button @click="sendSelectedCar">Refresh</button>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

export default {
  name: 'Configurator',
  setup() {
    const route = useRoute();
    const selectedCarParam = route.query.selectedCar;
    const selectedCar = selectedCarParam ? JSON.parse(selectedCarParam) : null;

    const KivalasztottAuto = ref(selectedCar ? [selectedCar] : null);

    const sendSelectedCar = () => {
      const newSelectedCarParam = route.query.selectedCar;
      const newSelectedCar = newSelectedCarParam ? JSON.parse(newSelectedCarParam) : null;

      if (newSelectedCar) {
        KivalasztottAuto.value = [newSelectedCar];
      } else {
        KivalasztottAuto.value = null;
      }
    };

    return {
      selectedCar,
      sendSelectedCar,
    };
  },
};
</script>