<template>
  <v-app>
    <v-navigation-drawer
      temporary
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
        align-center
        row 
        justify-space-between
      >
        <div class="text-xs-center" style="margin-top: 20px;">
            <span class="authors">Авторы</span>
        </div>
        <v-flex xs12>
          <v-container grid-list-xl fluid>
            <v-layout row wrap align-center>
              <v-flex xs4 md4 lg4 class="left">
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
              <v-flex xs4 md4 lg4 class="right">
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
        ]
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
  .left{
    margin-right: 300px;
    margin-left: 85px;
  }
  .right{
    margin-left: 145px;
  }
</style>
