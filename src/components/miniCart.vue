<template>
    <div class="miniCart">
<b-modal id="modal-scoped">
    <template slot="modal-header">

      <h5>My Cart</h5>
    </template>

    <template >

        <ul>
            <li v-for="item in this.$store.state.cart" class="media">
                <div class="img" :style="{backgroundImage: 'url(' + item.productImage + ')' }"></div>
                <div class="media-body">
                <h5 class="mt-0">{{item.productName}}

                    <!-- how we can undefined function from defrant page -->
                    <span class='float-right' @click="$store.commit('removeFromCart',item)">X</span>
                </h5>
                <p class="mt-0">{{item.productPrice+ ' EGP'}}</p>
                <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                </div>
            </li>

            </ul>
    </template>

    <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">

      <b-button size="sm" variant="danger" @click="cancel()">
        continue shoping
      </b-button>
      <!-- Button with custom close trigger value -->
    <router-link to="/cart">
      <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
        cart
      </b-button>
    </router-link>
    </template>
  </b-modal>
    </div>

</template>

<script>
export default {
  methods:{

  }
}
</script>

<style scoped >

.img {

    width: 80px;
    height: 80px;
    background-size: cover ;
    margin-right: 35px
}
</style>
