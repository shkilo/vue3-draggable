<template>
  <div class="container">
    <div class="left">
      <draggable
        v-model="items1"
        dropZoneId="1"
        transition="100"
        class="drop-zone"
      >
        <template v-slot:item="{ item }">
          <div class="draggable-item">
            {{ item.title }}
          </div>
        </template>
      </draggable>

      <pre>{{ JSON.stringify(items1, undefined, 4) }}</pre>
    </div>

    <div class="right">
      <draggable
        v-model="items2"
        dropZoneId="2"
        transition="100"
        class="drop-zone"
      >
        <template v-slot:item="{ item }">
          <div class="draggable-item">
            {{ item.title }}
          </div>
        </template>
      </draggable>

      <pre>{{ JSON.stringify(items2, undefined, 4) }}</pre>
    </div>
  </div>
</template>

<script>
import Draggable from "./components/Draggable";
export default {
  name: "App",
  components: {
    Draggable
  },
  data() {
    return {
      items1: Array(5)
        .fill({})
        .map((_, index) => ({ id: index + 1, title: `Item ${index + 1}` })),
      items2: []
    };
  }
};
</script>

<style>
.container {
  width: 800px;
  display: flex;
  flex-direction: row;
}
body {
  display: flex;
  padding-top: 100px;
  justify-content: center;
}
.draggable-item {
  display: flex;
  justify-content: center;
  background-color: lightblue;
  box-shadow: 0px 2px 5px #aaa;
  margin: 1%;
  padding: 1%;
}
.drop-zone {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 5px #aaa;
  margin: 30px;
  padding: 10px;
  width: 400px;
  height: 200px;
}
pre {
  background-color: #eee;
  margin: 30px;
  padding: 10px;
  width: 400px;
  min-height: 200px;
}
</style>
