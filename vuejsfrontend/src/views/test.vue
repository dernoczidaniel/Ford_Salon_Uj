<template>
  <div>
    <h2>A külső .txt állomány tartalma:</h2>
    <pre>{{ fileContent }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileContent: ''
    };
  },
  mounted() {
    fetch('../description/Focus.txt')
      .then(response => response.text())
      .then(data => {
        this.fileContent = data;
      });
  }
};
</script>