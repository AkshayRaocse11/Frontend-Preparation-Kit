//Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, 
// each taking one argument at a time.

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

function  currying(fn){
	return function curried(...args){
		if(args.length >= fn.length){
			return fn.call(this,...args);
		}
		return function next(...nextArgs){
			return curried.call(this,...args.concat(nextArgs));
		}
	}
}