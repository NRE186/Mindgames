/* Import all components */
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import Toolbar from './components/Toolbar.vue'
import MainScreen from './components/Main.vue'
import Records from './components/Records.vue'
import MathMain from './components/Math/Math.vue'
import MathStartScreen from './components/Math/StartScreen.vue'
import MathMessage from './components/Math/Message.vue'
import MathQuestion from './components/Math/Question.vue'
import MathResult from './components/Math/Result.vue'
/* Usage additional libraries */
Vue.use(Vuetify);
/* Connection all components */
Vue.component('Records', Records);
Vue.component('Toolbar', Toolbar);
Vue.component('MainScreen', MainScreen);
Vue.component('MathMain', MathMain);
Vue.component('MathStartScreen', MathStartScreen);
Vue.component('MathMessage', MathMessage);
Vue.component('MathQuestion', MathQuestion);
Vue.component('MathResult', MathResult);
/* Disable all tips for production */
Vue.config.productionTip = false;
/* Class Vue for working with vue */
new Vue({
  el: '#app',
  render: h => h(App),
  router
});

