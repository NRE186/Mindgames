<template xmlns="" xmlns="">
  <div class="training">
    <h1>Игры разумов</h1>
    <div class="alert alert-light info">
      <h4>Очки : {{this.stats.score}}</h4>
      <h4 class="hearts" v-if="this.stats.errors === 0">
        <span class="heart"><i class="fas fa-heart"></i></span>
        <span class="heart"><i class="fas fa-heart"></i></span>
        <span class="heart"><i class="fas fa-heart"></i></span>
        <span class="heart"><i class="fas fa-heart"></i></span>
        <span class="heart"><i class="fas fa-heart"></i></span>
      </h4>
      <h4 class="hearts" v-else-if="this.stats.errors === 1">
        <span class="heart"><i class="fas fa-heart"></i></span>
        <span class="heart"><i class="fas fa-heart"></i></span>
        <span class="heart"><i class="fas fa-heart"></i></span>
        <span class="heart"><i class="fas fa-heart"></i></span>
        <span class="cross"><i class="fas fa-times"></i></span>
      </h4>
      <h4 class="hearts" v-else-if="this.stats.errors === 2">
        <span class="heart"><i class="fas fa-heart"></i></span>
        <span class="heart"><i class="fas fa-heart"></i></span>
        <span class="heart"><i class="fas fa-heart"></i></span>
        <span class="cross"><i class="fas fa-times"></i></span>
        <span class="cross"><i class="fas fa-times"></i></span>
      </h4>
      <h4 class="hearts" v-else-if="this.stats.errors === 3">
        <span class="heart"><i class="fas fa-heart"></i></span>
        <span class="heart"><i class="fas fa-heart"></i></span>
        <span class="cross"><i class="fas fa-times"></i></span>
        <span class="cross"><i class="fas fa-times"></i></span>
        <span class="cross"><i class="fas fa-times"></i></span>
      </h4>
      <h4 class="hearts" v-else-if="this.stats.errors === 4">
        <span class="heart"><i class="fas fa-heart"></i></span>
        <span class="cross"><i class="fas fa-times"></i></span>
        <span class="cross"><i class="fas fa-times"></i></span>
        <span class="cross"><i class="fas fa-times"></i></span>
        <span class="cross"><i class="fas fa-times"></i></span>
      </h4>
      <h4 class="hearts" v-else-if="this.stats.errors === 5">
        <span class="cross"><i class="fas fa-times"></i></span>
        <span class="cross"><i class="fas fa-times"></i></span>
        <span class="cross"><i class="fas fa-times"></i></span>
        <span class="cross"><i class="fas fa-times"></i></span>
        <span class="cross"><i class="fas fa-times"></i></span>
      </h4>
    </div>
    <!-- Progress bar -->
    <div class="progress">
    <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" :style="progress"></div>
    </div>
    <!-- Main container for components -->
    <div class="box">
    <transition name="flip" mode="out-in">
    <start-screen v-if="state == 'start'" @Start="Start"></start-screen>
    <question v-else-if="state == 'question'" @success="Success" @error="Error" :settings="levels[level]"></question>
    <message v-else-if="state == 'message'" :type="message.type" :text="message.text" @Next="next"></message>
    <result v-else-if="state == 'result'" :stats="stats" @next="nextLevel" @again="Start" :level="level"></result>
    <div v-else>Unknown state</div>
    </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      // First state
      state: 'start',
      // Stats for result component
      stats: {
        lvl_success: 0,
        lvl_errors: 0,
        success: 0,
        errors: 0,
        score: 0,
        gameOver: false,
      },

      // Message template
      message: {
        type: '',
        text: ''
      },
      // Value of levels and number first level 0=1, 1=2 and etc
      questMax: 10,
      level: 0,
      // Add points system in [levels]
      levels: [
        {
          from: 10,
          to: 100,
          range: 65,
          variants: 3,
          points: 100
        },
        {
          from: 100,
          to: 1000,
          range: 100,
          variants: 4,
          points: 200
        },
        {
          from: 1000,
          to: 5000,
          range: 245,
          variants: 6,
          points: 300
        },
        {
          from: 5000,
          to: 50000,
          range: 750,
          variants: 9,
          points: 400
        }
      ]
    }
  },
  watch: {
    stats: {
      handler: function(newValue) {
        if (newValue.errors === 5){
          this.state = 'result';
          this.stats.gameOver = true;
        }
      },
      deep: true
    }
  },
  computed:{
    // (-_-)
    questDone(){
      return this.stats.lvl_success  + this.stats.lvl_errors;
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
      this.stats.errors = 0;
      this.lvl_success = 0;
      this.lvl_errors = 0;
      this.stats.score = 0;
      this.level = 0;
    },
    // If everything good to switch to a new question and final score
    Success: function () {
      this.state = 'message';
      this.message.text = 'Правильный ответ';
      this.message.type = 'success';
      this.stats.success++;
      this.stats.lvl_success++;
      if (this.level === 0) {
        this.stats.score = this.stats.score + 100;
      }
      else if (this.level === 1) {
        this.stats.score = this.stats.score + 200;
      }
      else if (this.level === 2) {
        this.stats.score = this.stats.score + 300;
      }
      else {
        this.stats.score = this.stats.score + 400;
      }
    },
    // If everything bad to switch to a new question and calculate errors and hearts
    Error(msg){
      this.state = 'message';
      this.message.text = msg;
      this.message.type = 'danger';
      this.stats.errors++;
      this.stats.lvl_errors++;
    },
    // Next lvl if they have or result
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
      this.state = 'question';
      this.level++;
      this.stats.lvl_success = 0;
      this.stats.lvl_errors = 0;
    }
  }
}
</script>

<style scoped>
  .info{
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid;
    background-color: #424242;
  }
  .info h4{
    color: white;
  }
  .hearts{
    position: absolute;
    top: 15px;
    right: 20px;
  }
  .heart{
    color: #3be218;
  }
  .cross{
    color: red;
    font-size:;
  }
  .training{
    max-width: 900px;
    margin: 20px auto;
  }
  .training h1{
    text-align: center;
  }
  .box{
    margin: 15px 0;
  }
  .progress{
    margin-top: 15px;
    margin-bottom: 15px;
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
