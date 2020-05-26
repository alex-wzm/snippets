/* SUM OBJECT VALUES */
const objValuesAsList = Object.values(obj);
const sum = objValuesAsList.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

// condensed
const sum = Object.values(obj).reduce((accu, curr) => accu + curr);
