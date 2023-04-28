<template>
  <Config v-if="isLoggedIn"></Config>
  <div v-else>

    <Error></Error>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';
import Config from '../Check/ConfigMobileCheck.vue';
import Error from '../Check/Error.vue'

export default {
  components: {
    Config,
    Error,
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