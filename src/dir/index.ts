export default function defaultHello(): string {
	return 'hello';
}

export function talk(): string {
	return Math.random() < 0.5 ? 'hi' : 'bye';
}