<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Our Products List</h1>
          <div class="row">
              
  
      <div class="cards">
        <div class="card" v-for="product in products">
            <div class="image">
                <div class="img" :style="{backgroundImage: 'url(' + product.img + ')' }"></div>
            </div>
            <div class="content">
                <h3>{{product.name}}</h3>
              <p style="magin: 50px">{{product.productDescription}}</p>

                <add-to-cart 
                    :img="product.img"
                    :id="product.productId"
                    :price="product.price"
                    :name="product.name">
                </add-to-cart>
            </div>
        </div>
      </div>

          </div>
      </div>
    
  </div>
</template>

<script>
import AddToCart from '../components/AddToCart.vue'
import {db} from '../firebase';
export default {
    components: {
    AddToCart    
    }, 
  name: "Products-list",
  props: {
    msg: String
  },
data(){
    return {
        products: [],
    
    }
  },
  methods:{
    // getImage(images){
    // //   return images[0];   // error
    // }
  },
  firestore(){
      return {
        products: db.collection('products'),
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


    .products{
        margin-top: 100vh;
        background: #f2f2f2;
        padding-bottom: 3rem;
        position: relative;
    }


.cards {
    display: flex;
    flex-wrap: wrap;
      justify-content: center;
}
.card {
    flex-basis: calc(50% - 20px);
    display: inline-block;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 10px;
    border-radius: 4px;
    overflow: hidden;
      justify-content: center;
}
.img{
  height: 190px;
  width: 100%;
  background-size:contain;
  background-position: center center;
}

.card .content {
    padding: 15px;
}
.card .content h3 {
    margin: 0;
    font-size: 25px;
    margin-bottom: 10px;
}
.card .content p {
    margin: 0;
    font-size: 14px;
    margin-bottom: 10px;
}


</style>