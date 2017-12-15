<template>
  <div class="alert" :class="'alert-' + type">
    <h3 alert-heading>{{ text }}</h3>
    <hr>
    <button class="btn btn-primary" @click="$emit('onNext')">Следующий вопрос</button>
  </div>
</template>

<script>
  export default{
    props: ['type', 'text']
  }
</script>

<style scoped>
  .alert{
    padding-top: 30px;
    text-align: center;
  }
  .btn{
    margin-top: 15px; 
    margin-bottom: 15px; 
  }
</style>
