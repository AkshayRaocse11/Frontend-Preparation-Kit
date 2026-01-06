//“bind returns a new function where the value of this is fixed to the given object and 
// cannot be overridden by call site, call, or apply.”

// 🧠 Key Characteristics 
// Does not execute immediately
// Returns a new function
// this binding is permanent
// Supports partial application (preset arguments)
// Binding cannot be changed later

Function.prototype.myBind = function(thisArg,...args){
	//const contextThis = thisArg ?? globalThis;
	const contextThis = thisArg == null ? globalThis : Object(thisArg); //primitive values will be converted to objects.
	contextThis.tempFn = this;
	return function(...argsArray){
		return contextThis.tempFn(...args, ...argsArray);
	}
}

function greet(greeting, city) {
	console.log(greeting, this.name, city);
}

const user = { name: "Akshay" };

const boundGreet = greet.myBind(user, "Hello");
boundGreet("Bangalore");

function showType() {
	console.log(this);
	console.log(typeof this);
}

showType.call(10);
//output
//Number {10}
//object
// reason is primitive values will be converted to objects. example for this


//bind maps (fixes) the object to this and allows passing function arguments either partially or fully.
// “This returned function is required so bind can defer execution and merge bind-time arguments with call-time arguments.”
// Final clarity check
// bind ≠ execute
// bind = store context + args
// returned function = execute later
