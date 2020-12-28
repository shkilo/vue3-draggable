import Droppable from './components/Droppable';
import Draggable from './components/Draggable';

const Drag = {
  install(Vue) {
    Vue.component('draggable', Draggable);
    Vue.component('droppable', Droppable);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Drag);
}

export default Drag;
