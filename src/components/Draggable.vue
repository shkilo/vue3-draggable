<template>
  <div @dragover.prevent="containerDragOver">
    <draggable-item
      v-for="(item, index) in localItems"
      :key="item.id"
      :item="item"
      :dropZoneId="dropZoneId"
      :position="index"
      @itemDragOver="onItemDragOver"
    >
      <slot name="item" :item="item"></slot>
    </draggable-item>
  </div>
</template>

<script>
import { toRefs } from "vue";
import DraggableItem from "./DraggableItem";
import { useDraggableContainer } from "../composables/draggable";

export default {
  name: "Draggable",
  components: {
    DraggableItem
  },
  props: {
    modelValue: Array,
    dropZoneId: String
  },
  setup(props, context) {
    const { modelValue, dropZoneId } = toRefs(props);

    const {
      localItems,
      onItemDragOver,
      containerDragOver
    } = useDraggableContainer(
      {
        initialItems: modelValue,
        dropZoneId
      },
      context
    );
    return { localItems, onItemDragOver, containerDragOver };
  }
};
</script>

<style scoped>
.item-list-move {
  transition: transform 200ms;
}
</style>
