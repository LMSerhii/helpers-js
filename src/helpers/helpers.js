export const filterDataById = (arrey, product) => {
  return arrey.filter((item) =>
    item.topping.find((element) => element.type === product)
  );
};
