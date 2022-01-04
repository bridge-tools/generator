const { Types, Hand } = require('@bridge-tools/core');
const { generateDeals } = require('@bridge-tools/generator');

const distributions = {};
const batches = 1; //1000;
const number = 10000;

console.log('Running', batches, 'batches of size', number);

for (let i = 0; i < batches; i++) {
	const deals = generateDeals({
		num: number,
	});

	for (const deal of deals) {
		const distribution = Hand.distribution(deal[Types.Compass.North]);

		distributions[distribution] = (distributions[distribution] ?? 0) + 1;
	}

	if (i % 100 === 0) {
		console.log('Finished batch:', i);
	}
}

console.log('The distribution of hands is:');
const dists = Object.entries(distributions)
	.sort(([_, a], [_2, b]) => a - b)
	.reverse();

for (const [d, num] of dists) {
	console.log(`${d}:`, `${((num / number / batches) * 100).toFixed(4)}`);
}
