<template>
  <div 
    @dragover.prevent="containerDragOver"
  >   
    <draggable 
      v-for="(item, index) in localItems" 
      :key="item.id" 
      :item="item" 
      :dropZoneId="dropZoneId"
      :position="index"
      @itemDragOver="onItemDragOver"
    > 
      <slot name="item" :item="item"></slot>
    </draggable> 
  </div>
</template>

<script>
import { toRefs } from "vue";
import Draggable from './Draggable';
import { useDroppable } from '../composables/dragDrop';

export default {
  components: {
    Draggable
  },
  props: {
    modelValue: Array,
    dropZoneId: String,
  },
  setup(props, context) {
    const { modelValue, dropZoneId } = toRefs(props);
    
    const { localItems, onItemDragOver, containerDragOver } = useDroppable(
      { 
        initialItems: modelValue, 
        dropZoneId,
      }, 
      context
    );
    return { localItems, onItemDragOver, containerDragOver }
  }
}
</script>

<style scoped>
.item-list-move {
  transition: transform 200ms;
}
</style>