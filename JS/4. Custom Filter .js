// "filter returns a new array containing only those elements for which the callback returns true."

// “When an array-like object is passed, Object(this) safely converts the calling value into an object,
// allowing indexed access and length handling without assuming it’s a real array.”

Array.prototype.myFilter = function (callbackFn, thisArg) {
	// 1. null / undefined check
	if (this == null) {
		throw new TypeError('Array.prototype.myFilter called on null or undefined');
	}

	// 2. callback must be function
	if (typeof callbackFn !== 'function') {
		throw new TypeError(callbackFn + ' is not a function');
	}

	// 3. ToObject
	const arr = Object(this);

	// 4. Safe length
	const len = arr.length >>> 0;

	// 5. Result array
	const result = [];

	// 6. Iterate only existing indexes
	for (let i = 0; i < len; i++) {
		if (i in arr) {
			if (callbackFn.call(thisArg, arr[i], i, arr)) {
				result.push(arr[i]); // ✅ push element, not boolean
			}
		}
	}

	return result;
};

