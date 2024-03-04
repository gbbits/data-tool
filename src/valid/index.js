const validateEmail = (email) => {
    // 使用正则表达式验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // 密码至少包含一个大写字母、一个小写字母、一个数字，且长度在8到20之间
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    return passwordRegex.test(password);
  };
  
  const validatePhoneNumber = (phoneNumber) => {
    // 验证手机号码，可以是纯数字或带有国家代码的格式，如+1 (123) 456-7890
    const phoneRegex = /^\+?\d{1,3}?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateNumberString = (str) => {
    // 使用 isNaN() 函数验证字符串是否是一个数字
    return !isNaN(str);
  };
  const validateStringContains = (str, char) => {
    // 使用 includes() 方法验证字符串是否包含指定的字符
    return str.includes(char);
  };
  const validateStringInArray = (str, arr) => {
    // 使用 includes() 方法验证字符串是否在数组中
    return arr.includes(str);
    
    // 或者使用 indexOf() 方法
    // return arr.indexOf(str) !== -1;
  };  


  module.exports = {
    validateEmail,
    validatePassword,
    validatePhoneNumber,
    validateNumberString,
    validateStringContains,
    validateStringInArray
  };