<template>
    <Profile v-if="isLoggedIn"></Profile>
    <div v-else>

        <Error></Error>
    </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import Profile from '../components/Profile.vue';
import Error from '../Check/Error.vue'
import { RouterView } from 'vue-router';

export default {
    components: {
        Profile,
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