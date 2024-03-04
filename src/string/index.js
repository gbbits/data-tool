const substring = (str, start, end) => {
    // 使用 substring() 方法截取字符串
    return str.substring(start, end);
    
    // 或者使用 slice() 方法
    // return str.slice(start, end);
  };
  const capitalizeFirstLetter = (str) => {
    // 使用 charAt() 方法获取第一个字符并转换为大写，然后与剩余部分拼接
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const convertToUpperCase = (str) => {
    return str.toUpperCase();
  };
  
  const convertToLowerCase = (str) => {
    return str.toLowerCase();
  };
  const trimString = (str) => {
    return str.trim(); // 去除字符串两端的空格
  };
  
  const reverseString = (str) => {
    return str.split('').reverse().join(''); // 反转字符串
  };
  
  const replaceSubstring = (str, oldSubstr, newSubstr) => {
    return str.replace(oldSubstr, newSubstr); // 替换字符串中的特定子串
  };

  module.exports = {
    substring,
    capitalizeFirstLetter,
    convertToUpperCase,
    convertToLowerCase,
    trimString,
    reverseString,
    replaceSubstring
  };