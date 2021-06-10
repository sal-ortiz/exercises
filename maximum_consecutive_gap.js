
/*

  INPUT: A numerical array.

  OUTPUT: The largest gap between individual
    values in the sorted array.

*/


function maximum_consecutive_gap(inp) {

  if (inp.length < 2) {
    return 0;
  }

  inp.sort((valOne, valTwo) => {
    return valOne - valTwo;
  });

  let gap = inp[1] - inp[0];

  for (let idx = 2; idx < inp.length; idx++) {
    let curVal = inp[idx];
    let prevVal = inp[idx - 1];

    let diff = curVal - prevVal;

    if (diff > gap) {
      gap = diff
    }

  }

  return gap;
}


let cases = [
  { input: [1, 10, 5],   output: 5  },
]

cases.forEach((expectation) => {
  let inp = expectation.input;
  let outp = expectation.output;

  console.log(inp, '\t', maximum_consecutive_gap(inp) == outp);
});
