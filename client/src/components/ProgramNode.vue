<template lang="pug">
.program-node(:style="{left: node.x + 'px', top: node.y + 'px'}")
  .node-header {{node.type.title}}
  .node-body hola
</template>

<script>
export default {
  props: {
    node: {type: Object, required: true},
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.program-node {
  position: absolute;
  width: 150px;
  transform: translate(-50%, -50%);
  border: solid 1px black;
  border-radius: 10px;
  background-color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  user-select: none;
}
.node-header {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.node-body {
  height: 100px;
}
</style>
