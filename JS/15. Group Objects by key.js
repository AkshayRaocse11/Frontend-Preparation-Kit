// Groups an array of objects by a given key
// Returns an object where each key maps to an array of matching objects
function groupObjectByKeys(data, groupKey) {

	// If no grouping key is provided, return an empty object
	// If data is missing or empty, return an empty object
	if (!groupKey || !data || data.length === 0) {
		return {};
	}

	// Use reduce to iterate over the array and build the grouped result
	return data.reduce((acc, cur) => {

		// Extract the value used for grouping from the current object
		const key = cur[groupKey];

		// Skip objects that do not have the grouping key
		if (!key) {
			return acc;
		}

		// Initialize the group array if it does not exist
		if (!acc[key]) {
			acc[key] = [];
		}

		// Add the current object to its corresponding group
		acc[key].push(cur);

		// Return the accumulator for the next iteration
		return acc;

	}, {});
}

function groupObjectByKeysWithoutReduce(data,groupKey){
	if(!groupKey){
		return {};
	}
	if(!data || data.length == 0){
		return {};
	}
	const result = {};

	for(const item of data){
		const key = item[groupKey];
		if(!key){
			continue;
		}
		if(!result[key]){
			result[key] = []
		}
		result[key].push(item);
	}
	return result;
}

// Example usage
console.log(groupObjectByKeys(data, "category"));
console.log(groupObjectByKeysWithoutReduce(data, "category"));
