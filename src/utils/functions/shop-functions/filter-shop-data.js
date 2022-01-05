const filterShopData = (datas, id) => {
  const filterd = datas.filter((data) => data.routeName === id);

  return filterd[0];
};

export default filterShopData;
