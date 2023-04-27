<template>
    <div class="m-5 BodySize">
        <div class="my-element animate__animated animate__fadeIn" :style="{ 'animation-delay': '0.5s' }">
            <h2>Hiba!</h2>
            <h4>Be kell jelentkezned, hogy hozzáférj ehhez az oldalhoz.</h4>
            <router-link to="/login">Bejelentkezés</router-link>
            <img src="../assets/img/Error/error.jpg" alt="" style="display: block; margin: 0 auto; max-width: 30%;">
        </div>
    </div>
</template>
<script>
</script>