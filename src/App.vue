<template>
  <div class="training">
    <h1>Игры разумов</h1>
    <hr>
    <div class="progress">
    <div class="progress-bar progress-bar-striped bg-info" :style="progress"></div>
    </div>
    <div class="box">
    <transition name="flip" mode="out-in">
    <app-start-screen v-if="state == 'start'" @onStart="onStart"></app-start-screen>
    <app-question v-else-if="state == 'question'" @success="onSuccess" @error="onError" :settings="levels[level]"></app-question>
    <app-message v-else-if="state == 'message'" :type="message.type" :text="message.text" @onNext="onNext"></app-message>
    <app-result v-else-if="state == 'result'" :stats="stats" @repeat="onStart" @next="nextLevel" @again="again" :level="level"></app-result>
    <div v-else>Unknown state</div>
    </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      state: 'start',
      stats:{
        success: 0,
        error: 0
      },
      message:{
        type: '',
        text: ''
      },
      questMax: 5,
      level:0,
      levels:[
        {
        from: 10,
        to: 500,
        range: 75,
        variants:3
        },
        {
        from: 500,
        to: 5000,
        range: 245,
        variants:6
        },
        {
        from: 5000,
        to: 50000,
        range: 1500,
        variants:9
        }
      ]
    }
  },
  computed:{
    questDone(){
      return this.stats.success  + this.stats.error;
    },
    progress(){
      return{
        width: (this.questDone / this.questMax * 100) + '%'
      };
    }
  },
  methods: {
    onStart(){
      this.state = 'question';
      this.stats.success = 0;
      this.stats.error = 0;
    },
    onSuccess(){
      this.state = 'message';
      this.message.text = 'Правильный ответ';
      this.message.type = 'success';
      this.stats.success++;
    },
    onError(msg){
      this.state = 'message';
      this.message.text = msg;
      this.message.type = 'danger';
      this.stats.error++;
    },
    onNext(){
      if(this.questDone < this.questMax){
        this.state = 'question';
      }
      else{
        this.state = 'result';
      }
    },
    nextLevel(){
      this.level++;
      this.onStart();
    },
    again(){
      this.state = 'question';
      this.stats.success = 0;
      this.stats.error = 0;
      this.level = 0;
    }
  }
}
</script>

<style scoped>
  .training{
    max-width: 700px;
    margin: 20px auto;
  }
  .training h1{
    text-align: center;
  }
  .box{
    margin: 15px 0;
  }
  .progress-bar{
    transition: width 1s;
  }
  .flip-enter-active{
    animation: flipInX 0.3s linear;
  }
  .flip-leave-active{
    animation: flipOutX 0.3s linear;
  }

  @keyframes flipInX{
    from{transform: rotateX(90deg);}
    to{transform: rotateX(0deg);}
  }
  @keyframes flipOutX{
    from{transform: rotateX(0deg);}
    to{transform: rotateX(90deg);}
  }
</style>
