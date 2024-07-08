import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import "../data/cart-class.js";
// import "../data/backend-practise.js";
import { loadProducts, loadProductFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage() {
  await loadProductFetch();

  const value = await new Promise((resolve) => {
    loadCart(() => {
      resolve("value3");
    });
  });

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then((values) => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve("value1");
  });
})
  .then((value) => {
    console.log(value);

    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
*/
/*
loadProducts(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/
