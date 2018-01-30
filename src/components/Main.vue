<template>
  <v-app>
    <toolbar></toolbar>
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
                    <v-spacer></v-spacer>
                    <router-link to="/math"><v-btn color="green btn_a" class="mb-4" dark outline>Начать</v-btn></router-link>
                    <v-spacer></v-spacer>
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
                    <v-spacer></v-spacer>
                    <v-btn color="grey darken-3" class="mb-4 btn_d" dark>В разработке</v-btn>
                    <v-spacer></v-spacer>
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
                    <v-spacer></v-spacer>
                    <v-btn color="grey darken-3" class="mb-4 btn_d" dark>В разработке</v-btn>
                    <v-spacer></v-spacer>
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
                    <v-spacer></v-spacer>
                    <v-btn color="grey darken-3" class="mb-4 btn_d" dark>В разработке</v-btn>
                    <v-spacer></v-spacer>
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
      }
    }
}
</script>

<style scoped>
a{
  color: transparent !important;
}
.card__text{
      margin-bottom: 20px;
}
</style>
