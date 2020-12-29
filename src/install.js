import Droppable from './components/Droppable';

const Drag = {
  install(Vue) {
    Vue.component('droppable', Droppable);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Drag);
}

export default Drag;
