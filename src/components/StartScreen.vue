<template>
  <div class="alert alert-secondary">
      <h3>Готов?</h3>
      <button class="btn btn-success" @click="$emit('onStart')">Начать</button>
  </div>
</template>

<script>
</script>

<style scoped>
    .alert{
        text-align: center;
    }
    h3, .btn{
        margin: 20px auto;
    }
</style>
