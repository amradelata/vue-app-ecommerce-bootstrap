<template>
  <div class="card">
    <Login />

    <navpar />
    <div class="container">
      <div class="container mt-5 pt-5">
        <div>
          <div>
            <!-- <h4 class="py-4">card page </h4> -->
            <ul class="itms">
              <li v-for="(item, i) in this.$store.state.cart" :key="i" class="itme">
                <div class="img" :style="{ backgroundImage: 'url(' + item.productImage + ')'  }"></div>
                <div class="myCartBtn">
                  <div>
                    <h5 class="mt-0">{{item.productName}}</h5>
                    <h3 style="color:#006fcc; ">{{ item.productPrice + " EGP"}}</h3>
                    <p class="mt-0">Quantity : {{item.productQuantity }}</p>

                    <button
                      class="btn btn-danger"
                      @click="hiedtotal(),$store.commit('removeFromCart',item)"
                    >Delete</button>
                    <button
                      class="btn btn-primary"
                      @click="item.productQuantity += 1; addQty(i ,item.productQuantity)"
                      color="primary"
                    >+1</button>
                    <button
                      class="btn btn-primary"
                      v-if="item.productQuantity > 1"
                      @click="(item.productQuantity > 1) ? item.productQuantity -= 1 : ''"
                      color="primary"
                    >-1</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div v-if="totalPrice" class="total">
            <span>Total price</span>
            <h3 class="totalTitile">{{ total + " EGP"}}</h3>
            <router-link to="/checkOut" class="btn btn-info checkOut">check out</router-link>
          </div>

          <div v-else="emptyimg" class="site-blocks-cover">
            <div class="container">
              <div class="row align-items-center justify-content-center">
                <div class="col-md-12" style="position: relative;" data-aos="fade-up">
                  <b-row>
                    <b-col sm="6">
                      <div class="content">
                        <h1>
                          your cart is empty and cold
                          <br />:(
                        </h1>
                        <router-link to="/shop" class="btn btn-info block">Go to Shop</router-link>
                        <!-- <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p> -->
                        <div>
                          <!-- <a href="#" class="btn btn-primary mr-2 mb-2">Get Started</a> -->
                        </div>
                      </div>
                    </b-col>
                    <b-col sm="6">
                      <img
                        src="https://images.pexels.com/photos/296916/pexels-photo-296916.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt="Image"
                        class="img-fluid img-absolute"
                      />
                    </b-col>
                  </b-row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <contact />

    <last />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      totalPrice: false,
      emptyimg: false
    };
  },
  computed: {
    count: function() {
      return this.$store.state.cart.reduce(function(n, cart) {
        return cart.productQuantity + n;
      }, 0);
    },
    total: function() {
      return this.$store.state.cart
        .reduce(function(n, cart) {
          return cart.productPrice * cart.productQuantity + n;
        }, 0)
        .toFixed(0);
    }
    // console.log("sdsadasfsa")
  },
  methods: {
    addQty(i, id) {
      console.log(i, id); // eslint-disable-line no-console
      console.log(this.$store.state.cart[i].productQuantity); // eslint-disable-line no-console
    },
    hiedtotal() {
      if (this.$store.state.cart.length > 1) {
        this.totalPrice = true;
        this.emptyimg = false;
      } else if ((this.$store.state.cart.length = 1)) {
        this.totalPrice = false;
        this.emptyimg = true;
      } else {
        console.log(this.$store.state.cart.length);
      }
    }
  },
  created() {
    console.log(this.$store.state.cart);

    if (this.$store.state.cart.length > 0) {
      this.totalPrice = true;
    } else {
      this.totalPrice = false;
    }
  }
};
</script>


<style scoped >
.checkOut {
  display: block;
}
li {
  margin-top: 20px;
}

.h-entry h2 a:hover {
  text-decoration: none;
}

.itms {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
.itme {
  flex-basis: calc(50% - 20px);
  /* margin: 10px; */
  /* margin-bottom: 20px; */
}
.h-entry img {
  margin-bottom: 30px;
}

.h-entry .meta {
  color: #b3b3b3;
  font-size: 14px;
}

.h-entry h2 {
  font-size: 30px;
  margin-bottom: 20px;
}
.content {
  font-size: 18px;
}
.img {
  width: 100;
  height: 200px;
  background-size: cover;
  background-position: center center;
  margin-bottom: 20px;
  /* background-repeat: no-repeat; */
}

a {
  color: #00d2b5;
  background-color: transparent;
  /* font-size: 30px; */
}
a:hover {
  color: #00d2b5;
  text-decoration: none;
}
@media screen and (max-width: 768px) {
  .itme {
    flex-basis: calc(100% - 20px);
    margin: 50px 0;
  }
}
.totalTitile {
  color: #006fcc;
  display: inline-block;
  margin-left: 50px;
}

.total {
  width: 100%;
  display: block;
  background: #fbfbfb;
  text-align: center;
  height: 200px;
  /* width:300px; */
  /* margin-left: 50px; */
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-top: 50px;
}
.total span {
  font-size: 30px;
}

/* red btn */
.btn.btn-danger {
  font-size: 16px;
  border-radius: 30px;
  padding: 10px 30px;
  border-width: 2px;
  background: #ff7979;
  border-color: #ff7979;
  color: #fff;
  box-shadow: 0 4px 20px -5px rgb(235, 77, 75);
  float: right;
  /* margin-left:10px */
}
.btn.btn-danger:hover {
  color: #000;
  background: #fff;
  transition: 0.36s;
}
/* red btn */

.btn.btn-primary {
  font-size: 16px;
  border-radius: 30px;
  padding: 10px 30px;
  border-width: 2px;
  background: #00d2b5;
  border-color: #00d2b5;
  color: #fff;
  -webkit-box-shadow: 0 4px 20px -5px rgba(0, 210, 181, 0.4);
  box-shadow: 0 4px 20px -5px rgba(0, 210, 181, 0.4);
  margin-left: 10px;
}
.btn.btn-primary:hover {
  color: #000;
  background: #fff;
  transition: 0.36s;
}

/* bule btn */
.btn.btn-info {
  font-size: 16px;
  border-radius: 30px;
  padding: 10px 30px;
  border-width: 2px;
  background: rgb(99, 205, 218);
  border-color: rgb(99, 205, 218);
  color: #fff;
  box-shadow: 0 4px 20px -5px rgb(61, 193, 211);
  margin: 5px 0;
}
.btn.btn-info:hover {
  color: #000;
  background: #fff;
  transition: 0.36s;
}

/* bule btn */

/* empty img */

.site-blocks-cover,
.site-blocks-cover > .container > .row {
  min-height: 400px;
  height: calc(80vh);
}

.site-blocks-cover.inner-page-cover,
.site-blocks-cover.inner-page-cover > .container > .row {
  min-height: 400px;
  height: calc(20vh);
}
.site-blocks-cover h1 {
  font-size: 3.5rem;
  font-weight: 400;
  color: #000;
  font-weight: 900;
}
@media (max-width: 991.98px) {
  .site-blocks-cover h1 {
    font-size: 2rem;
  }
}
.site-blocks-cover p {
  color: #6c757d;
  font-size: 1rem;
  font-weight: 300;
}
.site-blocks-cover .intro-text {
  font-size: 16px;
  line-height: 1.5;
}
@media (max-width: 991.98px) {
  .site-blocks-cover .display-1 {
    font-size: 3rem;
  }
}
.content {
  /* margin: auto; */
  display: inline-block;
  margin: 100px 0;
}
.img-fluid {
  display: inline-block;
}
.myCartBtn {
  margin: auto;
  text-align: center;
  width: 100%;
}
</style>