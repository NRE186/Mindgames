<template>
  <div class="alert alert-primary">
    <h2 v-if="this.level == 0">Уровень 1 завершён</h2>
    <h2 v-else-if="this.level == 1">Уровень 2 завершён</h2>
    <h2 v-else-if="this.level == 2">Уровень 3 завершён</h2>
    <h2 v-else-if="this.level == 3">Уровень 4 завершён</h2>
    <hr>
    <h3>Правильные ответы  : {{ stats.lvl_success }}</h3>
    <h3>Неправильные ответы  : {{ stats.lvl_errors }}</h3>
    <button class="btn btn-outline-primary" @click="$emit('again')"><i class="fas fa-redo"></i><span class="left">Начать сначала</span></button>
    <button class="btn btn-outline-success" @click="$emit('next')" v-if="this.hide === false" style="float:right"><span class="right">Новый уровень</span><i class="fas fa-caret-right"></i></button>
  </div>
</template>

<script>
  export default{
    props: ['stats', 'level'],
    data(){
      return{
        hide : isHide(this.stats.gameOver, this.level > 3)
      }
    }
  }
  function isHide(end, lvl) {
    if (end === true || lvl > 3){
      return true;
    }
    else{
      return false;
    }
  }
</script>

<style scoped>
  h2{
    text-align: center;
  }
  hr{
    margin-bottom: 20px;
  }
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
    margin-top: 15px;
  }
  @media (max-width: 870px) {
    .alert h2{
      font-size: 26px;
    }
    .alert h3{
      font-size: 22px;
    }
  }
</style>
