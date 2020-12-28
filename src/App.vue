<template>
  <div class="container">
    <droppable v-model="items" dropZoneId="1" class="drop-zone" >
      <template v-slot:item="{item}">
        <div class="draggable-item">
          {{item.title}}
        </div>
        
      </template>
    </droppable>
    {{items}}

    <droppable v-model="items2" dropZoneId="2" class="drop-zone">
      <template v-slot:item="{item}">
        <div class="draggable-item">
          {{item.title}}
        </div>
      </template>
    </droppable>
    {{items2}}
  </div>
</template>

<script>
import Droppable from './components/Droppable'

export default {
  name: 'App',
  components: {
    Droppable
  },
  data() {
    return {
      items: [
      {
        id: 1,
        title: 'item 1'
      },
      {
        id: 2,
        title: 'item 2'
      },
      {
        id: 3,
        title: 'item 3'
      },
      {
        id: 4,
        title: 'item 4'
      },
      {
        id: 5,
        title: 'item 5'
      }
      ],
      items2: [],
    }
  }
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
  width: 800px;
}
body {
  display: flex;
  padding-top: 100px;
  justify-content: center;
}
.draggable-item {
  background-color: lightblue;
  border: 1px solid lightblue;
  margin: 1%;
  padding: 1%;
  display: flex;
  justify-content: center;
}
.drop-zone {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin: 30px;
  padding: 5px;
  min-height: 100px;
}
</style>
