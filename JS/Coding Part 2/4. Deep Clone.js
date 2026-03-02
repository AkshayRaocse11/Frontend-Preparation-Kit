export default function deepClone(value) {
	// Return primitives and functions as is
	if (value === null || typeof value !== "object") {
		return value;
	}

	// Handle arrays
	if (Array.isArray(value)) {
		return value.map((item) => deepClone(item));
	}

	// Handle plain objects
	const result = {};
	for (const [key, val] of Object.entries(value)) {
		result[key] = deepClone(val);
	}
	return result;
}