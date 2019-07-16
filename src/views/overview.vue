<template>
    <div class="products site-blocks-cover">
<!-- nav -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light container">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" v-model="Search" @keyup.enter="showMeWhatYouGat">
</nav>
<!-- nav -->
        <div class="container">
            <!-- hero -->
            <!-- <div class="row align-items-center justify-content-center">
                <div class="col-md-12" style="position: relative;" data-aos="fade-up">
                    <b-row class="mt-2">
                        <b-col sm="6">
                            <div class=" content">
                                <h1>Grow Your Business Faster</h1>
                                <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                                <div>
                                </div>
                            </div>
                        </b-col>
                        <b-col sm="6">
                            <img src="../../public/img/svg/Overview .svg" alt="Image" class="img-fluid img-absolute">
                        </b-col>
                    </b-row>
                </div>
            </div> -->
        <!-- hero -->

    <hr>

<div class="table-responsive">
<table class="table">
<thead>
<tr>
<th>Name</th>
<th>Price</th>
<th>image</th>
</tr>
</thead>
<tbody>
<tr v-for="product in products">
<td>
{{product.name}}
</td>
<td>
{{product.price}}
</td>
<td>
<div class="img" :style="{ backgroundImage: 'url(' + product.img + ')' }"></div>
</td>
<td>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<input class="form-control mr-sm-2" type="search" placeholder="Search" v-model="Search" @keyup.enter="showMeWhatYouGat">

</div>
</template>
<script>

import {fb,db}from '../firebase';
export default {
  name: "products",
  props: {
    msg: String
  },
    data(){
        return{
           Search: '',
           products:[],
        }
    },
    methods:{
        showMeWhatYouGat(){
            console.log(this.products[0]);

            if (this.Search == this.products[0].name){
                // this.products[0].name.style.display = "none"
                // console.log(this.products[0].productId)
                this.$router.replace('../product/'+ this.products[0].productId);
            console.log('this is here');
                return
                    this.products.filter((product) => {

            })

            }else{
                console.log('not fonded');
            }
 
        }
    },
    computed:{
        filterproducts:function (){
            return
                this.products.filter((product) => {
                return product.name.match(this.Search);

        })
            
        }
    },
    firestore(){
    return{
        products: db.collection('products'),
    }
    },
}
</script>


<style scoped>
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
    margin-top: auto;
    margin-bottom: auto;
    display: inline-block;
}
.img-fluid{
display: inline-block;
}

.img{
  height: 100px;
  width: 100%;
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center center;
 box-shadow: 0 4px 20px -5px rgb(48, 57, 82);
}
td{
    margin: 20px 0; 
}
.table{
    margin-top: 100px;
    font-size: 18px
}
.title{
    margin-right: 300px
}
#productDescription{
    height: 300px;
}
.form-control{
    margin: 20px 0;
}
</style>
