<template>
    <div class="checkout">

      
    <navpar/>
        
        <div class="container mt-5 pt-5">
            <div class="row">
                <div class="col=md=9">
                    <h4 class="py-4">checkout page </h4>
                    <ul>
                        <!-- <li v-for="item in this.$store.state.cart" class="media m-5" >
                            <div class="img" :style="{backgroundImage: 'url(' + item.productImage + ')' }"></div>
                            <div class="media-body">
                            <h5 class="mt-0">{{item.productName}}</h5>
                            
                            <p class="mt-0">{{item.productPrice+ ' EGP'}}</p>
                            <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                             <button  class="btn btn-danger" @click="$store.commit('removeFromCart',item)">Delete</button>
                            </div>
                        </li> -->


  <section class="card" v-for="(item, i) in this.$store.state.cart" :key = "i">
        <h3 style="margin-bottom:20px">{{item.productName}}</h3>
        <div class="img" :style="{ backgroundImage: 'url(' + item.productImage + ')' }"></div>
        <p>QUANTITY: {{item.productQuantity}}</p>
        <h3 style="color:#006fcc; display:inline-block; margin-left: 35px">{{ item.productPrice + " EGP"}}</h3>
        <!--  -->
        <button @click="item.productQuantity += 1; addQty(i ,item.productQuantity)" color="primary">+1</button>
        <button v-if="item.productQuantity > 1" @click="(item.productQuantity > 1) ? item.productQuantity -= 1 : ''" color="primary">-1</button>
        <!--  -->
        <hr>
 <button  class="btn btn-danger" @click="$store.commit('removeFromCart',item)">Delete</button>

 <h2 style="color:#006fcc"> {{total}} </h2>
  </section>

                    </ul>
                </div>
                <div class="col-md=3">

                </div>
            </div>
        </div>



    </div>
</template>

<script>
export default {
    data() {
      return {
         cart: [],
      }
    },
  computed: {
    count: function (){
     return this.$store.state.cart.reduce(function (n, cart) {
        return cart.productQuantity + n;
      }, 0);
    },
    total: function(){
      return this.$store.state.cart.reduce(function(n,cart){
        return cart.productPrice * cart.productQuantity + n;
      }, 0).toFixed(2);
    }
  },
  methods:{
      addQty(i, id){
        console.log(this.$store.state.cart)
      }
  }
}
</script>


<style scoped >

.img {

    width: 200px;
    height: 200px;
    background-size: cover ;
    margin-right: 35px
}

/* red btn */
.btn.btn-danger{
    font-size: 16px;
    border-radius: 30px;
    padding: 10px 30px;
    border-width: 2px;
    background: #ff7979;
    border-color: #ff7979;
    color: #fff;
    box-shadow: 0 4px 20px -5px rgb(235, 77, 75);
    float:right;
    /* margin-left:100px */
}
.btn.btn-danger:hover{
color: #000;
background: #fff;
transition: 0.36s
}
/* red btn */
</style>