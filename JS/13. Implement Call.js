// call invokes a function immediately while explicitly setting the value of this, with arguments passed individually.

// 🧠 Key Points
// Executes immediately
// Explicitly sets this
// Arguments are passed one by one
// Does not create a new function

Function.prototype.myCall = function (thisArg, ...argsArray) {
	const contextThis =
		thisArg === null || thisArg === undefined
			? globalThis
			// if thisArg is null or undefined, default to global object (non-strict mode)
			: Object(thisArg);
	// otherwise, wrap it using Object() to box primitive values (number, string, boolean)

	const fnKey = Symbol();
	// create a unique key to avoid property name collision

	contextThis[fnKey] = this;
	// temporarily attach the function to the context object

	const result = contextThis[fnKey](...argsArray);
	// invoke the function so `this` refers to contextThis

	delete contextThis[fnKey];
	// cleanup to avoid side effects on the object

	return result;
};

function greet(city, country) {
	return `Hi ${this.name} from ${city}, ${country}`;
}

const user = { name: "Akshay" };

const output = greet.myCall(user, "Bangalore", "India");
console.log(output);
