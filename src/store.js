import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let cart = window.localStorage.getItem('cart');



export default new Vuex.Store({
    state: {
      cart: cart ? JSON.parse(cart) : [],
    },

    mutations:{

      addToCart(state, item){

        let found = state.cart.find(product => product.productId == item.productId );

        if(found){
          found.productQuantity++;
        }else{
          state.cart.push(item);
        }
        this.commit('saveInLocalstorage');  //how we call function   (caal save function)
      },
      
      //save adta in localstorage
      saveInLocalstorage(state){
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
      },//remov adta from arry
      removeFromCart(state, item){
        let index = state.cart.indexOf(item);
        state.cart.splice(index,1);
        //save adta in ocalstorage agen after we delete it from the arry
        this.commit('saveInLocalstorage');  //how we call function    (caal save function)
      },



    }
    
  })