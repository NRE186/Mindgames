import Vue from 'vue'
import App from './App.vue'

import AppStartScreen from './components/StartScreen.vue';
import AppMessage from './components/Message.vue';
import AppQuestion from './components/Question.vue';
import AppResult from './components/Result.vue';

Vue.component('AppStartScreen', AppStartScreen);
Vue.component('AppMessage', AppMessage);
Vue.component('AppQuestion', AppQuestion);
Vue.component('AppResult', AppResult);

new Vue({
  el: '#app',
  render: h => h(App)
})
