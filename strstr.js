

/*

  INPUT: two strings. A string to search for
    and a string in which to search

  OUTPUT: an index where the given needle can be found
    within the haystack. if the needle is not found,
    otherwise a -1 is returned.

*/


function strstr(needle, haystack) {
  let haystackIdx = 0;
  let matchIdx = -1;
  let needleIdx = 0;

  for (haystackIdx; haystackIdx < haystack.length; haystackIdx++) {
    let haystackChar = haystack[haystackIdx];
    let needleChar = needle[needleIdx];

    if (haystackChar == needleChar) {

      if (needleIdx == 0) {
        matchIdx = haystackIdx;
      }

      needleIdx++;

    } else {

      needleIdx = 0;
      matchIdx = -1;
    }

    if (needleIdx == needle.length) {
      return matchIdx;
    }

  }

  return matchIdx;
}


let cases = [
  { input: ['cdef', 'abcdefh'],    output: 2  },
  { input: ['cat', 'pussycat'],    output: 5  },
  { input: ['cdef', 'hfedcba'],    output: -1 },
]

cases.forEach((expectation) => {
  let inp = expectation.input;
  let outp = expectation.output;

  let res = strstr(...inp);

  console.log(inp, '\t', res == outp);
});
