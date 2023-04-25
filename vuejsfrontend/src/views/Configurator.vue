<template>
          <Config></Config> 

  <div>
    <div v-if="!isMobile()">
      <desktop>
          <Config></Config> 
        </desktop>
    </div>
    <div v-else>
      <mobile>
        <ConfiguratorMobile>
      </ConfiguratorMobile>
    </mobile>
    </div>
  </div>
</template>
  
<script>
import Config from '../components/Configurator.vue';
import ConfiguratorMobile from '../MobileViews/ConfiguratorMobile.vue';


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
    ConfiguratorMobile
  }
}
</script>