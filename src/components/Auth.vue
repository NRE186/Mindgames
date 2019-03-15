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
            <h1>Страница регистрации / авторизации</h1>
          </v-layout>
      </v-content>
  </v-app>
</template>

<script>
import AuthService from '../services/AuthService'
  export default {
    name: 'Auth',
    data () {
      return {
        posts: []
      }
    },
    methods: {
      async getData () {
        const response = await AuthService.auth()
        this.posts = response.data
      }
    },
    mounted () {
      this.getData()
    }
  }
</script>

