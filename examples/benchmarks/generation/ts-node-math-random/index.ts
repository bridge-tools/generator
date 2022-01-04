import { generateDeals } from '@bridge-tools/generator';
import { performance } from 'perf_hooks';

const number = 100000;
const start = performance.now();

const deal = generateDeals({
	num: number,
});

const end = performance.now();

const elapsed = end - start;
const perSecond = (number / elapsed) * 1000;

console.log('Deals per second: ', perSecond.toFixed(0));
