const sum = (arr) => {
  if (arr.length < 1) return 0;
  return arr.pop() + sum(arr);
};
