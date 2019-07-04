<template>
  <div class="about">
   
    <!-- Button trigger modal -->
      <div>
      <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->

       <b-modal 
       :footer-text-variant="footerTextVariant"
       id="modal-center" centered title="BootstrapVue">
      <div>
      <b-tabs content-class="mt-3" justified>
      <b-tab title="Log In" active>

      <div>
      <b-form >
        <!--  -->
      <label class="sr-only" for="inline-form-input-name">Name</label>
      <b-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Jane Doe"
      ></b-input>

      <label class="sr-only" for="inline-form-input-username">Username</label>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="inline-form-input-username" placeholder="Username"></b-input>
      </b-input-group>
    <!--  -->
      </b-form>
      </div>
      </b-tab>
      <b-tab title="Sign Up">

      <div>
      <b-form >
        <!--  -->
        <h2 class="text-center">Sign Up</h2>
      <label class="sr-only" for="inline-form-input-name">Name</label>


      <label class="sr-only" for="inline-form-input-username">Username</label>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="username" placeholder="Username" type="text" v-model="name"></b-input>
      <b-input id="email" placeholder="email" type="email" v-model="email"></b-input>
      <b-input id="password" placeholder="password" type="password" v-model="password"></b-input>
      </b-input-group>

<!--  -->

  


          
      </b-form>
      </div>
      </b-tab>
      </b-tabs>
      </div>

        <div slot="modal-footer" class="w-100">
        <p class="float-left">Modal Footer Content</p>

        <b-button
          variant="primary"
          size="sm"
          class="float-right"
          @click="register"
        >
          sumpet
        </b-button>
      </div>
      </b-modal>
      </div>
</div>
</template>



<script>
import {fb} from '../firebase'


export default {
name: "Login",
data(){
  return{
    name:null,
    email:null,
    password:null,
    footerTextVariant: 'dark'
  }
},
methods:{
  register(){
      fb.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
  }
}

}

    

</script>