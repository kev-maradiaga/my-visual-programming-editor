<template lang="pug">
.node-palette
  palette-section(
    v-for="(category, index) in nodeCategories"
    :key="index"
    :nodeCategory="category"
  )
</template>

<script>
import PaletteSection from './PaletteSection.vue';

export default {
  components: {
    PaletteSection,
  },
  props: {
    nodeCategories: {type: Array, required: true},
  },
  data() {
    return {};
  },
};
</script>

<style escoped>
.node-palette {
  width: 20vw;
  border-right: solid 1px black;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
