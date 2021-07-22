import Vue from "vue";
import Vuex from "vuex";
import myApi from "../api";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: null,
    cart: [],
    toast: {
      text: "",
      show: false,
    },
  },

  getters: {
    cartSize: (state) => {
      return state.cart.length;
    },
    cartTotalQty: (state) => {
      return state.cart.reduce((result, product) => {
        result += Number(product.quantity);
        return result;
      }, 0);
    },
    cartTotalAmount: (state) => {
      return state.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    },
    toast: (state) => {
      return state.toast;
    },
  },
  mutations: {
    setUpProducts: (state, productsPayload) => {
      //sets the state's  products property to the products array recieved as payload
      state.products = productsPayload;
    },
    addToCart: (state, productId) => {
      //find the product in the products list
      let product = state.products.find((product) => product.id === productId);
      //find the product in the cart list
      let cartProduct = state.cart.find((product) => product.id === productId);

      if (cartProduct) {
        //product already present in the cart. so increase the quantity
        cartProduct.quantity++;
      } else {
        state.cart.push({
          // product newly added to cart
          ...product,
          stock: product.quantity,
          quantity: 1,
        });
      }
      //reduce the quantity in products list by 1
      product.quantity--;
    },
    removeFromCart: (state, productId) => {
      //find the product in the products list
      let product = state.products.find((product) => product.id === productId);
      //find the product in the cart list
      let cartProduct = state.cart.find((product) => product.id === productId);

      cartProduct.quantity--;
      //Add back the quantity in products list by 1
      product.quantity++;
    },
    deleteFromCart: (state, productId) => {
      //find the product in the products list
      let product = state.products.find((product) => product.id === productId);
      //find the product index in the cart list
      let cartProductIndex = state.cart.findIndex(
        (product) => product.id === productId
      );
      //srt back the quantity of the product to intial quantity
      product.quantity = state.cart[cartProductIndex].stock;
      // remove the product from the cart
      state.cart.splice(cartProductIndex, 1);
    },
    showToast: (state, toastText) => {
      state.toast.show = true;
      state.toast.text = toastText;
    },
    hideToast: (state) => {
      state.toast.show = false;
      state.toast.text = "";
    },
  },
  actions: {
    fetchProducts: ({ commit }) => {
      //simulating a fake ajax request to fetch products from database
      myApi.getProducts().then((products) => {
        //passing the products recieved from response as a payload to the mutation
        commit("setUpProducts", products);
        commit("showToast", "Products loaded");
      });
    },
    addToCart: ({ commit }, productId) => {
      myApi.products("add", productId).then((productId) => {
        commit("addToCart", productId);
        commit("showToast", "Added to cart");
      });
    },
    removeFromCart: ({ commit }, productId) => {
      myApi.products("remove", productId).then((productId) => {
        commit("removeFromCart", productId);
        commit("showToast", "Removed from cart");
      });
    },
    deleteFromCart: ({ commit }, productId) => {
      myApi.products("delete", productId).then((productId) => {
        commit("deleteFromCart", productId);
        commit("showToast", "Deleted from cart");
      });
    },
  },
});
