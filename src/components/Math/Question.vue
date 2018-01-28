<template>
  <v-alert color="green darken-3" :value="true">
      <h3>{{x}} + {{y}} = ?</h3>
      <hr>
      <div class="buttons">
          <v-btn round color="light-blue accent-3" v-for="number in answers" :key="number" @click="Answer(number)">{{number}}</v-btn>
      </div>
    </v-alert>
</template>

<script>
    export default{
        props: ['settings'],
      data: function () {
        return {
          // Calculate x and y
          x: Randomize(this.settings.from, this.settings.to),
          y: Randomize(this.settings.from, this.settings.to)
        }
      },
        computed: {
            // Conservation right answer for next work
            good(){
                return this.x + this.y;
            },
            // Calculate other answers
            answers(){
              var res = [this.good];
              while(res.length < this.settings.variants){
                    let num = Randomize(this.good - this.settings.range, this.good + this.settings.range);
                    if(res.indexOf(num) === -1){
                        res.push(num);
                    }
                }
                return res.sort(function(){
                    return Math.random() > 0.45;
                });
            }
        },
        methods: {
            // Right or Not
          Answer: function (num) {
            if (num === this.good) {
              this.$emit('success');
            }
            else {
              this.$emit('error', `${this.x} + ${this.y} = ${this.good}`);
            }
          }
        }
    }
    // Function for calculation numbers
    /**
     * @return {number}
     */
    function Randomize(min,max){
        let dif = max-min;
        return Math.floor(Math.random() * (dif + 1) + min);
    }
</script>

<style scoped>
    .alert{
        padding-top: 30px;
    }
    .buttons{
        display: flex;
        justify-content: space-around;
        padding-top: 25px;
    }
    .btn{
        width: 15%;
        margin-bottom: 15px;
        border-radius: 10px;
    }
    h3{
        text-align: center;
        margin-bottom: 20px;
        font-size: 20px;
    }
    @media (max-width: 640px) {
    .btn{
        width: 19vw;
    }
    .buttons{
        display: block;
    }
    .train{
       width: 100vw;
    }
  }
</style>
