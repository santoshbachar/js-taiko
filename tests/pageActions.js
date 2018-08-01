var _selectors = require('./selectors')
const {
    scrollTo,scrollUp
} = require('taiko');

step("Scroll to <table>", async function(table) {
	await scrollTo(_selectors.getElement(table));
});

step("Scroll up <table>", async function(table) {
	await scrollUp(_selectors.getElement(table));
});