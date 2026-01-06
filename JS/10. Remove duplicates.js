//Given an array of values, remove duplicate elements and return a new array containing only unique values, 
// while maintaining the original order of elements.

// Input:  [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

function removeDuplicateSet(arr){
	return [...new Set(arr)];
}

console.log(removeDuplicateSet([1, 2, 2, 3, 4, 4, 5]));

function removeDuplicate(arr){
	const hasDuplicates = arr.reduce((acc,cur) => {
		if(!acc.includes(cur)){
			acc.push(cur);
		}
		return acc;
	},[]);
	return hasDuplicates;
}

console.log(removeDuplicate([1,2,3,4,5,5,2,2,1]));

function removeDuplicateHashMap(arr){
	let seen = {};
	let result = [];

	for(element of arr){
		if(!Object.hasOwn(seen,element)){
			seen[element] = element;
			result.push(element);
		}
	}

	return result;
}
console.log(removeDuplicateHashMap([1,2,3,4,5,5,2,2,1]));

