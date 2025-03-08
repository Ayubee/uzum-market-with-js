export const allAddedProducts =
  JSON.parse(localStorage.getItem("products")) || [];

export function showProducts() {
  console.log(allAddedProducts);
  let totalPrice = 0;
  let totalAmout = 0;
  allAddedProducts.forEach((p) => {
    totalPrice += p.price * p.amount;
    totalAmout += p.amount;
  });
}

export function addProduct(p) {
  const item = allAddedProducts.find((el) => el.id == p.id);
  if (item) {
    item.amount += 1;
  } else {
    allAddedProducts.push({ ...p, amount: 1 });
  }

  localStorage.setItem("products", JSON.stringify(allAddedProducts));
  showProducts();
}
