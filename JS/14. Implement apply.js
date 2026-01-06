// What apply does
// Invokes a function immediately
// Explicitly sets this
// Accepts arguments as an array
// Returns the function’s result

Function.prototype.myApply = function(thisArg,argsArray) {
	 const contextThis =
		 thisArg == null || thisArg == undefined ?  // if this null/undefined -> point global object
		 	globalThis : 
		 	Object(thisArg); // if primitive box it to Object by default
	 const fnKey = Symbol(); // generate unique to avoid collision 
	 contextThis[fnKey] = this; // attach thisArg context to the bounding function which is to be invoked
	 const result = Array.isArray(argsArray) ? contextThis[fnKey](...argsArray) : contextThis[fnKey](); // check arguments is array or not if not call without argsArray
	 delete contextThis[fnKey]; // cleanup of unique key
	 return result; // functions return value
}

function introduce(city, country) {
	return `Hi, I am ${this.name} from ${city}, ${country}`;
}
const user = {
	name: "Akshay"
};
const result = introduce.myApply(user, ["Bangalore", "India"]);
console.log(result);


// this → function being called
// thisArg → object to bind as this
// Function is temporarily attached to the object
// Arguments array is spread
// Function executes
// Temporary reference is removed

// Edge cases handled
// null / undefined → globalThis
// Primitive values → boxed using Object()
// No property collision (uses Symbol)
// No side effects (cleanup done)

// apply invokes a function immediately while explicitly setting this, with arguments supplied as an array.