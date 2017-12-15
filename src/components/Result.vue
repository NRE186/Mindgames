<template>
  <div class="alert alert-info">
    <h3>Правильные ответы : {{ stats.success }}</h3>
    <h3>Неправильные ответы : {{ stats.error }}</h3>
    <hr>
    <button class="btn btn-primary" @click="$emit('repeat')">Повторить этот уровень</button>
    <button class="btn btn-primary" @click="$emit('next')" v-if="this.level < 2">Новый уровень</button>
    <button class="btn btn-primary" @click="$emit('again')">Начать сначала</button>
  </div>
</template>

<script>
  export default{
    props: ['stats', 'level']
  }
</script>

<style scoped>
  a{
    font-size: 24px;
  }
  .alert{
    padding-top: 20px;
  }
  .btn{
    text-align: center;
    margin-left: 20px; 
    margin-right: 20px; 
  }
</style>
