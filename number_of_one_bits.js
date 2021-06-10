
/*

  INPUT: An integer of any bit width

  OUTPUT: The total number of 1's in the binary
    representation of the given input.

*/


function number_of_one_bits(inp) {
  let mask = 1;
  let count = 0;

  do {

    let bit = parseInt((inp / mask)) & 1;

    if (bit == 1) {
      count++;
    }

    mask = mask * 2;
  } while (mask <= inp);

  return count;
}


let cases = [
  { input: 0b00000000,  output: 0   },
  { input: 0b00000100,  output: 1   },
  { input: 0b01010101,  output: 4   },
  { input: 0b10101010,  output: 4   },
  { input: 0b01001000,  output: 2   },
  { input: 0b00100010,  output: 2   },
]

cases.forEach((expectation) => {
  let inp = expectation.input;
  let outp = expectation.output;

  console.log(inp, '\t', number_of_one_bits(inp) == outp);
});
