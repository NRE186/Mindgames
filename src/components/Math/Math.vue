<template>
  <v-app>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
      dark
    >
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left class="purple darken-4">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <router-link to="/" tag="span" style="cursor: pointer" class="ml-3">Mindgames</router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in toolbar"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-layout
        column
        wrap
      >
        <v-flex xs12>
          <v-container grid-list-xl class="train">
                <v-alert  color="info" value="true">
                  <h4>Очки : {{ this.stats.score }}</h4>
                  <span class="multiplier">x{{ this.stats.multiplier }}</span>
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
                  </h4></v-alert>
                <v-progress-linear v-model="progress.width" height="12" color="success"></v-progress-linear>
                <div class="box">
                  <transition name="flip" mode="out-in">
                    <math-start-screen v-if="state == 'start'" @Start="Start"></math-start-screen>
                    <math-question v-else-if="state == 'question'" @success="Success" @error="Error" :settings="levels[level]"></math-question>
                    <math-message v-else-if="state == 'message'" :type="message.type" :icon="message.icon" :text="message.text" @Next="next"></math-message>
                    <math-result v-else-if="state == 'result'" :stats="stats" @next="nextLevel" @again="Start" :level="level"></math-result>
                    <div v-else>Unknown state</div>
                  </transition>
                </div>
          </v-container>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'math',
  data() {
    return {
      drawer: false,
      menuItems: [
        {icon: 'fa-address-book', title: 'О нас', link: '/about'},
        {icon: 'fa-list-ul', title: 'Список рекордов', link: '/records'},
        {icon: 'fa-user-plus', title: 'Регистрация', link: '/register'},
        {icon: 'fa-sign-in-alt', title: 'Вход', link: '/login'}
      ],
      toolbar: [
        {icon: 'fa-user-plus', title: 'Регистрация', link: '/register'},
        {icon: 'fa-sign-in-alt', title: 'Вход', link: '/login'}
      ],
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
        text: '',
        icon: ''
      },
      // Value of levels and number first level 0=1, 1=2 and etc
      questMax: 3,
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
        width: (this.questDone / this.questMax * 100)
      };
    }
  },
  methods: {
    // Start
    Start(){
      this.state = 'question';
      this.stats.success = 0;
      this.stats.errors = 0;
      this.stats.lvl_success = 0;
      this.stats.lvl_errors = 0;
      this.stats.score = 0;
      this.stats.multiplier = 1;
      this.level = 0;
      this.progress.width = 0;
    },
    // If everything good to switch to a new question and final score
    Success: function () {
      this.state = 'message';
      this.message.text = 'Правильный ответ';
      this.message.type = 'success';
      this.message.icon = 'check_circle';
      this.stats.success++;
      this.stats.lvl_success++;
      if (this.level === 0) {
        this.stats.score = this.stats.score + (this.points.one * this.stats.multiplier);
      }
      else if (this.level === 1) {
        this.stats.score = (this.stats.score + (this.points.two) * this.stats.multiplier);
      }
      else if (this.level === 2) {
        this.stats.score = (this.stats.score + (this.points.three) * this.stats.multiplier);
      }
      else {
        this.stats.score = (this.stats.score + (this.points.four) * this.stats.multiplier);
      }
      if (this.stats.multiplier < 5){
        this.stats.multiplier = this.stats.multiplier + 0.5;
      }
    },
    // If everything bad to switch to a new question and calculate errors and hearts
    Error(msg){
      this.state = 'message';
      this.message.text = msg;
      this.message.type = 'error';
      this.message.icon = 'warning'
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
      this.progress.width = 0;
    }
  }
}
</script>

<style scoped>
  a{
    color: white !important;
  }
  .toolbar__content .router-link-active{
    font-size: large;
    color: white !important;
  }
  .toolbar__side-icon {
    color: white !important;
  }
  .train{
    width: 50vw;
    margin-top: 4vh;
  }
  .progress-linear__background{
    border-radius: 15px;
  }

  .info{
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid;
  }
  .info h4{
    color: white !important;
    margin-top: 4px;
    font-size: 19px;
  }
  .multiplier{
    position: absolute;
    top: 17px;
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
  .box{
    margin: 15px 0;
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
   @media (max-width: 1300px) {
      .multiplier{
        display: none;
      }
      .train{
        width: 65vw;
      }
   }
      @media (max-width: 1000px) {
      .train{
        width: 70vw;
      }
   }
      @media (max-width: 770px) {
      .train{
        width: 75vw;
      }
   }
      @media (max-width: 630px) {
      .train{
        width: 80vw;
      }
   }
      @media (max-width: 550px) {
      .train{
        width: 85vw;
      }
   }
      @media (max-width: 510px) {
      .train{
        width: 90vw;
      }
   }
      @media (max-width: 430px) {
      .train{
        width: 100vw;
      }
   } 
</style>
