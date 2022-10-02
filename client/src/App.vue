<template lang="pug">
.app
  node-palette(:node-categories="nodeCategories")
  program-viewer(
    :node-types="nodeTypes" v-model:program="program")
</template>

<script>
import NodePalette from './components/NodePalette.vue';
import ProgramViewer from './components/ProgramViewer.vue';
import {nodeCategories, nodeTypes} from './nodes';

export default {
  components: {
    NodePalette,
    ProgramViewer,
  },
  data() {
    return {
      nodeCategories,
      nodeTypes,
      program: {
        nextNodeId: 1,
        nodes: [],
        connections: [],
      },
    };
  },
};
</script>

<style scoped>
.app {
  height: 100vh;
  display: flex;
}
</style>
