# vue3-draggable

list-based drag&drop component for vue 3.x, with no dependencies

![vue3-drag2](https://user-images.githubusercontent.com/59331444/104086030-774ce700-5297-11eb-9f5a-211bd4b7c01f.gif)

# Features

- support v-model
- support transition
- customizable draggable component

Nested useage is currently not supported

# Installation

```
npm i vue3-draggable
```

# Try Sample

```bash
git clone https://github.com/shkilo/vue3-draggable.git

npm i
npm run serve
```

# Usage

import component:

```javascript
import Draggable from "vue3-draggable";

export default {
  components: {
    Draggable,
  },
};
```

template:

```vue
<draggable v-model="items">
    <template v-slot:item="{item}">
        <!-- example -->
        <div>
            {{item.title}}
        </div>
        <!-- or your own template -->
    </template>
</draggable>
```

This componet is implemented based on [v-slot](https://v3.vuejs.org/guide/component-slots.html#slots)

### Props

| Name       | Required | Type   | Description                      |
| :--------- | :------- | :----- | :------------------------------- |
| modelValue | REQUIRED | ARRAY  | v-model value, items to be bound |
| transition | OPTIONAL | STRING | transition delay in ms           |
