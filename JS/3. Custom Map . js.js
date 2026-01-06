// “map() is used to transform each element of an array and return a new array without mutating the original one.”

// If this is null or undefined → throw TypeError
// If callback is not a function → throw TypeError
//
// Let O = Object(this)
// Let len = O.length >>> 0
// Let result = new Array(len)
//
// For i from 0 to len - 1:
// If i exists in O:
// result[i] = callback(O[i], i, O)
//
// Return result

Array.prototype.myMap = function (callbackFn, thisArg) {
	// 1. null / undefined check
	if (this == null) {
		throw new TypeError('Array.prototype.myMap called on null or undefined');
	}

	// 2. callback check
	if (typeof callbackFn !== 'function') {
		throw new TypeError(callbackFn + ' is not a function');
	}

	// 3. ToObject
	const O = Object(this);

	// 4. Safe length
	const len = O.length >>> 0;

	// 5. Result array
	const result = new Array(len);

	// 6. Loop existing elements only
	for (let i = 0; i < len; i++) {
		if (i in O) {
			result[i] = callbackFn.call(thisArg, O[i], i, O);
		}
	}

	// 7. Return
	return result;
};

let array = [1,2,3,4,,5];
let res = array.myMap((a, b) => a + b);;
console.log(res);

