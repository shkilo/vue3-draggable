<template>
  <div @dragover.prevent.stop="onDragOver">
    <transition-group name="draggable-item-list">
      <draggable-item
        v-for="(item, index) in items"
        :key="item.id"
        :item="item"
        :containerId="id"
        :position="index"
        @itemDragOver="onItemDragOver"
      >
        <slot name="item" :item="item"></slot>
      </draggable-item>
    </transition-group>
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
    transition: {
      default: "0",
      type: String
    }
  },
  setup(props, context) {
    const { modelValue } = toRefs(props);
    const {
      id,
      items,
      onDragOver,
      onItemDragOver,
    } = useDraggableContainer(modelValue, context);

    return { id, items, onDragOver, onItemDragOver };
  },
  computed: {
    transitionStyle() {
      return `transform ${this.transition}ms`;
    }
  }
};
</script>

<style scoped>
.draggable-item-list-move {
  transition: v-bind(transitionStyle);
}
</style>
