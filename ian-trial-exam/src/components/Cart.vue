<template>
  <div class="container mt-5 py-2">
    <h1 class="my-2">
      <span v-if="cartSize" class="badge badge-secondary"
        >{{ cartSize }} product(s) listed</span
      >
    </h1>
    <div v-if="!cartSize" class="" role="alert">
      Cart is empty! Please add some products.
    </div>
    <div v-else class="no-more-tables">
      <table class="table-responsive-sm table table-striped mb-5">
        <thead class="cf thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Description</th>
            <th scope="col">Delete</th>
            <th scope="col">Sub Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in cart" :key="product.id">
            <td data-title="#">{{ index + 1 }}</td>
            <td data-title="Name">{{ product.name }}</td>
            <td data-title="Price">$ {{ product.price }}</td>
            <td data-title="Qty">
              <span class="mx-2">{{ product.quantity }}</span>
            </td>
            <td data-title="Description">$ {{ product.description }}</td>
            <td>
              <button
                @click="removeFromCart(product.id, product.quantity)"
                class="btn btn-danger btn-small"
              >
                Remove from Cart
              </button>
            </td>
            <td data-title="Sub Total">
              $ {{ product.quantity * product.price }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="total">
        <h3>Total Qty: {{ cartTotalQty }}</h3>
        <h3>Total Amount: ${{ cartTotalAmount }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartSize", "cartTotalAmount", "cartTotalQty"]),
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch("addToCart", id);
    },
    removeFromCart(id, quantity) {
      if (quantity > 1) {
        this.$store.dispatch("removeFromCart", id);
      } else {
        this.deleteFromCart(id);
      }
    },
    deleteFromCart(id) {
      this.$store.dispatch("deleteFromCart", id);
    },
  },
};
</script>

<style scoped lang="scss">
.table-footer {
  font-size: 1.2em;
  font-weight: bold;
}
.total {
  text-align: right;
}
@media only screen and (max-width: 800px) {
  /* Force table to not be like tables anymore */
  .no-more-tables table,
  .no-more-tables thead,
  .no-more-tables tbody,
  .no-more-tables th,
  .no-more-tables td,
  .no-more-tables tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  .no-more-tables thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  .no-more-tables tr {
    border: 1px solid #ccc;
  }

  .no-more-tables td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
    white-space: normal;
    text-align: left;
  }

  .no-more-tables td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    text-align: left;
    font-weight: bold;
  }

  /*
Label the data
*/
  .no-more-tables td:before {
    content: attr(data-title);
  }
}
</style>
