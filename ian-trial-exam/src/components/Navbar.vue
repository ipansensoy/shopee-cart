<template>
  <nav class="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
    <div class="cart-item">
      <router-link to="/my-cart">
        <i
          :data-count="cartSize"
          class="fa fa-shopping-cart icon-grey badge"
        ></i>
      </router-link>
    </div>
    <a class="navbar-brand" href="#"><b>Better Trade Off Shop</b></a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li>
          <span class="nav-link">(a simple vuex example)</span>
        </li>
      </ul>
    </div>
  </nav>
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
  position: absolute;
  right: 2rem;
  .badge {
    display: block;
    font-size: 2rem;
  }
  a {
    text-decoration: none;
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
</style>
