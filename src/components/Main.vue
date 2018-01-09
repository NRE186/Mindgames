<template>
  <div class="wrapper">
    <div class="head">
      <div class="left">
        <span>Игры разумов</span>
      </div>
      <div class="right">
        <ul>
          <li>
            <router-link to="records">Рекорды</router-link>
          </li>
          <li>
            <router-link to="login">Войти</router-link>
          </li>
          <li>
            <router-link to="register">Регистрация</router-link>
          </li>
        </ul>
      </div>
    </div>
    <hr>
    <div class="cards">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../../assets/math.jpg" alt="Math">
      <div class="card-body">
        <hr>
        <h5 class="card-title">Математика</h5>
        <p class="card-text">Узнай насколько ты силён в математике</p>
        <button type="button" class="btn btn-outline-info"><router-link to="math">Начать</router-link></button>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../../assets/informatika.jpg" alt="ICT">
      <div class="card-body">
        <hr>
        <h5 class="card-title">Информатика</h5>
        <p class="card-text">Узнай насколько ты силён в информатике</p>
        <button type="button" class="btn btn-outline-info"><router-link to="ict">Начать</router-link></button>
      </div>
    </div>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="../../assets/istoriyz.png" alt="History">
        <div class="card-body">
          <hr>
          <h5 class="card-title">История</h5>
          <p class="card-text">Узнай насколько ты силён в истории</p>
          <button type="button" class="btn btn-outline-info"><router-link to="history">Начать</router-link></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'main_screen'
}
</script>

<style scoped>
  hr{
    margin: 0;
  }
  li{
    list-style-type: none;
    display: inline;
  }
  a{
    text-decoration: none !important;
  }
  p{
    margin-top: 20px !important;
  }
  .wrapper{
    margin: 20px auto;
    max-width: 1200px;
  }
  .head{
    margin-top: 10px;
    max-height: 80px;
    font-size: 24px;
    display: flex;
  }
  .right{
    margin-left: 50%;
  }
  .right li{
    padding-right: 30px;
  }
  .cards{
    display: flex;
    justify-content: space-around;
  }
  .cards a{
    color: green !important;
  }
  .card{
    margin-top: 30px;
    width: 22rem !important;;
  }
  .card-img-top {
    min-height: 357px;
  }
  .card-body{
    text-align: center;
  }
  .card-title{
    margin-top: 25px;
  }
  .btn{
    margin-top: 15px;
    width: 70%;
  }
</style>

