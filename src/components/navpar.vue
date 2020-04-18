<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-light container">
      <router-link to="/" class="navbar-brand" style="color: #00d2b5; font-size: 50px;">
        S
        <span style="font-size: 25px;">hop</span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="togelnav()"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="navItems">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">My Cart</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/shop" class="nav-link">My Shop</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">admin</router-link>
          </li>
        </ul>

        <b-button v-b-modal.modal-center>Log in</b-button>
      </div>
    </nav>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "navpar",
  props: {
    msg: String
  },
  data() {
    return {
      products: [],
      search: ""
    };
  },
  computed: {
    filteredList() {
      if (this.search) {
        return this.products.filter(product => {
          return product.name.startsWith(this.search);
        });
      } else {
        return this.products;
      }
    }
  },
  firestore() {
    return {
      products: db.collection("products")
    };
  },
  methods: {
    togelnav() {
      this.$refs["navItems"].classList.toggle("collapse");
    }
  }
};
</script>

<style scoped>
.btn-secondary {
  color: #6c757d !important;
  background-color: #ffffff !important;
  border-color: #8bc34a !important;
}

.btn-secondary:focus,
.btn-secondary.focus {
  box-shadow: #fff !important;
}
li {
  margin-top: 20px;
}
.bg-light {
  background: #fff !important;
  /* position: fexid !important; */
}
/* .hello{
  position: fexid !important;

  z-index: 9999;
  right: 0;
  left: 0;
} */
@media screen and (max-width: 768px) {
  #navItems {
    display: block;
  }
}
</style>
