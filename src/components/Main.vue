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
      >
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4 lg3>
                <v-card class="elevation-10">
                  <v-card-media src="/src/assets/math.jpg" height="300px">
                  </v-card-media>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Математика</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                  <v-card-actions>
                    <router-link to="/math"><v-btn color="green" class="mb-4" dark>Начать</v-btn></router-link>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 lg3>
                <v-card class="elevation-10 ">
                  <v-card-media src="/src/assets/1.png" height="300px">
                  </v-card-media>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Программирование</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                  <v-card-actions >
                    <router-link to="/programming"><v-btn color="green" class="mb-4" dark>Начать</v-btn></router-link>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 lg3>
                <v-card class="elevation-10 ">
                  <v-card-media src="/src/assets/istoriyz.png" height="300px">
                  </v-card-media>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">История</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                  <v-card-actions >
                    <router-link to="/history"><v-btn color="green" class="mb-4" dark>Начать</v-btn></router-link>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 lg3>
                <v-card class="elevation-10 ">
                  <v-card-media src="/src/assets/informatika.jpg" height="300px">
                  </v-card-media>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Информатика</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                  <v-card-actions >
                    <router-link to="/ict"><v-btn color="green" class="mb-4" dark>Начать</v-btn></router-link>
                  </v-card-actions>
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
  name : 'main_screen',
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
</style>
