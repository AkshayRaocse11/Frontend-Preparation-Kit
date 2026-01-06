//"reduce is used to accumulate array values into a single result like number, object, or array."

Array.prototype.myReduce = function(callback, initialState) {
	if (this == null) {
		throw new TypeError("Not an Array");
	}

	if (typeof callback !== "function") {
		throw new TypeError("Not Function");
	}

	if(typeof initialState === "undefined") {
		throw new TypeError("Inital state is invalid");
	}
	
	const arr = Object(this);
	const len = arr.length >>> 0;
	
	let acc = array[0];
	let index = 1;

	if(initialState !== undefined){
		acc = initialState;
		index = 0;
	}

	for(let i=index; i<len; i++) {
		if(i in arr){
			acc = callback.call(this,acc, arr[i],i,arr);
		}
	}
	return acc;
}	