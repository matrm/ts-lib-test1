import { add } from '../dist/index.js';

function tests(): string {
	let results: string[] = [];

	{
		const testName = '2-parameter test';
		if (add(2, 3) === 5) {
			results.push(`${testName} passed.`);
		} else {
			results.push(`${testName} failed.`);
		}
	}

	{
		const testName = '4-parameter test';
		if (add(2, 3, 0, -1) === 4) {
			results.push(`${testName} passed.`);
		} else {
			results.push(`${testName} failed.`);
		}
	}

	return results.join('\n');
}

console.log(tests());