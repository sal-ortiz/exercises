


function anagram(inpOne, inpTwo) {

	let regexp = /[a-z]/g;
	let wordOneRaw = inpOne.toLowerCase();
	let wordTwoRaw = inpTwo.toLowerCase();

	let wordOne = wordOneRaw.match(regexp).join('');
	let wordTwo = wordTwoRaw.match(regexp).join('');

	let matched = true;
	let idx = 0;

	for (let idx = 0; idx < wordOne.length; idx++) {
		let letter = wordOne[idx];

		if (wordTwo.indexOf(letter) < 0) {
			return false;
		}

	}

	for (idx = 0; idx < wordTwo.length; idx++) {
		let letter = wordTwo[idx];

		if (wordOne.indexOf(letter) < 0) {
			return false;
		}

	}

	return true;
}


let cases = [
	{ input: ['finder', 'friend'], 	output: true 	},
	{ input: ['not', 't o n'], 			output: true 	},
	{ input: ['oops','poos'], 			output: true 	},
  { input: ['marks','scram'],  		output: false	},
  { input: ['woke', 'ewok'],  		output: true 	},
  { input: ['lever','revel'],  		output: true	},
  { input: ['relax','rales'],  		output: false	},
  { input: ['tore','r o t'],  		output: false	},
]

cases.forEach((expectation) => {
	let inp = expectation.input;
	let outp = expectation.output;

	console.log(inp, '\t', anagram(...inp) == outp);
});

