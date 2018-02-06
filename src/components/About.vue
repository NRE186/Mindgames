<template>
  <v-app>
    <toolbar></toolbar>
    <v-content>
      <v-layout
        column
        wrap
        align-center
        row 
        justify-space-between
      >
        <div class="text-xs-center" style="margin-top: 20px;">
            <span class="authors">Авторы</span>
        </div>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4 lg4 class="left">
                <v-card class="elevation-5" color="indigo accent-3">
                  <v-card-media src="/src/assets/web.jpg" height="300px">
                  </v-card-media>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Web_Developer(Alex Prokofev)</div>
                  </v-card-title>
                  <v-card-text>
                    Front-end and Backend Developer.
                    Редактор и создатель вопросов по: Информатике, Программированию, Математике
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs12 md4 lg4 class="right">
                <v-card class="elevation-5" color="indigo accent-3">
                  <v-card-media src="/src/assets/Joshua.jpg" height="300px">
                  </v-card-media>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Joshua Graham</div>
                  </v-card-title>
                  <v-card-text>
                    Редактор и создатель вопросов по: Истории, Литературе, Русскому языку, Обществознанию.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>


<script>
export default {
  name : 'about',
    data () {
      return {
      }
    }
}
</script>

<style scoped>
  .authors{
      font-size: 26px;
  }
  .card{
    border-radius: 50px;
  }
  .card__text{
      text-align: center;
      padding-bottom: 35px;
      font-size: 16px;
  }
/*   .left{
    margin-right: 300px;
    margin-left: 85px;
  }
  .right{
    margin-left: 145px;
  }
  @media (max-width: 1550px) {
      .left{
        margin-right: 0;
        margin-left: 40px;
      }
      .right{
        margin-left:330px;
      }
   }
     @media (max-width: 1260px) {
      .left{
        margin-right: 0;
        margin-left: 0;
      }
      .right{
        margin-left:200px;
      }
   } */
</style>
