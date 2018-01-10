<template>
  <div class="training">
    <h2>Математика</h2>
    <div class="alert alert-light info">
      <!-- Output score -->
      <h4>Очки : {{ this.stats.score }}</h4>
      <!-- Output multiplier -->
      <span class="multiplier">x{{ this.stats.multiplier }}</span>
      <!-- Heart system -->
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
    <!-- Main container for Math components -->
    <div class="box">
    <transition name="flip" mode="out-in">
    <math-start-screen v-if="state == 'start'" @Start="Start"></math-start-screen>
    <math-question v-else-if="state == 'question'" @success="Success" @error="Error" :settings="levels[level]"></math-question>
    <math-message v-else-if="state == 'message'" :type="message.type" :text="message.text" @Next="next"></math-message>
    <math-result v-else-if="state == 'result'" :stats="stats" @next="nextLevel" @again="Start" :level="level"></math-result>
    <div v-else>Unknown state</div>
    </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'math',
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
        multiplier : 1
      },
      points : {
        one : 100,
        two : 200,
        three : 300,
        four : 400
      },
      // Message template
      message: {
        type: '',
        text: ''
      },
      // Value of levels and number first level 0=1, 1=2 and etc
      questMax: 10,
      level: 0,
      // Levels settings
      levels: [
        {
          from: 10,
          to: 100,
          range: 65,
          variants: 3,
          variables: 3
        },
        {
          from: 100,
          to: 1000,
          range: 100,
          variants: 4,
          variables : 4
        },
        {
          from: 1000,
          to: 5000,
          range: 245,
          variants: 6,
          variables : 5
        },
        {
          from: 5000,
          to: 50000,
          range: 750,
          variants: 8,
          variables : 6
        }
      ]
    }
  },
  // This method needs for wathcing for user errors and if he've done 5 errors he'll lose
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
    // Calculate success and errors
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
        this.stats.score = (this.stats.score + this.points.one) * this.stats.multiplier;
      }
      else if (this.level === 1) {
        this.stats.score = (this.stats.score + this.points.two) * this.stats.multiplier;
      }
      else if (this.level === 2) {
        this.stats.score = (this.stats.score + this.points.three) * this.stats.multiplier;
      }
      else {
        this.stats.score = (this.stats.score + this.points.four) * this.stats.multiplier;
      }
      if (this.stats.multiplier < 5){
        this.stats.multiplier = this.stats.multiplier + 0.5;
      }
    },
    // If everything bad to switch to a new question and calculate errors and hearts
    Error(msg){
      this.state = 'message';
      this.message.text = msg;
      this.message.type = 'danger';
      this.stats.errors++;
      this.stats.lvl_errors++;
      this.stats.multiplier = 1;
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
      this.stats.multiplier = 1;
    }
  }
}
</script>

<style scoped>
  .info{
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid;
    background-color: #424242 !important;
  }
  .info h4{
    color: white !important;
    margin-top: 4px;
  }
  .multiplier{
    position: absolute;
    top: 15px;
    right: 450px;
    font-size: 22px;
    font-weight: bold;
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
  }
  .training{
    max-width: 900px;
    margin: 20px auto;
  }
  .training h2{
    text-align: center;
  }
  .box{
    margin: 15px 0;
  }
  .progress{
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: #7c7c7c;
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
  @media (max-width: 935px) {
    .training{
      margin-left: 20px;
      margin-right: 20px;
    }
    .training h1{
      font-size: 28px;
    }
    .multiplier{
      right: 420px;
    }
  }
  @media (max-width: 850px) {
    .multiplier{
      right: 400px;
    }
  }
  @media (max-width: 800px) {
    .multiplier{
      display: none;
    }
  }
  @media (max-width: 870px) {
    .training h1{
      font-size: 28px;
    }
  }
</style>
