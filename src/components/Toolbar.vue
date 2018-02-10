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
        <v-btn class="auth" to="/auth" style="cursor: pointer">
        <v-icon style="margin-right:15px;">fa-user</v-icon> Регистрация / Авторизация
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
</div>
</template>

<script>
import AuthService from '../services/AuthService'
export default {
  name: "toolbar",
  data() {
    return {
      drawer: false,
      menuItems: [
        { icon: "fa-address-book", title: "О нас", link: "/about" },
        { icon: "fa-list-ul", title: "Список рекордов", link: "/records" },
        { icon: "fa-user", title: "Регистрация/Авторизация", link: "/auth" },
      ]
    }
  }
}
</script>

<style scoped>
.auth{
  background-color: transparent !important;
  box-shadow: none !important;
  margin-right: -16px;
  color: white;
}
a {
  color: white !important;
}
.toolbar__content .router-link-active {
  font-size: large;
  color: white !important;
}
.toolbar__side-icon {
  color: white !important;
}
aside{
  width: 275px !important;
}
small {
  color: red;
}
.i_m {
  margin-right: 15px;
}
.btn_m {
  box-shadow: none;
  background-color: transparent !important;
  color: white;
  height: 50px;
}
.right {
  padding-left: 50px;
}
.right svg {
  font-size: 18px;
}
div.btn__content::after{
  content: none;
}
</style>
