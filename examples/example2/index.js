const { StringParser } = require('@bridge-tools/core');
const { generateDeals } = require('@bridge-tools/generator');

window.generate = () => {
	const deal = generateDeals({})[0];

	document.getElementById('n-hand').innerHTML = StringParser.stringifyHand(
		deal.N
	);
	document.getElementById('e-hand').innerHTML = StringParser.stringifyHand(
		deal.E
	);
	document.getElementById('s-hand').innerHTML = StringParser.stringifyHand(
		deal.S
	);
	document.getElementById('w-hand').innerHTML = StringParser.stringifyHand(
		deal.W
	);
};
