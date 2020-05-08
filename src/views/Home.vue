<template>
  <div class="home">
    <Login />

    <navpar />
    <mypopup />

    <hero />
    <ProductList />
    <learnMore />
    <contact />

    <last />
  </div>
</template>

<script>
import hero from "../components/hero.vue";
import mypopup from "../components/mypopup.vue";
export default {
  components: {
    hero,
    mypopup
    // miniCart
  }
};
</script>