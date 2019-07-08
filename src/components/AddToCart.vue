<template>
  <div class="add-to-cart">
   
        <button class="btn btn-primary" @click="addToCart(), $bvModal.show('modal-scoped')" > Add to Cart </button>
        <!-- , $bvModal.show('modal-scoped') -->
    
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
</style>