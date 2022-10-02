<template lang="pug">
.palette-card(draggable="true" @dragstart="handleDragStart") {{nodeType.title}}
</template>

<script>
export default {
  props: {
    nodeType: {type: Object, required: true},
  },
  data() {
    return {};
  },
  methods: {
    handleDragStart(event) {
      event.dataTransfer.setData('text/plain', this.nodeType.id);
    },
  },
};
</script>

<style scoped>
.palette-card {
  height: 50px;
  border: solid 1px black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
</style>
