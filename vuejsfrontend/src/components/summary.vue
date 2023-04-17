<template>
  <div>
    ok
    <h2>{{ selectedCar }}</h2>
    <!-- további elemek -->
  </div>
</template>

<script>
export default {
  name: "Summary",
  props: {
    selectedCar: {
      type: String,
      required: true
    }
    
  },

  
};
</script>