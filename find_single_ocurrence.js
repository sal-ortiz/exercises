
/*

  INPUT: An array containing two of each entry.

  OUTPUT: The value from the given input for which
    there is not two entries in the array.

*/

function single_occurrence(inp) {

  let counts = {};

  for (let inpIdx = 0; inpIdx < inp.length; inpIdx++) {
    let val = inp[inpIdx];

    counts[val] = (counts[val] && counts[val] + 1) || 1;
  }

  for (let val in counts) {
    let score = counts[val];

    if (score == 1) {
      return val;
    }

  }

  throw new Error('no entries occur only once.');
}


let cases = [
  { input: [4, 1, 1, 5, 4],     output: 5   },
  { input: [-3, 7, 2, 7, -3],   output: 2   },
  { input: [3, -1, -4, 3, -1],  output: -4   },
]

cases.forEach((expectation) => {
  let inp = expectation.input;
  let outp = expectation.output;

  console.log(inp, '\t', single_occurrence(inp) == outp);
});
