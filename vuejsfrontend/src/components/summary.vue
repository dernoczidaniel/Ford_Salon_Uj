<script setup>
//stores kell hozzá !!!!

import dataservice from '../services/dataservice.js'
import { ref } from 'vue'
// import { useAutoSend } from '../stores' //be kell importalni

const kivAuto = useAutoSend() //majd hasznalni


</script>
<template>
  ok
  {{ kivAuto }}
</template>