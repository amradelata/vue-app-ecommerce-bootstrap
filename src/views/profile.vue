<template>
    <div class="profile site-blocks-cover">
      <navpar/>
        <div class="container">
            <!-- hero -->
            <div class="row align-items-center justify-content-center">
                <div class="col-md-12" style="position: relative;" data-aos="fade-up">
                    <b-row class="mt-2">
                        <b-col sm="6">
                            <div class=" content">
                                <h1>Grow Your Business Faster</h1>
                                <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                                <div>
                                </div>
                            </div>
                        </b-col>
                        <b-col sm="6">
                            <img src="../../public/img/svg/profile.svg" alt="Image" class="img-fluid img-absolute">
                        </b-col>
                    </b-row>
                </div>
            </div>
        <!-- hero -->


        <!-- form -->
        <div>
          <b-card no-body>
            <b-tabs pills card>
              <!-- tap#1 -->
              <b-tab title="Profile" active><b-card-text>
                <b-row>
                  <b-col sm="6">
                 <b-form-input  v-model="profile.name" placeholder="Full name"></b-form-input>
                  </b-col>
                  <b-col sm="6">
                 <b-form-input v-model="profile.phone" placeholder="Phone"></b-form-input>
                  </b-col>
              </b-row>
                  <b-row>
                  <b-col sm="12">
                   <b-form-input  v-model="profile.address" placeholder="Address"></b-form-input>
                  </b-col>
                  </b-row>
                    <b-row>
                      <b-col sm="7">
                        <b-form-input  v-model="profile.postCode" placeholder="Postcode"></b-form-input>
                      </b-col>
                      <b-col sm="4">
                      <b-button variant="info" @click="updateProfile">Save Changes</b-button>
                      </b-col>
                    </b-row>
                </b-card-text>
                </b-tab>
              <!-- tap#1 -->
              <!-- tap#2 -->
              <b-tab title="Profile settings"><b-card-text>
             <b-row>
                  <b-col sm="6">
                 <b-form-input  v-model="account.name" placeholder="User name"></b-form-input>
                  </b-col>
                  <b-col sm="6">
                 <b-form-input  v-model="account.email" placeholder="Email address"></b-form-input>
                  </b-col>
              </b-row>
                  <b-row>
                  <b-col sm="12">
                   <b-form-input  v-model="account.password" placeholder="New password"></b-form-input>
                  </b-col>
                  </b-row>
                    <b-row>
                      <b-col sm="7">
                        <b-form-input  v-model="account.confirmPassword"  placeholder="Confirm password"></b-form-input>
                      </b-col>
                      <b-col sm="4">
                        <!-- <b-button class="btn.btn-info" @click="updateProfile">Save Changes</b-button> -->
                        <b-button class="btn btn-primary" @click="resetPassword">click to reset Password</b-button>

                      </b-col>
                    </b-row>
                </b-card-text>
                </b-tab>
              <!-- tap#2 -->
            </b-tabs>
          </b-card>
        </div>


        </div>
    </div>
</template>



<script>
// import { VueEditor } from "vue2-editor";
import { fb, db} from '../firebase';
export default {
  name: "profile",
  components: {
    // VueEditor
  },
  props: {
    msg: String
  },
  data(){
    return {
        profile: {
          name:null,
          phone:null,
          address:null,
          postcode:null
        },
        account:{
            name:null,
            email:null,
            photoUrl:null,
            emailVerified:null,
            password:null,
            confirmPassword:null,
            uid:null
        }       
    }
  },
  firestore(){
      const user = fb.auth().currentUser;
      return {
        profile: db.collection('profiles').doc(user.uid),
      }
  },
  methods:{
      resetPassword(){
          const auth = fb.auth(); 
                   
          auth.sendPasswordResetEmail(auth.currentUser.email).then(() =>  {
               window.Toast.fire({
                type: 'success',                                  //send reset pasword to your email
                title: 'Check Your Email'
              })
          })
      },
      updateProfile(){
        // this.$firestore.profile.update(this.profile );
          this.$firestore.profile.update('name',this.profile.name,'phone',this.profile.phone ,'address',this.profile.address,'postCode',this.profile.postCode );  //error I try to do this to work
          // console.log(this.profile)
      },
      uploadImage(){}
  },
  created(){
  }
};
</script>



 <style scoped>

 .site-blocks-cover, .site-blocks-cover > .container > .row {
    min-height: 600px;
    height: calc(100vh); }
  .site-blocks-cover.inner-page-cover, .site-blocks-cover.inner-page-cover > .container > .row {
    min-height: 400px;
    height: calc(20vh); }
  .site-blocks-cover h1 {
    font-size: 3.5rem;
    font-weight: 400;
    color: #000;
    font-weight: 900; }
    @media (max-width: 991.98px) {
      .site-blocks-cover h1 {
        font-size: 2rem; } }
  .site-blocks-cover p {
    color: #6c757d;
    font-size: 1rem;
    font-weight: 300; }
  .site-blocks-cover .intro-text {
    font-size: 16px;
    line-height: 1.5; }
  @media (max-width: 991.98px) {
    .site-blocks-cover .display-1 {
      font-size: 3rem; } }
.content{
    margin-top: auto;
    margin-bottom: auto;
    display: inline-block;
}
.img-fluid{
display: inline-block;
}



.form-control{
      margin-bottom: 35px;
}


/* green btn */
.btn.btn-primary{
    font-size: 16px;
    border-radius: 30px;
    padding: 10px 30px;
    border-width: 2px;
    background: #00d2b5;
    border-color: #00d2b5;
    color: #fff;
    box-shadow: 0 4px 20px -5px rgba(0, 210, 181, 0.4);
}
.btn.btn-primary:hover{
color: #000;
background: #fff;
transition: 0.36s
}
/* green btn */
/* bule btn */
.btn.btn-info{
    font-size: 16px;
    border-radius: 30px;
    padding: 10px 30px;
    border-width: 2px;
    background: rgb(99, 205, 218);
    border-color: rgb(99, 205, 218);
    color: #fff;
    box-shadow: 0 4px 20px -5px rgb(61, 193, 211);
    margin-right: 20px
}
.btn.btn-info:hover{
color: #000;
background: #fff;
transition: 0.36s
}

/* bule btn */

.card{
  margin-bottom: 100px;
}

</style>

