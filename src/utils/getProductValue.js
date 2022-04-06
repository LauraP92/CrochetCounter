export const getProductValue = product => {
  let value;
  if (product.price <= 10) {
    value = '$';
  } else if (product.price <= 20 && product.price > 10) {
    value = '$$';
  } else {
    value = '$$$';
  }
  return value;
};
