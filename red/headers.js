// Headers is a multidimensional array.
const apiKey = "key";
const headers = [
  ["Content-Type", "application/json"],
  ["apiKey", apiKey],
];

// Write a function that adds another nested array to the headers array.
// Write a function that removes a specific nested array from the headers array.
// Write a function that converts the multidimensional array to an object.


// Write a function that adds another nested array to the headers array.
const add = (newHeader) => {
  headers.push(newHeader);
};

add(["Custom-Header", "new header"]);
console.log(headers)


// Write a function that removes a specific nested array from the headers array.
const remove = (toRemove) => {
  headers.map((header, index) => {
    return header[0].includes(toRemove[0]) || header[1].includes(toRemove[1])
      ? headers.splice(index, 1)
      : "";
  });
};
remove(["apiKey", apiKey]);
console.log(headers)


// Write a function that converts the multidimensional array to an object.
const convert = (arr) => {
  let obj = {};
  arr.map((item) => {
    obj[item[0]] = item[1];
  });
  return obj;
};
let response = convert(headers);
console.log(response)

//or

const converted = (arr) => {
  let obj = arr.reduce((endValue, currentValue) => {
        endValue[currentValue[0]] = currentValue[1] 
        return endValue
  }, {})
  return obj;
};

let res = converted(headers);
console.log(res)

//or

const converting = (arr) => {
  return Object.fromEntries(arr);
}

let r = converting(headers)
console.log(r)