<template>
    <div class="checkOut">
    <Login/>

    <navpar/>


    <!-- <div class="container"> -->
    <div class=" mt-5 pt-5">
        <div class="row">
            <div>
                <!-- tabs -->
                    <b-card  no-body>
                    <b-tabs v-model="tabIndex" card id="taps">
                        <!-- tabs 1-->
                        <b-tab title="SHIPPING" :title-link-class="linkClass(0)">

                        <b-row>
                            <b-col sm="6">
                            <b-form-input placeholder="Full name"></b-form-input>
                            </b-col>
                            <b-col sm="6">
                            <b-form-input placeholder="Phone"></b-form-input>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col sm="6">
                            <b-form-input placeholder="Full name"></b-form-input>
                            </b-col>
                            <b-col sm="6">
                            <b-form-input placeholder="Phone"></b-form-input>
                            </b-col>
                        </b-row>
                        </b-tab>
                        <!-- tabs 1-->
                        <!-- tabs 2-->
                        <b-tab title="PAYMENT" :title-link-class="linkClass(1)">
                            PAYMENT METHOD

                        <b-row>
                            <b-col sm="6">
                            <b-form-input placeholder="Full name"></b-form-input>
                            </b-col>
                            <b-col sm="6">
                            <b-form-input placeholder="Phone"></b-form-input>
                            </b-col>
                        </b-row>

                        <b-form-group>
                        <b-form-radio v-model="selected" name="some-radios" value="A">Credit or Debit Cards</b-form-radio>
                        <b-form-radio v-model="selected" name="some-radios" value="B">Cash on delivery (COD)</b-form-radio>
                        </b-form-group>
                         <b-button class="btn btn-primary">Place Order</b-button>
                        </b-tab>
                        <!-- tabs 2-->
                    </b-tabs>
                    </b-card>
                    <!-- tabs -->
            </div>

    <div v-if="totalPrice" class="col-md=3 total">
        <span>SHOPPING CART</span> <router-link to="/cart" class="btn btn-info block">Back to Cart</router-link>
        <ul>
        <li v-for="(item, i) in this.$store.state.cart" :key="i" class="media m-5 liItem">
        <div class="img" :style="{ backgroundImage: 'url(' + item.productImage + ')'  }"></div>
        <div class="media-body">
        <h5 class="mt-0">{{item.productName}}</h5>
        <h5 style="color:#006fcc; display:inline-block; margin-left: 35px">{{ item.productPrice + " EGP"}}</h5>
        <p class="mt-0">Quantity : {{item.productQuantity }}</p>
        </div>
        </li>

        </ul>

        <hr>
            <div class="block">
                    <span class="span-size">item(s) :</span>
                    <h6 class="totalTitile">{{ total + " EGP"}}</h6>
            </div>
            <div class="block">
                    <span class="span-size">shipping + :</span>
                    <h6 class="totalTitile">30 EGP</h6>
            </div>
            <div class="block">
                    <span class="span-size">Total </span>
                    <h6 class="totalTitile">{{ totalWithSiping + " EGP" }}</h6>
            </div>

            </div>


    <div v-else="emptyimg" class="site-blocks-cover">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-12" style="position: relative;" data-aos="fade-up">
                    <b-row >
                        <b-col sm="6">
                            <div class=" content">
                                <h1>your cart is empty <br> :(</h1>
                                <!-- <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p> -->
                                <div>
                                    <!-- <a href="#" class="btn btn-primary mr-2 mb-2">Get Started</a> -->
                                </div>
                            </div>
                        </b-col>
                        <b-col sm="6">
                            <!-- <img src="https://images.pexels.com/photos/296916/pexels-photo-296916.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Image" class="img-fluid img-absolute"> -->
                        </b-col>
                    </b-row>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>
</div>
 <!-- </div> -->
</template>

<script>
export default {
    data() {
      return {
         cart: [],
         totalPrice: false,
         emptyimg: false,
         tabIndex: 0,
         selected: '',
         shipping: '30'
      }
    },
    computed :{
        total: function(){
            return this.$store.state.cart.reduce(function(n,cart){
            return cart.productPrice * cart.productQuantity + n;
            }, 0).toFixed(0);
        },

        totalWithSiping: function(){

            let price = parseInt (this.total)
            let shipping = 30
           return price + shipping
        },
    },created(){
        console.log(this.total)
         console.log(this.$store.state.cart)

         if(this.$store.state.cart.length > 0){
         this.totalPrice = true

         }else{
         this.totalPrice = false

         }

  },methods:{
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      }
  }
}
</script>


<style scoped>

.span-size{
    font-size: 15px !important
}
#taps{
    width: 70vw;
    margin-left: 30px
}
.totalTitile{
color:#006fcc; display:inline-block; margin-left: 50px;
}
.block{
  display: block;
  width: 100%;
  margin-top: 35px
}
.total{
  background: #fbfbfb;
  text-align: center;
  right: 30px;
  position: absolute;
  /* margin-left: 200px; */
  width: 20vw;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.total span{
  font-size: 30px
}
.img{
    width: 50px;
    height: 50px;
    background-size: cover;
    background-position: center center
}

/* green btn */
.btn.btn-primary{
    font-size: 16px;
    border-radius: 30px;
    padding: 10px 30px;
    border-width: 2px;
    background: #00d2b5;
    border-color: #00d2b5;
    color: #fff;
    box-shadow: 0 4px 20px -5px rgba(0, 210, 181, 0.4);
}
.btn.btn-primary:hover{
color: #000;
background: #fff;
transition: 0.36s
}
/* green btn */

.site-blocks-cover, .site-blocks-cover > .container > .row {
    min-height: 400px;
    height: calc(80vh); 
    }

  .site-blocks-cover.inner-page-cover, .site-blocks-cover.inner-page-cover > .container > .row {
    min-height: 400px;
    height: calc(20vh); }
  .site-blocks-cover h1 {
    font-size: 3.5rem;
    font-weight: 400;
    color: #000;
    font-weight: 900; }
    @media (max-width: 991.98px) {
      .site-blocks-cover h1 {
        font-size: 2rem; } }
  .site-blocks-cover p {
    color: #6c757d;
    font-size: 1rem;
    font-weight: 300; }
  .site-blocks-cover .intro-text {
    font-size: 16px;
    line-height: 1.5; }
  @media (max-width: 991.98px) {
    .site-blocks-cover .display-1 {
      font-size: 3rem; } }
.content{
    /* margin: auto; */
    display: inline-block;
    margin-top: 100px
}
.img-fluid{
display: inline-block;
}
</style>
