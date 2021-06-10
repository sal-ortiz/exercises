
/*

  INPUT: a string of any length containing vowels and consonants.

  OUTPUT: a count of the number of sequential letter combinations that
    begin with a consontant and end with a vowel or vice versa.

*/


function vowel_and_consonant_substrings(inp) {

  let groups = [];

  for (let baseIdx = 0; baseIdx < inp.length; baseIdx++) {

    for (let cmpIdx = 1; cmpIdx <= inp.length - baseIdx; cmpIdx++) {
      let str = inp.substr(baseIdx, cmpIdx);

      groups.push(str);
    }

  }

  let matches = groups.filter((str) => {
    let first = str.slice(0, 1);
    let last = str.slice(-1);

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    if ((vowels.includes(first) && !vowels.includes(last))
      || (!vowels.includes(first) && vowels.includes(last))) {

      return true;
    }

    return false;
  });

  return matches.length;
}


let cases = [
  { input: ['aba'], output: 2 },
  { input: ['a'],   output: 0 },
]

cases.forEach((expectation) => {
  let inp = expectation.input;
  let outp = expectation.output;

  console.log(inp, '\t', vowel_and_consonant_substrings(...inp) == outp);
});
