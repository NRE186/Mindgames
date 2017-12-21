<template>
  <div class="alert alert-info">
    <h3>Правильные ответы : {{ stats.success }}</h3>
    <h3>Неправильные ответы : {{ stats.error }}</h3>
    <h3>Очки : {{ stats.score }}</h3>
    <hr>
    <button class="btn btn-outline-primary" @click="$emit('again')"><i class="fas fa-redo"></i><span class="left">Начать сначала</span></button>
    <button class="btn btn-outline-success" @click="$emit('next')" v-if="this.level < 3" style="float:right"><span class="right">Новый уровень</span><i class="fas fa-caret-right"></i></button>
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
  .left{
    padding-left: 10px; 
  }
  .right{
    padding-right: 10px;
  }
  .svg-inline--fa.fa-w-6 {
    width: .375em;
    font-size: 20px;
  }
  .btn{
    margin: 5px;
  }
</style>
