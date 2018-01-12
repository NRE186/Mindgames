import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MainScreen from './components/Main.vue'

import MathMain from './components/Math/Math.vue'
import MathStartScreen from './components/Math/StartScreen.vue'
import MathMessage from './components/Math/Message.vue'
import MathQuestion from './components/Math/Question.vue'
import MathResult from './components/Math/Result.vue'

Vue.component('MainScreen',MainScreen);
Vue.component('MathMain', MathMain);
Vue.component('MathStartScreen', MathStartScreen);
Vue.component('MathMessage', MathMessage);
Vue.component('MathQuestion', MathQuestion);
Vue.component('MathResult', MathResult);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});

