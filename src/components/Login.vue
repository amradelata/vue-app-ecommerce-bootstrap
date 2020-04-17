<template>
  <div class="about">
   
    <!-- Button trigger modal -->
      <div>
      <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->

       <b-modal 
       :footer-text-variant="footerTextVariant"
        hide-footer
       id="modal-center" centered title="SHOP">


        <!-- form -->
        <div>
          <b-card no-body>
            <b-tabs pills card>
              <!-- tap#1 -->
              <b-tab title="Log In" active><b-card-text>
                <b-row>
                  <!-- <b-col sm="6">
                 <b-form-input placeholder="user name" type="text" v-model="name"></b-form-input>
                  </b-col> -->
                  <b-col sm="12">
                 <b-form-input type="email" v-model="email" placeholder="Email"></b-form-input>
      
                  </b-col>
              </b-row>
                  <b-row>
                  <b-col sm="12">
                   <b-form-input placeholder="password" type="password" @keyup.enter="login" v-model="password"></b-form-input>
                  </b-col>
                  </b-row>
                    <b-row>
                      <b-col sm="4">
                      <b-button variant="info" class="mt" @click="login">Log in</b-button>
                      </b-col>
                    </b-row>
                </b-card-text>
                </b-tab>
              <!-- tap#1 -->
              <!-- tap#2 -->
              <b-tab title="Sign In"><b-card-text>
             <b-row>
                  <b-col sm="6">
                 <b-form-input v-model="name" placeholder="Your name"></b-form-input>
                  </b-col>
                  <b-col sm="6">
                 <b-form-input placeholder="email" type="email" v-model="email"></b-form-input>
                  </b-col>
              </b-row>
                  <b-row>
                  <b-col sm="12">
                   <b-form-input placeholder="password" type="password" v-model="password"></b-form-input>
                  </b-col>
                  </b-row>
                    <b-row>
                       <b-col sm="4">
                        <b-button variant="info" class="mt" @click="register">Sign In</b-button>
                      </b-col>
                    </b-row>
                </b-card-text>
                </b-tab>
              <!-- tap#2 -->
            </b-tabs>
          </b-card>
        </div>
      <!-- form -->
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
    footerTextVariant: 'dark',
  }
},
methods:{
  register(){
      fb.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        this.$router.replace('admin/products');
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
            this.$router.replace('admin/products');  
          })
          .catch(function(error) {
              // Handle Errors here.
              let errorCode = error.code;
              let errorMessage = error.message;
              // [START_EXCLUDE]
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
                    this.$router.replace('admin/products');
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

<style scoped>
input{
  margin-bottom: 35px
}
</style>
