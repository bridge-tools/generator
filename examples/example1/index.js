const { StringParser } = require('@bridge-tools/core');
const { generateDeals } = require('@bridge-tools/generator');

const deal = generateDeals({})[0];

console.log('North:', StringParser.stringifyHand(deal.N));
console.log('East:', StringParser.stringifyHand(deal.E));
console.log('South:', StringParser.stringifyHand(deal.S));
console.log('West:', StringParser.stringifyHand(deal.W));
