<template>
  <div class="container">
    <draggable v-model="items1" dropZoneId="1" class="drop-zone" >
      <template v-slot:item="{item}">
        <div class="draggable-item">
          {{item.title}}
        </div>
      </template>
    </draggable>
    {{items1}}

    <draggable v-model="items2" dropZoneId="2" class="drop-zone">
      <template v-slot:item="{item}">
        <div class="draggable-item">
          {{item.title}}
        </div>
      </template>
    </draggable>
    {{items2}}
  </div>
</template>

<script>
import Draggable from './components/Draggable'

export default {
  name: 'App',
  components: {
    Draggable
  },
  data() {
    return {
      items1: Array(5).fill({}).map((_, index) => ({id: index+1, title: `Item ${index+1}`})),
      items2: [],
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 1000px;
}
body {
  display: flex;
  padding-top: 100px;
  justify-content: center;
}
.draggable-item {
  color: darkslategray;
  background-color: lightblue;
  box-shadow: 0px 2px 5px #aaa;
  margin: 1%;
  padding: 1%;
  display: flex;
  justify-content: center;
}
.drop-zone {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 5px #aaa;
  margin: 30px;
  padding: 5px;
  min-height: 100px;
}
</style>
