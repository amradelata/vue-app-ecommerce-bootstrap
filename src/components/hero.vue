<template>
  <div class="site-blocks-cover">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-12">
          <b-row class="mt-2">
            <b-col sm="6">
              <img src="img/landing_1.png" alt="Image" class="img-fluid img-absolute" />
            </b-col>
            <b-col sm="6" style="margin: auto">
              <div class="content">
                <h1>GROW Your Business Faster</h1>
                <p
                  class="mb-5"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                <div>
                  <a href="#" class="btn btn-primary mr-2 mb-2">Get Started</a>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.site-blocks-cover,
.site-blocks-cover > .container > .row {
  min-height: 600px;
  height: calc(100vh);
}
.site-blocks-cover.inner-page-cover,
.site-blocks-cover.inner-page-cover > .container > .row {
  min-height: 400px;
  height: calc(20vh);
}
.site-blocks-cover h1 {
  font-size: 3.5rem;
  font-weight: 400;
  color: #000;
  font-weight: 900;
}
@media (max-width: 991.98px) {
  .site-blocks-cover h1 {
    font-size: 2rem;
  }
}
.site-blocks-cover p {
  color: #6c757d;
  font-size: 1rem;
  font-weight: 300;
}
.site-blocks-cover .intro-text {
  font-size: 16px;
  line-height: 1.5;
}
@media (max-width: 991.98px) {
  .site-blocks-cover .display-1 {
    font-size: 3rem;
  }
}
.content {
  margin: auto;
  display: inline-block;
}
.img-fluid {
  display: inline-block;
}

.btn.btn-primary {
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
.btn.btn-primary:hover {
  color: #000;
  background: #fff;
  transition: 0.36s;
}
@media screen and (max-width: 768px) {
  .img-fluid {
    margin-bottom: 50px;
  }
}
</style>
