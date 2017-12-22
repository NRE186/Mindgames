<template>
  <div class="training">
    <h1>Игры разумов</h1>
    <hr>
    <!-- Progress bar -->
    <div class="progress">
    <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" :style="progress"></div>
    </div>
    <!-- Main container for components -->
    <div class="box">
    <transition name="flip" mode="out-in">
    <app-start-screen v-if="state == 'start'" @Start="Start"></app-start-screen>
    <app-question v-else-if="state == 'question'" @success="Success" @error="Error" :settings="levels[level]"></app-question>
    <app-message v-else-if="state == 'message'" :type="message.type" :text="message.text" @Next="next"></app-message>
    <app-result v-else-if="state == 'result'" :stats="stats" @next="nextLevel" @again="Start" :level="level"></app-result>
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
      // First state  
      state: 'start',
      // Stats for result component
      stats:{
        success: 0,
        error: 0,
        score:0
      },
      // Message template 
      message:{
        type: '',
        text: ''
      },
      // Value of levels and number first level 0=1, 1=2 and etc
      questMax: 15,
      level:0,
      // Add points system in [levels]
      levels:[
        {
        from: 10,
        to: 100,
        range: 65,
        variants:3,
        points:100
        },
        {
        from: 100,
        to: 1000,
        range: 100,
        variants:4,
        points:200
        },
        {
        from: 1000,
        to: 5000,
        range: 245,
        variants:6,
        points:300
        },
        {
        from: 5000,
        to: 50000,
        range: 750,
        variants:9,
        points:400
        }
      ]
    }
  },
  computed:{
    // (-_-)
    questDone(){
      return this.stats.success  + this.stats.error;
    },
    // Calculate width for progress bar
    progress(){
      return{
        width: (this.questDone / this.questMax * 100) + '%'
      };
    }
  },
  methods: {
    // Start
    Start(){
      this.state = 'question';
      this.stats.success = 0;
      this.stats.error = 0;
      this.level = 0;
      this.stats.score = 0;
    },
    // If everything good to switch to a new question and final score
    Success(){
      this.state = 'message';
      this.message.text = 'Правильный ответ';
      this.message.type = 'success';
      this.stats.success++;
      if(this.level == 0){
        this.stats.score = this.stats.score + 100;
      }
      else if(this.level == 1){
        this.stats.score = this.stats.score + 200;
      }
      else if(this.level == 2){
        this.stats.score = this.stats.score + 300;
      }
      else{
        this.stats.score = this.stats.score + 400;
      }
    },
    // If everything bad to switch to a new question and calculate errors and hearts
    Error(msg){
      this.state = 'message';
      this.message.text = msg;
      this.message.type = 'danger';
      this.stats.error++;
    },
    // I forget what is it  ¯\_(ツ)_/¯
    next(){
      if(this.questDone < this.questMax){
        this.state = 'question';
      }
      else{
        this.state = 'result';
      }
    },
    // Method for switch beetween levels
    nextLevel(){
      this.level++;
      this.onStart();
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
