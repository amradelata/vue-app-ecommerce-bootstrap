<template>
  <div class="home">
    <Login/>

    <navpar>
      
    </navpar>

    <hero/>
    <ProductList/>
    <learnMore/>
  </div>
</template>

<script>
import hero from '../components/hero.vue'
import Login from '../components/Login.vue'


export default {
    components: {
    hero,
    Login
    }, 
    
}
</script>
   
