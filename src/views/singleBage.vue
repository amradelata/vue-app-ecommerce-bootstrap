<template>
    <div id="single-product-page">

    <Login/>

    <navpar/>
        <div class="container">
            <!-- hero -->
            <div class="row align-items-center justify-content-center">
                <!-- We only want to render the product data when the data is available to us -->
                <template v-if="product[0]">
                    <div class="col-md-12" style="position: relative;" data-aos="fade-up">
                        <b-row class="mt-2">
                            <b-col sm="6">
                                <div class=" content">
                                    <h1>{{product[0].name}}</h1>
                                    <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                                    <h2 style="color: #00d2b5;">{{product[0].price + ' EGP'}}</h2>
                                    <div>
                                    </div>
                                </div>
                            </b-col>
                            <b-col sm="6">
                                <div class="img-fluid img" :style="{backgroundImage: 'url(' + product[0].img + ')' }"></div>

                            </b-col>
                        </b-row>
                    </div>
                </template>

                <!-- If the data is not available yet, then simply render "Loading" -->
                <template v-else>
                    <img src="http://www.bkmag.com/wp-content/uploads/2014/09/loading.gif" alt="" class="loding">
                </template>

            </div>
            <!-- hero -->
        </div>
    </div>
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      product: []
    };
  },
firestore(){
  const id = this.$route.params.id;
  return{
    product : db.collection('products').where("productId", '==' , id)
  }
}
};
</script>

<style scoped>
.loding{
    height: 100%;
    width: 100%;
}

.site-blocks-cover, .site-blocks-cover > .container > .row {
    min-height: 600px;
    height: calc(100vh); }
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
    margin-top: 200px;
    /* margin-bottom: auto; */
    margin-right: auto;
    display: inline-block;
}
.img-fluid{
display: inline-block;
    height: 500px;
    width: 100%;
}
.img{
  background-size:cover;
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
</style>