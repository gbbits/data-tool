const parseJSON = (jsonString) => {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error("Invalid JSON string:", error);
      return null;
    }
  };
  const stringifyJSON = (obj) => {
    return JSON.stringify(obj);
  };
  const mergeJSON = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  };
  const deepCopyJSON = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };
  const formatJSON = (obj) => {
    return JSON.stringify(obj, null, 2); // 使用两个空格进行缩进
  };

  module.exports = {
    parseJSON,
    stringifyJSON,
    mergeJSON,
    deepCopyJSON,
    formatJSON
  };
          