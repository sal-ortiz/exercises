

/*

  INPUT: a string containing any number of alphanumeric characters and
    an integer indicating the size of each group to be removed.

  OUTPUT: the given input string with each same consecutive character
    group, whose size is equal to the given integer, removed.

*/


function remove_consecutive_characters(str, count) {
  let group = [str[0]];
  let curIdx = 1;

  do {
    let curVal = str[curIdx];

    if (group.includes(curVal)) {
      group.push(curVal);

    } else {

      if (group.length == count) {
        let pref = str.slice(0, curIdx - group.length);
        let suff = str.slice(curIdx);

        curIdx = curIdx - group.length;

        str = pref + suff;
      }

      group = [curVal];
    }

    curIdx++;

  } while (curIdx < str.length);

  return str;
}


let cases = [
  { input: ['aabcd', 2],    output: 'bcd'       },
  { input: ['aabbccd', 2],  output: 'd'         },
  { input: ['aabbccd', 3],  output: 'aabbccd'   },
]

cases.forEach((expectation) => {
  let inp = expectation.input;
  let outp = expectation.output;

  let res = remove_consecutive_characters(...inp);

  console.log(inp, '\t', res == outp);
});
