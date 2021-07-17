import products from "./products.js";

export default {
  getProducts: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products).catch(() => reject);
      }, 500);
    });
  },
  products: (action, productId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productId).catch(() => reject);
      }, 100);
    });
  },
};
