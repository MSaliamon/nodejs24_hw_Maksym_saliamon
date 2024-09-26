// task 1
const str = "Node.js course";
console.log(str.length);

// task 2
function multiplyNumber(num) {
  const numLength = num.toString().length;
  let result = num;
  
  for (let i = 0; i < numLength; i++) {
    result *= 2;
  }
  
  return result;
}

console.log(multiplyNumber(33));