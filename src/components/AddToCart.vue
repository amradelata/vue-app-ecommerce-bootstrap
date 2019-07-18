<template>
  <div class="add-to-cart">
   
 
    <b-button @click="addToCart(), $bvModal.show('modal-scoped')" class="btn btn-info" size="sm">Add to Cart</b-button>
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    img: String,
    id: String
  },
  data(){
      return {
          item :{
            productName: this.name,
            productImage: this.img,
            productPrice: this.price,
            productId: this.id,
            productQuantity: 1,    //fix qut proplem
          }
      }
  },
  methods:{
    addToCart(){
      this.$store.commit('addToCart', this.item)
        Toast.fire({
        type: 'success',
        title: '1 item added to cart'
        })
    //   console.log(this.item)
    }
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.card .content button {
    padding: 10px 15px;
    background-color: #3498db;
    color: #fff;
    border-color: transparent;
    display: block;
    text-align: center;
    border-radius: 3px;
    width: 100%;
}

a {
    color: #00d2b5;
    text-decoration: none;
    background-color: transparent;
}
a:hover{
    color: #01a58e;
    text-decoration: none
}

/* bule btn */
.btn.btn-info{
    font-size: 16px;
    border-radius: 30px;
    padding: 10px 30px;
    border-width: 2px;
    background: rgb(99, 205, 218);
    border-color: rgb(99, 205, 218);
    color: #fff;
    box-shadow: 0 4px 20px -5px rgb(61, 193, 211);
    margin-right: 20px
}
.btn.btn-info:hover{
color: #000;
background: #fff;
transition: 0.36s
}

/* bule btn */
</style>