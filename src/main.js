import Vue from 'vue'
import App from './App.vue'

import StartScreen from './components/StartScreen.vue';
import Message from './components/Message.vue';
import Question from './components/Question.vue';
import Result from './components/Result.vue';

Vue.component('StartScreen', StartScreen);
Vue.component('Message', Message);
Vue.component('Question', Question);
Vue.component('Result', Result);

new Vue({
  el: '#app',
  render: h => h(App)
})
