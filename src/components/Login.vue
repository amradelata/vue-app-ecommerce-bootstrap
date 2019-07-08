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
      <b-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="user name"
      type="text"
      v-model="name"
      ></b-input>

      <b-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Email"
      type="email"
      v-model="email"
      ></b-input>

      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="inline-form-input-username" placeholder="password" type="password" @keyup.enter="login" v-model="password"></b-input>
      </b-input-group>
    <!--  -->

        <b-button
          variant="primary"
          size="sm"
          class="float-right"
          @click="login"
        >
          Log in
        </b-button>
      </b-form>
      </div>
      </b-tab>
      <b-tab title="Sign Up">

      <div>
      <b-form >
        <!--  -->
        <h2 class="text-center">Sign Up</h2>
            
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">

        <b-input id="username" type="text" v-model="name" placeholder="Your name"></b-input>
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
import {fb,db} from '../firebase'


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
      fb.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        this.$router.replace('admin');
      })
      .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
  },
  login(){
  fb.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.replace('admin');  
          })
          .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode === 'auth/wrong-password') {
                  alert('Wrong password.');
              } else {
                  alert(errorMessage);
              }
              console.log(error);
      });
  },
      register(){
            fb.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                    
                    db.collection("profiles").doc(user.user.uid).set({
                        name: this.name
                    })
                    .then(function() {
                        console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });
                    this.$router.replace('admin');
                })
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
      }
    },

}

    

</script>