import { ref, onMounted, onUpdated, watch } from "vue";
import throttle from "../utils//throttle";

const changePosition = (itemToChange, items, position) => {
  const newItems = items.filter(item => {
    return item.id !== itemToChange.id;
  });
  newItems.splice(position, 0, { ...itemToChange });
  return newItems;
};

let draggingItem = ref({});
let currentDropZoneId = ref(null);
let transitioning = false;

const useDraggableContainer = ({ initialItems, dropZoneId }, context) => {
  const items = ref(initialItems.value);

  // update model when dropped
  watch(draggingItem, () => {
    if (draggingItem.value.id) {
      return;
    }
    context.emit("update:modelValue", items.value);
  });

  watch(currentDropZoneId, () => {
    if (currentDropZoneId.value === dropZoneId.value) {
      return;
    }
    items.value = items.value.filter(item => item.id !== draggingItem.value.id);
  });

  const onItemDragOver = ({ position }) => {
    if (transitioning || draggingItem.value == {}) {
      return;
    }
    items.value = changePosition(draggingItem.value, items.value, position);
  };

  const containerDragOver = () => {
    if (
      transitioning ||
      draggingItem.value == {} ||
      dropZoneId.value === currentDropZoneId.value
    ) {
      return;
    }

    if (items.value.length > 0) {
      return;
    }

    currentDropZoneId.value = dropZoneId.value;
    items.value = [draggingItem.value];
  };

  const style = "background-color: red";

  return {
    style,
    localItems: items,
    onItemDragOver,
    containerDragOver
  };
};

const useDraggableItem = ({ item, position, dropZoneId }, context) => {
  const draggable = ref(null);
  const isDragging = ref(
    item.value.id === draggingItem.value.id ? true : false
  );
  const middleY = ref(null);

  onMounted(async () => {
    setTimeout(() => {
      const box = draggable.value.getBoundingClientRect();
      middleY.value = box.top + box.height / 2;
    }, 300);
  });

  onUpdated(() => {
    const box = draggable.value.getBoundingClientRect();
    middleY.value = box.top + box.height / 2;
  });

  const itemDragStart = () => {
    draggingItem.value = item.value;
    currentDropZoneId.value = dropZoneId.value;
    isDragging.value = true;
  };

  const itemDragEnd = () => {
    draggingItem.value = {};
  };

  const itemDragOver = throttle(e => {
    console.log(e.target);
    if (item.value.id === draggingItem.value.id) {
      return;
    }

    if (currentDropZoneId.value !== dropZoneId.value) {
      currentDropZoneId.value = dropZoneId.value;
    }

    const offset = middleY.value - e.clientY;

    context.emit("itemDragOver", {
      position: offset > 0 ? position.value : position.value + 1
    });
  }, 50);

  const transitionStart = () => {
    transitioning = true;
  };

  const transitionEnd = () => {
    transitioning = false;
  };

  watch(draggingItem, () => {
    if (draggingItem.value.id) {
      return;
    }
    isDragging.value = false;
  });

  return {
    draggable,
    isDragging,
    itemDragStart,
    itemDragOver,
    itemDragEnd,
    transitionStart,
    transitionEnd
  };
};

export { useDraggableContainer, useDraggableItem };
