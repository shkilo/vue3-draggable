# vue3-draggable

simple drag&drop component for vue 3.x, with no dependencies

![vue3-drag](https://user-images.githubusercontent.com/59331444/103271751-6e8a2480-49fe-11eb-953d-9554e0af513a.gif)

# Features

- support v-model
- customizable draggable component

# Installation

```
npm i vue3-draggable
```

# Usage

import component:

```javascript
import Draggable from 'vue3-draggable';

export default {
  components: {
    Draggable,
  },
};
```

template:

```vue
<draggable v-model="items" dropZoneId="1" class="drop-zone" >
    <template v-slot:item="{item}">
        <!-- example -->
        <div class="draggable-item">
            {{item.title}}
        </div>
        <!-- or your own template -->
    </template>
</draggable>
```

### Props

| Name       | Required     | Type       | Description                                        |
| :--------- | :----------- | :--------- | :------------------------------------------------- |
| modelValue | **REQUIRED** | **ARRAY**  | v-model value, items to be bound                   |
| dropZoneId | **REQUIRED** | **STRING** | unique id is required for each draggable component |
