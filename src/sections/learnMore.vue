<template>
    <div class="site-section bg-light" id="about-section">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-12" style="position: relative;" data-aos="fade-up">
                    <div class="row mb-5">
                        <div class="col-12 text-center">
                            <h2 class="section-title mb-3">About Us</h2>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-lg-6">
                            <img src="https://images.pexels.com/photos/2047397/pexels-photo-2047397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Image" class="img-fluid mb-5 mb-lg-0 rounded shadow">
                        </div>
                        <div class="col-lg-5 ml-auto pl-lg-5 mt-auto mb-auto">
                            <h2 class="text-black mb-4">Create interactive prototypes</h2>
                            <p class="mb-4">Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.</p>
                            <div>
                                <router-link to="/about" class="btn btn-primary mr-2 mb-2" >Read More</router-link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#about-section
{
  padding: 5em 0;
  margin-top: 100px
}

.btn.btn-primary{
    font-size: 16px;
    border-radius: 30px;
    padding: 10px 30px;
    border-width: 2px;
    background: #00d2b5;
    border-color: #00d2b5;
    color: #fff;
    -webkit-box-shadow: 0 4px 20px -5px rgba(0, 210, 181, 0.4);
    box-shadow: 0 4px 20px -5px rgba(0, 210, 181, 0.4);
}
.btn.btn-primary:hover{
color: #000;
background: #fff;
transition: 0.36s
}
</style>