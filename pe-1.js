// First attempt - unrefined
function findMultiplesOf3or5(n) {
    let sum = 0;
    //  const rangeN = [...Array(n).keys()];
    for (let i = 1; i < n; i++) {
      if (i % 3 === 0) {
        // console.log('3', i);
        sum += i;
      }
      if (i % 5 === 0 && i % 3 !== 0) {
        // console.log('5', i);
        sum += i;
      }
    }
    return sum;
  }
  
  findMultiplesOf3or5(1000);
  //ans 233168