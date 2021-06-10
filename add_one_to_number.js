
/*
  INPUT: A number expressed in the form of a numerical array

    ex: the number 425 is expressed as [4, 2, 5]


  OUTPUT: An array representing the given input after having
    been incremented by 1.

    ex: 425, expressed as [4, 2, 5] is incremented and returned
      as 426, expressed as [4, 2, 6].

*/


function add_one_to_number(inp) {
  let inpStr = inp.join('');
  let inpNum = parseInt(inpStr) + 1;

  let outpStr = inpNum.toString();
  let outp = Array.from(outpStr);

  outp = outp.map((entry) => {
    return parseInt(entry);
  });

  return outp;
}


let cases = [
  { input: [1, 2, 3],   output: [1, 2, 4]   },
]

cases.forEach((expectation) => {
  let inp = expectation.input;
  let outp = JSON.stringify(expectation.output);

  let res = add_one_to_number(inp);

  console.log(inp, '\t', JSON.stringify(res) == outp);
});
