//task 1
const str = "Node.js course";
console.log(str.length);

//task 2
function multiplyNumber(number) {
    const numLength = number.toString().length;
    let result = number;
    for (let i = 0; i < numLength; i++) {
      result *= 2;
    }
    return result;
  }
  
  console.log(multiplyNumber(33));