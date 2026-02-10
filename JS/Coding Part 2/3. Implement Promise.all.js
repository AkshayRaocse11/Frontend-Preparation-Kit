export default function promiseAll(iterable) {
	return new Promise((res, rej) => {
		const array = Array.from(iterable);
		const results = new Array(array.length);
		let completed = 0;

		if (array.length === 0) {
			return res(results);
		}

		array.forEach((p, i) => {
			Promise.resolve(p).then(value => {
				results[i] = value;
				completed += 1;
				if (completed === array.length) {
					res(results);
				}
			}).catch(err => {
				rej(err);
			});
		});
	});
}

// Resolved example.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('foo');
	}, 100);
});

await promiseAll([p0, p1, p2]); // [3, 42, 'foo']

// Rejection example.
const p0 = Promise.resolve(30);
const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('An error occurred!');
	}, 100);
});

try {
	await promiseAll([p0, p1]);
} catch (err) {
	console.log(err); // 'An error occurred!'
}
