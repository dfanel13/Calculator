// Check if query object is array
export const isArray = (obj) => {
  let arr;
  try {
    arr = JSON.parse(obj);
  } catch (err) {
    return false;
  }
  return Array.isArray(arr);
};

export const checkIfIntegers = (obj) => {
  const arr = JSON.parse(obj);
  return arr.reduce(function (acc, curr) {
    return acc && typeof curr === "number";
  }, true);
};
