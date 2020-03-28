const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getUniqueArray = (array) => {
  const uniqueSet = new Set(array);

  return Array
    .from(uniqueSet);
};

export {
  extend,
  getUniqueArray,
};

