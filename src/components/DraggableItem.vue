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
import { toRefs } from "vue";
import { useDraggableItem } from "../composables/draggable";

export default {
  name: "DraggableItem",
  props: {
    item: Object,
    position: Number,
    dropZoneId: String
  },
  setup(props, context) {
    const { item, position, dropZoneId } = toRefs(props);
    const {
      draggable,
      isDragging,
      itemDragStart,
      itemDragOver,
      itemDragEnd,
      transitionStart,
      transitionEnd
    } = useDraggableItem({ item, position, dropZoneId }, context);

    return {
      draggable,
      isDragging,
      itemDragStart,
      itemDragOver,
      itemDragEnd,
      transitionStart,
      transitionEnd
    };
  }
};
</script>

<style scoped>
.isDragging {
  opacity: 0.4;
}
</style>
