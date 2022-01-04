const { generateDeals } = require('@bridge-tools/generator');
const {
	NodeCryptoRandomNumberGenerator,
} = require('@bridge-tools/rng-node-crypto');
const { performance } = require('perf_hooks');

const number = 100000;
const start = performance.now();

const deal = generateDeals({
	num: number,
	rng: NodeCryptoRandomNumberGenerator,
});

const end = performance.now();

const elapsed = end - start;
const perSecond = (number / elapsed) * 1000;

console.log('Deals per second: ', perSecond.toFixed(0));
