<template lang="pug">
.palette-section
  .section-header(@click="changeBodyVisibility") {{nodeCategory.title}}
  .section-body(v-show="showCards")
    palette-card(
      v-for="(type, index) in nodeCategory.nodeTypes"
      :key="index"
      :node-type="type"
    )
</template>

<script>
import PaletteCard from './PaletteCard.vue';

export default {
  components: {
    PaletteCard,
  },
  props: {
    nodeCategory: {type: Object, required: true},
  },
  data() {
    return {
      showCards: false,
    };
  },
  methods: {
    changeBodyVisibility() {
      this.showCards = !this.showCards;
    },
  },
};
</script>

<style scoped>
.palette-section {
  display: flex;
  flex-direction: column;
}
.section-header {
  height: 30px;
  border: solid 1px black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.section-body {
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
