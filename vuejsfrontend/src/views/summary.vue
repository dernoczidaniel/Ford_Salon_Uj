<template>
  <body class="BodySize">

    <div class="container">
      <div class="m-5">
        <h1 class="text-center m-5">Rendelés összegzése</h1>
      </div>

      <div class="m-5">

        <Summary></Summary>
      </div>
    </div>

  </body>
</template>

<script>
import Summary from '../components/summary.vue';

export default {
  components: {
    Summary
  }
};
</script>