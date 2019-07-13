<template>
  <div id="single-bage">
      <button @click="show()">click</button>
  </div>
</template>

<script>
import {db} from '../firebase';
export default {
    data(){
        return{
           products:[]
        }
    },
    methods:{
        show(){
            console.log(this.products)
        },
    firebase() {
      return { 
        products: {
            source: db.ref('jobs/' + this.$route.params.id),
            asObject: true
        }
      }
    }

    },


}
</script>
