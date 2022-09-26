<template lang="pug">
div(class = 'app') {{message}}
</template>

<script>
export default {
  data() {
    return {message: 'Hola Mundo!'};
  },
};
</script>

<style>
.app {
  background-color: coral;
}
</style>
