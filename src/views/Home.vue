<template>
  <div class="home">
    <Login/>

    <navpar>
      
    </navpar>

    <hero/>
    <ProductList/>
    <learnMore/>

    <!-- modale -->

<miniCart/>
 
  </div>
</template>

<script>
import hero from '../components/hero.vue'
import Login from '../components/Login.vue'
import miniCart from '../components/miniCart.vue'



export default {
    components: {
    hero,
    Login,
    miniCart
    }, 
    
}
</script>
   
