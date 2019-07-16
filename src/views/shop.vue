<template>
    <div class="site-section" id="blog-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
          <!-- <navpar/> -->
           <input class="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search" style="width:300px"  v-model="search">
           <b-button >click me</b-button>
          </div>
        </div>
 <!-- itms-->
        <div class="itms results" >
          
          <div class="itme"  v-for="product in filteredList">
            <div class="h-entry">
              <router-link v-bind:to="'/product/' + product.productId ">
              <div class="img-fluid img" :style="{backgroundImage: 'url(' + product.img + ')' }"></div>
              
              <h2>{{product.name}}</h2>
              </router-link>
              <div class="meta mb-4">Ham Brook <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a href="#">News</a></div>
              <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
      
                <add-to-cart 
                    :img="product.img"
                    :id="product.productId"
                    :price="product.price"
                    :name="product.name">
                </add-to-cart>
            
            </div> 
          </div>
        </div>
<!-- itms -->
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
        search: '',
    }
  },
 computed : {
    filteredList() {
    if(this.search){
      return this.products.filter((product) =>{
        return product.name.startsWith(this.search);
      })
    }else{
      return this.products
    }
    }
},
  firestore(){
      return {
        products: db.collection('products'),
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style (scoped)>



.h-entry h2 a:hover{
  text-decoration: none
}

.itms{
    display: flex;
    flex-wrap: wrap;
}
.itme{
    flex-basis: calc(33.333% - 20px);
    margin: 10px;
    margin-bottom: 20px
}
.h-entry img {
  margin-bottom: 30px;
   }

.h-entry .meta {
  color: #b3b3b3;
  font-size: 14px; }

.h-entry h2 {
  font-size: 30px; 
  margin-bottom: 20px
  }
.content{
  font-size: 18px
}
.img {

    /* width: 100; */
    height: 200px;
    background-size: cover ;
    background-position: center center;
    margin-bottom: 20px
}

a {
    color: #00d2b5;
    background-color: transparent;
    /* font-size: 30px; */
}
a:hover{
    color: #00d2b5;
    text-decoration: none;
}

</style>