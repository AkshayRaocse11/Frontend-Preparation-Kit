// 1️⃣ Normal Function — this depends on call site

function show() {
	console.log(this);
}
show();

// 📌 Output:
// non-strict → window
// strict → undefined
// 📝 Rule: Normal function → this depends on call site


// 2️⃣ Method Call — object on the left of the dot

const obj = {
	name: "Akshay",
	greet() {
		console.log(this.name);
	}
};

obj.greet();

// 📌 Output:
// Akshay
// 📝 Rule: this points to the object on the left of the dot (call site)


// 3️⃣ Detached Method — binding lost

const obj1 = {
	name: "Akshay",
	show() {
		console.log(this.name);
	}
};

const fn = obj1.show; // function reference, not invoked yet
fn(); // invoked in global scope

// 📌 Output:
// undefined (or error in strict mode)
// 📝 Rule: Binding is lost when function is detached from object


// 4️⃣ call — Explicit Binding

function showCall() {
	console.log(this.name);
}

const user = { name: "Akshay" };
showCall.call(user);

// 📌 Output:
// Akshay
// 📝 Rule: call explicitly sets this at invocation time


// 5️⃣ bind — Returns New Function

function showBind() {
	console.log(this.name);
}

const userBind = { name: "Akshay" };
const boundFn = showBind.bind(userBind);
// bind permanently binds this and returns a new function

boundFn(); // call site, but this is already bound

// 📌 Output:
// Akshay
// 📝 Rule: bind does not execute immediately


/// 6️⃣ Arrow Function — Lexical this

const objArrow = {
	name: "Akshay",
	show: () => {
		console.log(this);
	}
};

objArrow.show();

// 📌 Output:
// window (or undefined in modules)
// 📝 Reason: arrow function takes this from nearest lexical scope
// 📝 Rule: Arrow function ignores call site


// 7️⃣ Arrow Inside Normal Function (MOST IMPORTANT)

const objArrow2 = {
	name: "Akshay",
	show() {
		const arrow = () => {
			console.log(this.name);
			// lexical surrounding scope this value is objArrow2 (from parent)
		};
		arrow();
	}
};

objArrow2.show();

// 📌 Output:
// Akshay
// 📝 Rule: Arrow inherits this from surrounding function


/// 8️⃣ Arrow Function with call (Interview Trap)

const arrow = () => {
	console.log(this);
};

arrow.call({ a: 1 });

// 📌 Output:
// window / undefined
// 📝 Rule: call / apply / bind do NOT work on arrow functions

// “call, apply, and bind don’t work on arrow functions because arrow functions don’t have their own this; 
// they lexically bind this from the surrounding scope.”

