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
      <span class="s_title">{{subject}}</span>
      <v-flex xs12>
    <v-data-table
      v-bind:headers="headers"
      :items="items"
      class="elevation-1"
      :rows-per-page-items="rows"
    >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.place }}</td>
      <td class="text-xs-right">{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.score }}</td>
      <td class="text-xs-right">{{ props.item.time }}</td>
      <td class="text-xs-right">{{ props.item.date }}</td>
    </template>
  </v-data-table>
      </v-flex>
        </v-layout>
      </v-content>
  </v-app>
</template>

<script>
export default {
  name : 'records',
  data () {
      return {
        subject: 'Математика',
        rows:[15, 30, 60, 90, 120, 150, { text: "Все", value: -1 }],
        headers: [
          {
            text: 'Место',
            align: 'left',
            value: 'place'
          },
          {
            text: 'Имя пользователя',
            sortable: false,
            value: 'name'
          },
          { text: 'Очки(очков)', value: 'score' },
          { text: 'Время(минут)', value: 'time' },
          { text: 'Дата(дд.мм)', value: 'date' },
        ],
        items: [
          {
            value: false,
            place: 3,
            name: 'Joshua Graham',
            score: 15000,
            time: 17,
            date: 30.01,
          },
          {
            place: 4,              
            value: false,
            name: '234124',
            score: 15595,
            time: 30,
            date: 24.01,
          },
          {
            place: 5,              
            value: false,
            name: 'Ivanchik',
            score: 1595,
            time: 22,
            date: 24.01,
          },
          {
            place: 6,              
            value: false,
            name: 'Romeo',
            score: 155,
            time: 8,
            date: 24.01,
          },
          {
            place: 2,              
            value: false,
            name: 'Mr.Zucker',
            score: 195,
            time: 5,
            date: 24.01,
          },
          {
            place: 7,              
            value: false,
            name: 'Sosok_Mamonta',
            score: 1595,
            time: 15,
            date: 24.01,
          },
          {
            place: 8,              
            value: false,
            name: 'KakTyc',
            score: 15595,
            time: 16,
            date: 24.01,
          },
          {
            place: 1,
            value: false,
            name: 'Web_Developer186',
            score: 150595,
            time: 10,
            date: 24.01,
          },
          {
            value: false,
            place: 3,
            name: 'Joshua Graham',
            score: 15000,
            time: 17,
            date: 30.01,
          },
          {
            place: 4,              
            value: false,
            name: '234124',
            score: 15595,
            time: 30,
            date: 24.01,
          },
          {
            place: 5,              
            value: false,
            name: 'Ivanchik',
            score: 1595,
            time: 22,
            date: 24.01,
          },
          {
            place: 6,              
            value: false,
            name: 'Romeo',
            score: 155,
            time: 8,
            date: 24.01,
          },
          {
            place: 2,              
            value: false,
            name: 'Mr.Zucker',
            score: 195,
            time: 5,
            date: 24.01,
          },
          {
            place: 7,              
            value: false,
            name: 'Sosok_Mamonta',
            score: 1595,
            time: 15,
            date: 24.01,
          },
          {
            place: 8,              
            value: false,
            name: 'KakTyc',
            score: 15595,
            time: 16,
            date: 24.01,
          },
          {
            place: 1,
            value: false,
            name: 'Web_Developer186',
            score: 150595,
            time: 10,
            date: 24.01,
          },
          {
            value: false,
            place: 3,
            name: 'Joshua Graham',
            score: 15000,
            time: 17,
            date: 30.01,
          },
          {
            place: 4,              
            value: false,
            name: '234124',
            score: 15595,
            time: 30,
            date: 24.01,
          },
          {
            place: 5,              
            value: false,
            name: 'Ivanchik',
            score: 1595,
            time: 22,
            date: 24.01,
          },
          {
            place: 6,              
            value: false,
            name: 'Romeo',
            score: 155,
            time: 8,
            date: 24.01,
          },
          {
            place: 2,              
            value: false,
            name: 'Mr.Zucker',
            score: 195,
            time: 5,
            date: 24.01,
          },
          {
            place: 7,              
            value: false,
            name: 'Sosok_Mamonta',
            score: 1595,
            time: 15,
            date: 24.01,
          },
          {
            place: 8,              
            value: false,
            name: 'KakTyc',
            score: 15595,
            time: 16,
            date: 24.01,
          },
          {
            place: 1,
            value: false,
            name: 'Web_Developer186',
            score: 150595,
            time: 10,
            date: 24.01,
          },
          {
            value: false,
            place: 3,
            name: 'Joshua Graham',
            score: 15000,
            time: 17,
            date: 30.01,
          },
          {
            place: 4,              
            value: false,
            name: '234124',
            score: 15595,
            time: 30,
            date: 24.01,
          },
          {
            place: 5,              
            value: false,
            name: 'Ivanchik',
            score: 1595,
            time: 22,
            date: 24.01,
          },
          {
            place: 6,              
            value: false,
            name: 'Romeo',
            score: 155,
            time: 8,
            date: 24.01,
          },
          {
            place: 2,              
            value: false,
            name: 'Mr.Zucker',
            score: 195,
            time: 5,
            date: 24.01,
          },
          {
            place: 7,              
            value: false,
            name: 'Sosok_Mamonta',
            score: 1595,
            time: 15,
            date: 24.01,
          },
          {
            place: 8,              
            value: false,
            name: 'KakTyc',
            score: 15595,
            time: 16,
            date: 24.01,
          },
          {
            place: 1,
            value: false,
            name: 'Web_Developer186',
            score: 150595,
            time: 10,
            date: 24.01,
          }
        ]
      }
    }
}
</script>

<style scoped>
.s_title{
  font-size: 24px;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>

