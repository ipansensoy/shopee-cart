<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">BTO Shop</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-link" to="/"> Home </router-link>
          <router-link class="nav-link" to="/my-cart"> My Cart </router-link>
        </ul>
      </div>
      <div class="cart-item">
        <router-link to="/my-cart">
          <i
            :data-count="cartSize"
            class="fa fa-shopping-cart icon-grey badge"
          ></i>
        </router-link>
      </div>
    </nav>
  </div>

  <!-- <nav class="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
    <div class="cart-item">
      <router-link to="/my-cart">
        <i
          :data-count="cartSize"
          class="fa fa-shopping-cart icon-grey badge"
        ></i>
      </router-link>
    </div>
    <div class="navbar-brand"></div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li>
          <router-link to="/"> Home </router-link>
        </li>
        <li>
          <router-link to="/"> My Cart </router-link>
        </li>
      </ul>
    </div>
  </nav> -->
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartSize", "cartTotalAmount"]),
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.cart-item {
  position: fixed;
  right: 0;
  z-index: 99999;
  .badge {
    display: block;
    font-size: 2rem;
  }
  a {
    text-decoration: none;
    display: inline-block;
    font-size: 2rem;
  }
  @media screen and (max-width: 710px) {
    right: 5rem;
    top: 0;
  }
}
*.icon-blue {
  color: #0088cc;
}

*.icon-grey {
  color: grey;
}

i {
  width: 100px;
  text-align: center;
  vertical-align: middle;
  position: relative;
}

.badge:after {
  content: attr(data-count);
  position: absolute;
  background: #ff6600;
  height: 2rem;
  top: 1.8rem;
  right: 1rem;
  width: 2rem;
  text-align: center;
  line-height: 2rem;
  font-size: 1rem;
  border-radius: 50%;
  color: white;
  border: 1px solid #ff6600;
  font-family: sans-serif;
  font-weight: bold;
}
.router-link-exact-active {
  color: #000 !important;
  font-weight: bold !important;
}
</style>
