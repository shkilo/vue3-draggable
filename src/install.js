import Droppable from './components/Droppable';
import Draggable from './components/Draggable';

const Vue3Draggable = {
  install(Vue) {
    Vue.component('draggable', Draggable);
    Vue.component('droppable', Droppable);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vue3Draggable);
}

export default Vue3Draggable;
