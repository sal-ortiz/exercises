
/*
  INPUT: an arbitrary list of numbers.

  OUTPUT: an array containing two consecutive integers from the
    the input whose product is larger than all other groups.

*/


function max_product_subarray(inp) {
  let maxProd = 0;
  let maxIdx = 0;

  for (let idx = 0; idx < inp.length - 1; idx++) {
    let curNum = inp[idx];
    let nextNum = inp[idx + 1];

    let prod = curNum * nextNum;

    if (prod > maxProd) {
      maxProd = prod;
      maxIdx = idx;

    }

  }

  return inp.slice(maxIdx, maxIdx + 2);
}


let cases = [
  { input: [2, 3, -2, 4],   output: [2, 3]   },
  { input: [2, 6, 3, -1],   output: [6, 3]   },
]

cases.forEach((expectation) => {
  let inp = expectation.input;
  let outp = JSON.stringify(expectation.output);

  let res = max_product_subarray(inp);

  console.log(res);

  console.log(inp, '\t', JSON.stringify(res) == outp);
});
