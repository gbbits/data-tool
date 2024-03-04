const removeDuplicates = (arr) => {
    return [...new Set(arr)];
  };

  const arrayAverage = (arr) => {
    return arr.reduce((total, current) => total + current, 0) / arr.length;
  };
  const arrayMax = (arr) => {
    return Math.max(...arr);
  };
  
  const arrayMin = (arr) => {
    return Math.min(...arr);
  };
  const ascendingSort = (arr) => {
    return arr.slice().sort((a, b) => a - b);
  };
  
  const descendingSort = (arr) => {
    return arr.slice().sort((a, b) => b - a);
  };
  const filterArray = (arr, condition) => {
    return arr.filter(condition);
  };

  module.exports = {
    removeDuplicates,
    arrayAverage,
    arrayMax,
    arrayMin,
    ascendingSort,
    descendingSort,
    filterArray
  };