<template>
  <Config v-if="isLoggedIn"></Config>
  <div v-else>
    <div class="m-5 BodySize">
      <div class="my-element animate__animated animate__fadeIn" :style="{ 'animation-delay': '0.5s' }">
        <h2>Hiba!</h2>
        <h4>Be kell jelentkezned, hogy hozzáférj ehhez az oldalhoz.</h4>
        <router-link to="/login">Bejelentkezés</router-link>
        <img src="../assets/img/Error/error.jpg" alt="" style="display: block; margin: 0 auto; max-width: 30%;">
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Config from '../Check/ConfigMobileCheck.vue';

import { RouterView } from 'vue-router';

export default {
  components: {
    Config,
    RouterView
  },
  data() {
    return {
      Mobileellenorzes: false,
    }
  },
  setup() {
    const isLoggedIn = ref(false);

    const checkLogin = () => {
      const userToken = localStorage.getItem('token');
      if (userToken) {
        // TODO: validate user token on server
        isLoggedIn.value = true;
      }
    };

    const logout = () => {
      localStorage.removeItem('token');
      isLoggedIn.value = false;
      router.push('/');
    };

    onMounted(() => {
      checkLogin();
    });

    return { isLoggedIn, logout };
  },
};
</script>