<template lang="pug">
.program-viewer(
  @dragover.prevent
  @mousemove="dragNode"
  @mouseleave="deselectNode"
  @mouseup="deselectNode"
  @drop="addNewNode"
  @wheel="zoom"
)
  .node-container(:style="{transform: 'scale(' + scale + ')'}")
    program-node(
      v-for="(node, index) in program.nodes"
      :key="node.id"
      :node="node"
      @dragover.stop
      @mousedown="selectNode($event, index)"
    )
</template>

<script>
import ProgramNode from './ProgramNode.vue';

export default {
  components: {
    ProgramNode,
  },
  emits: ['add-node', 'update:program'],
  props: {
    nodeTypes: {type: Object, required: true},
    program: {type: Object, required: true},
  },
  data() {
    return {
      selectedNodeIndex: -1,
      x: 0,
      y: 0,
      scale: 1,
      traslateX: 0,
      traslateY: 0,
    };
  },
  methods: {
    addNewNode(event) {
      const nodeTypeId = event.dataTransfer.getData('text/plain');
      const nodeType = this.nodeTypes[nodeTypeId];
      if (nodeType === null) return;
      const node = {
        id: this.program.nextNodeId,
        type: nodeType,
        x: event.offsetX,
        y: event.offsetY,
      };
      const programCopy = {...this.program};
      programCopy.nodes.push(node);
      programCopy.nextNodeId += 1;
      this.$emit('update:program', programCopy);
    },
    deselectNode() {
      this.selectedNodeIndex = -1;
    },
    dragNode(event) {
      if (this.selectedNodeIndex === -1) return;
      const programCopy = {...this.program};
      programCopy.nodes[this.selectedNodeIndex].x =
        event.clientX / this.scale - this.x;
      programCopy.nodes[this.selectedNodeIndex].y =
        event.clientY / this.scale - this.y;
      this.$emit('update:program', programCopy);
    },
    selectNode(event, index) {
      this.selectedNodeIndex = index;
      this.x = event.clientX / this.scale - this.program.nodes[index].x;
      this.y = event.clientY / this.scale - this.program.nodes[index].y;
    },
    zoom(event) {
      this.scale -= event.deltaY * 0.001;
    },
  },
};
</script>

<style>
.program-viewer {
  position: relative;
  width: 80vw;
  overflow: hidden;
}
.node-container {
  width: 100%;
  height: 100%;
  overflow: visible;
  background-color: cadetblue;
}
</style>
