const { StringParser, Hand } = require('@bridge-tools/core');
const { generateDeals } = require('@bridge-tools/generator');

const deals = generateDeals({
	num: 10,
	filter: (deal) => {
		const shape = Hand.exactDistribution(deal.N);
		return (
			shape[0] === 4 && shape[1] === 4 && shape[2] === 3 && shape[3] === 2
		);
	},
});

for (let i = 0; i < deals.length; i++) {
	console.log('*** Deal', i + 1, '***');
	console.log('North:', StringParser.stringifyHand(deals[i].N));
	console.log('East:', StringParser.stringifyHand(deals[i].E));
	console.log('South:', StringParser.stringifyHand(deals[i].S));
	console.log('West:', StringParser.stringifyHand(deals[i].W));
	console.log();
}
