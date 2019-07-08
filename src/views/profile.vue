<template>
    <div class="profile">

        <div class="container">
            <!-- hero -->
            <div class="row justify-content align-items-center productHero">

                <div class="col-md-5">
                    <div class="hero-content">
                        <h1 class="hero-title">
                            profile Page
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat voluptatem earum natus exercitationem voluptatibus, beatae eaque, laborum aut possimus ut sequi illo culpa porro temporibus delectus! Aperiam, voluptate earum.
                        </p>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="img">
                        
                        <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/profile_6l1l.svg" class="img-fluid" alt="Responsive image">
                    </div>
                </div>
            </div>


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
                      <b-col sm="10">
                        <b-form-input  v-model="profile.postCode" placeholder="Postcode"></b-form-input>
                      </b-col>
                      <b-col sm="2">
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
                      <b-col sm="10">
                        <b-form-input  v-model="account.confirmPassword"  placeholder="Confirm password"></b-form-input>
                      </b-col>
                      <b-col sm="2">
                        <b-button variant="info" @click="updateProfile">Save Changes</b-button>
                        <b-button variant="success" @click="resetPassword">click to reset Password</b-button>

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
               Toast.fire({
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

.form-control{
      margin-bottom: 35px;
}

</style>

