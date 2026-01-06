export default function flatten(value) {
	let result = [];

	function flattenRecursively(arr){
		if(arr.length === 0){
			return;
		}
		for(const element of arr) {
			if (Array.isArray(element)) {
				flattenRecursively(element)
			} else if(typeof element === 'object'){
				flattenRecursively(element)
			} else {
				result.push(element)
			}
		}
	}

	flattenRecursively(value);
	return result;
}

function flattenUsingReduce(arr) {
	if (!Array.isArray(arr)) return [];

	return arr.reduce((acc, item) => {
		return acc.concat(
			Array.isArray(item) ? flattenUsingReduce(item) : item
		);
	}, []);
}

export default function dfs(value) {
	const result = [];

	function dfs(val) {
		if (Array.isArray(val)) {
			for (const item of val) {
				dfs(item);
			}
		} else if (val !== null && typeof val === 'object') {
			for (const item of Object.values(val)) {
				dfs(item);
			}
		} else {
			result.push(val);
		}
	}

	dfs(value);
	console.log(result)
	return result;
}

dfs([1, { a: 2, b: { c: 3 } }, 4])

// Flatten object to dot-notation keys

//{ a: { b: 2 }, c: 3 }
// → { "a.b": 2, "c": 3 }


