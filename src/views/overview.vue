<template>
    <div class="products site-blocks-cover">
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
                            <img src="../../public/img/svg/Overview .svg" alt="Image" class="img-fluid img-absolute">
                        </b-col>
                    </b-row>
                </div>
            </div>
        <!-- hero -->
        
        </div>
        </div>
</template>


<script>

import { VueEditor } from "vue2-editor";
import {fb,db}from '../firebase';
export default {
  name: "products",
  props: {
    msg: String
  },
 components: {
    VueEditor
  },
    data(){
        return{
           products:[],
            product:{
                name: null,
                productDescription: null,
                price: null,
                img: null,
                links: null,
                productId: null
            },
            actevItem: null,
            modal: null,
            link: null

        }
    },
    firestore(){
        return{
             products: db.collection('products'),
        }
    },
    mounted(){
        this.reset()
    },
    //   components: {
    //     products
    //     },
    methods:{
        reset(){
            this.product = {   //error not working
            name: null,
            productDescription: null,
            price: null,
            img: null,
            links: [],
            }
        },
        addNew(){
            
            this.modal = 'new';
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
        this.$firestore.products.doc(this.product['.key']).update(this.product);//error
        // Toast.fire({
        // type: 'success',
        // title: 'Updated  successfully'
        //   })
        
    },
        tags(){
            this.product.links.push(this.link);
            this.link = ''
        },
        uploadImage(e){
            let file = e.target.files[0]

            let storageRef = fb.storage().ref('products/' + file.name); //error vido 45/46/47
            storageRef .put(file);
        }
    }
}
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

/* red btn */
.btn.btn-danger{
    font-size: 16px;
    border-radius: 30px;
    padding: 10px 30px;
    border-width: 2px;
    background: #ff7979;
    border-color: #ff7979;
    color: #fff;
    box-shadow: 0 4px 20px -5px rgb(235, 77, 75);
}
.btn.btn-danger:hover{
color: #000;
background: #fff;
transition: 0.36s
}
/* red btn */

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
.img{
  height: 100px;
  width: 100%;
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center center;
 box-shadow: 0 4px 20px -5px rgb(48, 57, 82);
}
td{
    margin: 20px 0; 
}
.table{
    margin-top: 100px;
    font-size: 18px
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
