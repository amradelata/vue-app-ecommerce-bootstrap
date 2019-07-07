<template>
    <div class="product">
        <div class="container">
            <!-- hero -->
            <div class="row justify-content align-items-center productHero">

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
        <!-- hero -->
        <div class="row justify-content align-items-center">
             <h3 class="title">Products list</h3>
            <button  @click="$bvModal.show('modal-scoped'), addNew" class="btn btn-primary">Add Product</button>
                       



            <hr>

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
                          {{product.name}}
                        </td>

                        <td>
                          {{product.price}}
                        </td>

                        <td>
                          
                          <div class="img" :style="{ backgroundImage: 'url(' + product.img + ')' }"></div>
                        </td>
                            
                        <td>

                          <button class="btn btn-success" @click="$bvModal.show('modal-scoped'), editProduct(product)" >Edit</button>
                                                    
                          <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button> 
                        </td>

                      </tr>


                  </tbody>
                </table>
            </div>

        </div> 

        <!--  -->
  <!-- <b-button @click="$bvModal.show('modal-scoped')">Open Modal</b-button> -->

  <b-modal id="modal-scoped" size="xl">
    <template slot="modal-header">
      <h5>Edit product</h5>
    </template>

    <template slot-scope="{ ok, cancel, hide }">
        <b-input id="productName" placeholder="product name" type="text" v-model="product.name"></b-input>
        <b-input id="productDescription" placeholder="product Description" type="text" v-model="product.productDescription"></b-input>

        <b-input id="imgUrl" placeholder="img URL" type="text" v-model="product.img"></b-input>
        <b-input id="price" placeholder="price" type="text" v-model="product.price" @keyup.enter="hide('forget'), addProduct()"></b-input>
   
    </template>

      <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
      <!-- Button with custom close trigger value -->
         <b-button size="sm" variant="outline-secondary" @click="hide('forget'), addProduct()">Add</b-button>
        <b-button  size="sm" variant="outline-secondary" @click="hide('forget'), updateProduct()">Apply changes</b-button>

     



     
       
      
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
                productDescription: null,
                price: null,
                img: null
            },
            actevItem: null,
            modal: null

        }
    },
    firestore(){
        return{
             products: db.collection('products'),
        }
    },
    methods:{
        addNew(){
            this.modal = 'new';
            // this.reset();
            // $('#product').modal('show');
            },
        addProduct(){
            this.$firestore.products.add(this.product)
            Toast.fire({
                type: 'success',
                title: 'Product created successfully'
            })
        },
        deleteProduct(doc){
            // start animation delete popup
            Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.value) {
                // console.log(doc['.key'])
                this.$firestore.products.doc(doc['.key']).delete()
                // toast poopup
                    Toast.fire({
                    type: 'success',
                    title: 'Delete in successfully'
                    })
            }
            })
            // end animation delete popup
        },
        editProduct(product){
            this.modal = 'edit';
            this.product = product
            // console.log(this.product['.key'])
        },
    updateProduct(){
        this.$firestore.products.doc(this.product['.key']).update(this.product);
        // Toast.fire({
        // type: 'success',
        // title: 'Updated  successfully'
        //   })
        
    },
    }
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

.productHero{
    margin-bottom: 200px
}

.table{
    margin-top: 100px
}
.title{
    margin-right: 300px
}
#productDescription{
    height: 300px;
}
.form-control{
    margin: 20px 0;
}
</style>
