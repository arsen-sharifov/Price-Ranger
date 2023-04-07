export const getRandomElements = (arr, n) => {
  // перемішати елементи в масиві
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // повернути перші n елементів
  return arr.slice(0, n);
};

export const filterDataByItem = (id, data, shopData) => {
  const result = data.filter((item) => item.product === id);

  const updatedResult = result.map((item) => {
    const shop = shopData.find((shop) => shop.id === item.shop);
    if (shop) {
      return { ...item, shop_name: shop.name };
    }
    return item;
  });

  return updatedResult;
};

export const filterItemsByGoodsName = (data, inputValue) => {
  return data.filter((item) =>
    item.goods_name.toLowerCase().includes(inputValue.toLowerCase())
  );
};
