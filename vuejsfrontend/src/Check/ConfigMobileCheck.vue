<template>

    <Config v-if="!isMobile()"></Config>


    <mobile v-else>
      <Mobile></Mobile>
    </mobile>
</template>
  
<script>
import Config from '../components/Configurator.vue';
import Mobile from '../MobileViews/ConfiguratorMobile.vue';


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
    Config,
    Mobile
  }
}
</script>