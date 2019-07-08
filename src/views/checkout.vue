<template>
    <div class="checkout">

      
    <navpar/>
        
        <div class="container mt-5 pt-5">
            <div class="row">
                <div class="col=md=9">
                    <h4 class="py-4">checkout page </h4>
                    <ul>
                        <li v-for="item in this.$store.state.cart" class="media">
                            <div class="img" :style="{backgroundImage: 'url(' + item.productImage + ')' }"></div>
                            <div class="media-body">
                            <h5 class="mt-0">{{item.productName}}

                                <!-- <span class='float-right' @click="$store.commit('removeFromCart',item)">X</span> -->
                            </h5>
                            <p class="mt-0">{{item.productPrice+ ' EGP'}}</p>
                            <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="col-md=3">

                </div>
            </div>
        </div>



    </div>
</template>

<style scoped >

.img {

    width: 200px;
    height: 200px;
    background-size: cover ;
    margin-right: 35px
}
</style>