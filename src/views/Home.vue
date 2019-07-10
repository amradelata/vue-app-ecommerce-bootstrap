<template>
  <div class="home">
    <Login/>

    <navpar/>
      
   

    <hero/>
    <ProductList/>
    <learnMore/>
    <contact/>

 <!-- you can't name commponents footer -->
    <last/>  
    

    <!-- modale -->

<miniCart/>
 
  </div>
</template>

<script>
import hero from '../components/hero.vue'
import miniCart from '../components/miniCart.vue'
export default {
    components: {
    hero,
    miniCart
    }, 
    
}
</script>