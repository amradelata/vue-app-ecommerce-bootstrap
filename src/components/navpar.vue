<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-light container">
  <router-link to="/" class="navbar-brand" >Shop</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
      <router-link to="/" class="nav-link" >Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <!-- <b-button class="btn btn-outline-success my-2 my-sm-0" type="submit" v-b-modal.modal-1>Search</b-button> -->
        <!-- <b-button v-b-modal.modal-center>get started</b-button> -->
          <b-button v-b-modal.modal-center>Launch centered modal</b-button>


 
    </form>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'navpar',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.btn-secondary{
    color: #6c757d !important;
    background-color: #ffffff !important;
    border-color: #8BC34A !important;
}

.btn-secondary:focus, .btn-secondary.focus{
  box-shadow: #fff !important;
}

</style>
