<template>
  <div>
    <div v-if="!isMobile()">
      <desktop>
        <CarsComponent></CarsComponent>
      </desktop>
    </div>
    <div v-else>
      <mobile>
        <Mobile></Mobile>
      </mobile>
    </div>
  </div>
</template>
  
<script>
import CarsComponent from '../components/carsList.vue';
import Mobile from '../MobileViews/CarsList.vue';


export default {
  methods: {
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  },
  components: {
    CarsComponent,
    Mobile
  }
}
</script>