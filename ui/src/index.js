import { version } from '../package.json';

import MyQuasarButton from './components/MyQuasarButton.vue';


export {
  version,
  MyQuasarButton
}

export default {
  version,

  MyQuasarButton,
  

  install (Vue) {
    Vue.component(MyQuasarButton.name, MyQuasarButton)
  }
}
