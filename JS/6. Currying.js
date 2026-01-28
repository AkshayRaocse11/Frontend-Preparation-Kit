//Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, 
// each taking one argument at a time.

// Not enough args → return function to collect more args
// Enough args     → execute original function and return value

// fn.length
// → Number of arguments the original function expects
//
// args.length >= fn.length
// → If we have all required arguments, call the function
//
// fn.apply(this, args)
// → Execute original function with collected arguments
//
// args.concat(nextArgs)
// → Combine old + new arguments
//
// return curried(...)
// → Keep collecting until enough arguments arrive

function currying(fn) {
	// This function returns a new function that will COLLECT arguments

	return function curried(...args) {
		// args = all arguments collected so far
		// These args are remembered using CLOSURE

		// If we already have enough arguments,
		// execute the original function
		if (args.length >= fn.length) {
			return fn.call(this, ...args);
		}

		// If we do NOT have enough arguments,
		// we MUST return another function
		// This function exists ONLY to collect more arguments later
		return function next(...nextArgs) {
			// nextArgs = new arguments from the next call

			// Combine old + new arguments
			// and call curried again
			return curried.call(this, ...args.concat(nextArgs));
		};
	};
}

function add(a, b, c) {
	return a + b + c;
}

curriedAdd(1)(2)(3);      // ✅ 6
curriedAdd(1, 2)(3);     // ✅ 6
curriedAdd(1)(2, 3);     // ✅ 6
curriedAdd(1, 2, 3);     // ✅ 6

