<template>
  <v-alert :color=type :icon=icon value="true">
      <h2>{{ text }}</h2>
    <v-btn color="teal darkern-4"  @click="$emit('Next')">Следующий вопрос</v-btn>
    </v-alert>
</template>

<script>
  export default{
    props: ['type', 'text', 'icon']
  }
</script>

<style scoped>
  .alert{
    padding-top: 30px;
    text-align: center;
  }
  .btn{
    margin-top: 50px;
  }
</style>
