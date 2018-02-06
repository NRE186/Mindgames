<template>
    <v-alert color="teal darken-4" :value="true">
      <h2>Готов?</h2>
      <v-btn round color="indigo"  @click="$emit('Start')">Начать</v-btn>
    </v-alert>
</template>

<script>
</script>

<style scoped>
    .alert{
        text-align: center;
    }
    h2, .btn{
        margin: 20px auto;
    }
    .btn{
        min-width: 10vw;
    }
</style>
