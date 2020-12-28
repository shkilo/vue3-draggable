import { ref, onMounted, onUpdated, watch } from 'vue';

let dragging = ref({});
let currentDropZoneId = ref(null);

const removeAndInsertDragging = (items, position) => {
  const newItems = items.filter((item) => {
    return item.id !== dragging.value.id;
  });
  newItems.splice(position, 0, { ...dragging.value });
  return newItems;
};

const useDroppable = ({ initialItems, dropZoneId }, context) => {
  const items = ref(initialItems.value);

  const onItemDragOver = ({ position }) => {
    items.value = removeAndInsertDragging(items.value, position);
  };

  const containerDragOver = () => {
    if (dropZoneId.value === currentDropZoneId.value) {
      return;
    }
    currentDropZoneId.value = dropZoneId.value;
    items.value = removeAndInsertDragging(items.value, -1);
  };

  watch(currentDropZoneId, () => {
    if (currentDropZoneId.value === dropZoneId.value) {
      return;
    }
    items.value = items.value.filter((item) => item.id !== dragging.value.id);
  });

  // update model when dropped
  watch(dragging, () => {
    if (dragging.value.id) {
      return;
    }
    context.emit('update:modelValue', items.value);
  });

  return {
    localItems: items,
    onItemDragOver,
    containerDragOver,
  };
};

const useDraggable = ({ item, position, dropZoneId }, context) => {
  const draggable = ref(null);
  const isDragging = ref(item.value.id === dragging.value.id ? true : false);
  const middleY = ref(null);

  let transitioning = false;

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
    dragging.value = item.value;
    currentDropZoneId.value = dropZoneId.value;
    isDragging.value = true;
  };

  const itemDragEnd = () => {
    dragging.value = {};
  };

  const itemDragOver = (e) => {
    if (transitioning || item.value.id === dragging.value.id) {
      return;
    }

    const offset = middleY.value - e.clientY;

    context.emit('itemDragOver', {
      position: offset > 0 ? position.value : position.value + 1,
    });
  };

  const transitionStart = () => {
    transitioning = true;
  };

  const transitionEnd = () => {
    transitioning = false;
  };

  watch(dragging, () => {
    if (dragging.value.id) {
      return;
    }
    isDragging.value = false;
  });

  return {
    itemDragStart,
    itemDragOver,
    itemDragEnd,
    transitionStart,
    transitionEnd,
    draggable,
    isDragging,
  };
};

export { useDroppable, useDraggable };
