export function add(...numbers: number[]): number {
	return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}