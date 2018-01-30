<template>
<div>
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
      <v-layout row justify-center>
    <v-dialog v-model="register" persistent max-width="500px">
        <v-btn slot="activator" class="btn_m">
          <v-icon class="i_m">fa-user-plus</v-icon>
          Регистрация
        </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Регистрация</span>
          <v-spacer></v-spacer>
          <v-btn color="red accent-4" flat @click.native="register = false" class="right"><v-icon>fa-times</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm12 md12>
                <v-text-field label="Никнейм" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Пароль" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Повторите пароль" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*поля обязательные к заполнению</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="register = false">Зарегистрироваться</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>

  <v-layout row justify-center>
    <v-dialog v-model="login" persistent max-width="500px">
        <v-btn slot="activator" class="btn_m">
          <v-icon class="i_m">fa-sign-in-alt</v-icon>
          Вход
        </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Вход </span>
          <v-spacer></v-spacer>
            <v-btn color="red accent-4" flat @click.native="login = false" class="right"><v-icon>fa-times</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Email"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="login = false">Войти на сайт</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
      </v-toolbar-items>
    </v-toolbar>
</div>
</template>

<script>
export default {
  name : 'toolbar',
    data () {
      return {
        drawer: false,
        register: false,
        login: false,
        menuItems: [
          {icon: 'fa-address-book', title: 'О нас', link: '/about'},
          {icon: 'fa-list-ul', title: 'Список рекордов', link: '/records'},
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
  small{
    color: red;
  }
  .i_m{
    margin-right: 15px;
  }
  .btn_m{
    box-shadow: none;
    background-color: transparent !important;
    color: white;
    height: 50px;
  }
  .right{
    padding-left: 50px;
  }
  .right svg{
    font-size: 18px;
  }
</style>