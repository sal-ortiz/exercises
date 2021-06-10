
/*

  INPUT: A numerical array.

  OUTPUT: The least positive number, larger than 0,
    not included in the array's sequence.

    ex: the input [-1, 0, 1, 4, 6] yields a 2.

*/


function least_excluded_positive_integer(inp) {

  let greatest = inp.reduce((acc, val) => {
    if (val > acc) {
      return val;
    }

    return acc;
  }, 0);

  let outp = greatest + 1;

  for (let inpIdx = 0; inpIdx < inp.length; inpIdx++) {
    let val = inp[inpIdx];

    for (let count = 1; count <= val; count++) {

      if (!inp.includes(count) && count < outp) {
        outp = count;

      }

    }

  }

  return outp;
}


let cases = [
  { input: [0, 1, 5, 4],      output: 2   },
  { input: [-3, 7, 2, 4, 3],  output: 1   },
  { input: [-4, -1, 1, 3],    output: 2   },
  { input: [-3, -2],          output: 1   },
  { input: [0, 1, 5, 4],      output: 2   },
  { input: [0, 1, 2, 4],      output: 3   },
]

cases.forEach((expectation) => {
  let inp = expectation.input;
  let outp = expectation.output;

  console.log(inp, '\t', least_excluded_positive_integer(inp) == outp);
});
