/**
 * =====================================================
 * ERROR HANDLING IN JAVASCRIPT (INTERVIEW)
 * =====================================================
 *
 * Errors are part of normal JS flow.
 * Good engineers HANDLE errors, not ignore them.
 */

/**
 * -----------------------------------------------------
 * 1. try / catch / finally
 * -----------------------------------------------------
 */
try {
	const result = JSON.parse("{ invalid json }");
} catch (error) {
	console.log("Error caught:", error.message);
} finally {
	console.log("Always runs");
}

/**
 * INTERVIEW FACT:
 * finally runs whether error occurs or not.
 */

/**
 * -----------------------------------------------------
 * 2. throw custom errors
 * -----------------------------------------------------
 */
function divide(a, b) {
	if (b === 0) {
		throw new Error("Division by zero");
	}
	return a / b;
}

try {
	divide(10, 0);
} catch (err) {
	console.log(err.message);
}

/**
 * -----------------------------------------------------
 * 3. Error object properties
 * -----------------------------------------------------
 */
try {
	throw new TypeError("Wrong type");
} catch (err) {
	console.log(err.name);    // TypeError
	console.log(err.message); // Wrong type
	console.log(err.stack);   // Stack trace
}

/**
 * -----------------------------------------------------
 * 4. Errors in async / await
 * -----------------------------------------------------
 */
async function asyncError() {
	throw new Error("Async crash");
}

asyncError().catch(err => console.log(err.message));

/**
 * try/catch with async
 */
async function asyncHandled() {
	try {
		await asyncError();
	} catch (err) {
		console.log("Handled:", err.message);
	}
}

asyncHandled();

/**
 * -----------------------------------------------------
 * 5. Promise error propagation
 * -----------------------------------------------------
 */
Promise.resolve()
	.then(() => {
		throw new Error("Broken");
	})
	.catch(err => console.log(err.message));

/**
 * -----------------------------------------------------
 * 6. Global error handling (Brows*
