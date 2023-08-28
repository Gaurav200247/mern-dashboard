function createObjectFromArrayPairs(keysArray, valuesArray) {
  if (keysArray.length !== valuesArray.length) {
    throw new Error("Arrays must have the same length");
  }

  const resultObject = {};

  for (let i = 0; i < keysArray.length; i++) {
    resultObject[keysArray[i]] = valuesArray[i];
  }

  return resultObject;
}

module.exports = { createObjectFromArrayPairs };
