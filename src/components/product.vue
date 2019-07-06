<template>
    <div class="product">
                <div class="container">
            <div class="row h-100 justify-content align-items-center">

                <div class="col-md-5">
                    <div class="hero-content">
                        <h1 class="hero-title">
                            Products Page
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat voluptatem earum natus exercitationem voluptatibus, beatae eaque, laborum aut possimus ut sequi illo culpa porro temporibus delectus! Aperiam, voluptate earum.
                        </p>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="img">
                        
                        <img src="img/svg/admin.svg" class="img-fluid" alt="Responsive image">
                    </div>
                </div>

            </div>

        <div class="row justify-content align-items-center">
            <div class="col-md-12">
                <p> basic CRUD</p>

                <b-input id="productName" placeholder="product name" type="text" v-model="product.name"></b-input>
                <b-input id="imgUrl" placeholder="img URL" type="text" v-model="product.img"></b-input>
                <b-input id="price" placeholder="price" type="text" v-model="product.price" @keyup.enter="saveData"></b-input>
                
                <b-button
                variant="primary"
                size="sm"
                class="float-left"
                @click="saveData"
                >
                Save Data
                </b-button>
            </div>

            <hr>
                        <h3 class="d-inline-block">Products list</h3>
            <!-- <button @click="addNew" class="btn btn-primary float-right">Add Product</button> -->

            <div class="table-responsive">
              
                <table class="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>image</th>
                      <th>Modify</th>
                    </tr>
                  </thead>

                  <tbody>
                      <tr v-for="product in products">
                        <td>
                          {{product.data().name}}
                        </td>

                        <td>
                          {{product.data().price}}
                        </td>

                        <td>
                          
                          <div class="img" :style="{ backgroundImage: 'url(' + product.data().img + ')' }"></div>
                        </td>
                            
                        <td>

                          <button class="btn btn-success" @click="$bvModal.show('modal-scoped'), editProduct(product)" >Edit</button>
                                                    
                          <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button> 
                        </td>

                      </tr>


                  </tbody>
                </table>
            </div>

        </div> 

        <!--  -->
  <!-- <b-button @click="$bvModal.show('modal-scoped')">Open Modal</b-button> -->

  <b-modal id="modal-scoped">
    <template slot="modal-header">
      <h5>Edit product</h5>
    </template>

    <template  >
        <b-input id="productName" placeholder="product name" type="text" v-model="product.name"></b-input>
        <b-input id="imgUrl" placeholder="img URL" type="text" v-model="product.img"></b-input>
        <b-input id="price" placeholder="price" type="text" v-model="product.price" @keyup.enter="saveData"></b-input>
    </template>

      <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
      <!-- Button with custom close trigger value -->
      <b-button size="sm" variant="outline-secondary" @click="hide('forget'), updateProduct()">
        save
      </b-button>
    </template>
  </b-modal>
        <!--  -->
        </div>
    </div>
</template>


<script>
import {fb,db}from '../firebase';
export default {
    data(){
        return{
            products:[],
            product:{
                name: null,
                price: null,
                img: null
            },
            actevItem: null

        }
    },
    methods:{
        watch(){
            db.collection("products")
                .onSnapshot((querySnapshot) =>{
                    this.products = [];
                    querySnapshot.forEach((doc) =>{
                        this.products.push(doc);
                    });
                    // console.log("Current cities in CA: ", cities.join(", "));
                });
        },
        readData(){
            db.collection("products").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    this.products.push(doc);
                });
            });
        },
        saveData(){
            db.collection("products").add(
                this.product
            )
            .then((docRef)=> {
                console.log("Document written with ID: ", docRef.id);
                this.readData();
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        },
        reset(){
            // Object.assign(this.$data, this.$options.data.apply(this));
        },
        deleteProduct(doc){
            if(confirm('Are You Sure')){
                db.collection("products").doc(doc).delete().then(function() {
                console.log("Document successfully deleted!");
                }).catch(function(error) {
                console.error("Error removing document: ", error);
                });
            }else{

            }
        },
        editProduct(product){
            this.product = product.data();
            this.actevItem = product.id;
        },
        updateProduct(){
            db.collection("products").doc(this.actevItem).update(this.product)
            .then(() => {
                console.log("Document successfully updated!");
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
            this.watch()
        }
    },
    created(){
        this.readData();
    },

}
</script>


<style scoped>
/* .img{
  height: 50px;
  width: 100%;
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center center;
} */
</style>
