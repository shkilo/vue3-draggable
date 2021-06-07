<template>
  <div
    draggable="true"
    @transitionStart="transitionStart"
    @transitionEnd="transitionEnd"
    @dragover.prevent.stop="onDragOver"
    @dragstart.stop="onDragStart"
    @dragend.stop="onDragEnd"
    @dragenter.prevent
    ref="draggableItemEl"
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
    containerId: Number
  },
  setup(props, context) {
    const { item, position, containerId } = toRefs(props);
    const {
      draggableItemEl,
      isDragging,
      onDragStart,
      onDragOver,
      onDragEnd,
      transitionStart,
      transitionEnd
    } = useDraggableItem(item, position, containerId, context);

    return {
      draggableItemEl,
      isDragging,
      onDragStart,
      onDragOver,
      onDragEnd,
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
