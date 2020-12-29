<template>
  <div 
    draggable="true" 
    @transitionStart="transitionStart"
    @transitionEnd="transitionEnd"
    @dragover.prevent="itemDragOver"
    @dragstart="itemDragStart" 
    @dragend="itemDragEnd"
    @dragleave.prevent
    ref="draggable" 
    :class="{ isDragging }"
    
  >
    <slot></slot>
  </div>
</template>

<script>
import {toRefs} from 'vue'
import { useDraggable } from "../composables/dragDrop";

export default {
  name: "Draggable",
  props: {
    item: Object,
    position: Number,
    dropZoneId: String,
  },
  setup(props, context) {
    const { item, position, dropZoneId } = toRefs(props)
    const { 
      isDragging,
      itemDragStart,
    itemDragOver,
    itemDragEnd, transitionStart, transitionEnd, draggable } = useDraggable({item, position, dropZoneId}, context);
    
    return { isDragging,
    itemDragStart,
    itemDragOver,
    itemDragEnd, transitionStart, transitionEnd, draggable}
  }
}
</script>

<style scoped>
.isDragging {
  opacity: 0.4
}
</style>