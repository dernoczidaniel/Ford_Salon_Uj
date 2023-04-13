<template>
  <div>
    <h2>Összefoglaló</h2>
    <p>Autó színe: {{ selectedCar.color }}</p>
    <p>Belső szín: {{ selectedCar.interiorcolor }}</p>
    <p>Modell index: {{ selectedCar.modelIndex }}</p>
    <p>Kiegészítők:</p>
    <ul>
      <li v-for="extra in selectedCar.extras" :key="extra.name">{{ extra.name }} ({{ extra.price }} Ft)</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    selectedCar: {
      type: Object,
      required: true
    }
  }
}
</script>