// Cars komponens
<template>
  <div>
    <Configurator :modelId="modelId" @carSelected="selectedCar = $event" />
    <Summary :selectedCar="selectedCar" />
    ok
  </div>
</template>

<script>
import Configurator from "@/components/Configurator.vue";
import Summary from "@/components/Summary.vue";

export default {
  name: "Cars",
  components: {
    Configurator,
    Summary
  },
  data() {
    return {
      selectedCar: null,
      modelId: "2"
    };
  }
};
</script>