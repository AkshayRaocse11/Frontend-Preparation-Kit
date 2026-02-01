/**
 * =====================================================
 * PLAIN JAVASCRIPT PROMISES – TRICKS & TIPS (INTERVIEW)
 * =====================================================
 * then → success
 * catch → error
 * finally → cleanup
 * all → all or nothing
 * allSettled → everything
 * race → fastest
 * any → first success
 * Focus:
 * - What a Promise is
 * - States & lifecycle
 * - then / catch / finally
 * - Chaining
 * - Common interview traps
 * - Real-world patterns
 */

/**
 * -----------------------------------------------------
 * 1. What is a Promise?
 * -----------------------------------------------------
 *
 * DEFINITION:
 * A Promise is an object that represents the eventual result of an asynchronous operation,
 * which can either be fulfilled with a value, rejected with an error, or remain pending.
 *
 * A Promise is an OBJECT.
 */

const promiseExample = new Promise((resolve, reject) => {
	resolve("Success");
});

/**
 * -----------------------------------------------------
 * 2. Promise States (INTERVIEW MUST)
 * -----------------------------------------------------
 *
 * - pending   → initial state
 * - fulfilled → resolve() called
 * - rejected  → reject() called
 *
 * A promise settles ONLY ONCE.
 */

/**
 * -----------------------------------------------------
 * 3. Basic then / catch / finally
 * -----------------------------------------------------
 */
const fetchData = new Promise((resolve, reject) => {
	const success = true;

	if (success) {
		resolve("Data received");
	} else {
		reject("Error occurred");
	}
});

fetchData
	.then(result => {
		console.log(result); // Data received
	})
	.catch(error => {
		console.log(error);
	})
	.finally(() => {
		console.log("Always runs");
	});

/**
 * TIP:
 * finally does NOT receive resolved value.
 */

/**
 * -----------------------------------------------------
 * 4. Promise chaining ⭐ VERY IMPORTANT
 * -----------------------------------------------------
 */
const chainPromise = new Promise(resolve => {
	resolve(10);
});

chainPromise
	.then(num => num * 2)
	.then(num => num + 5)
	.then(result => {
		console.log(result); // 25
	});

/**
 * INTERVIEW FACT:
 * Each then() returns a NEW Promise.
 */

/**
 * -----------------------------------------------------
 * 5. Returning a Promise inside then()
 * -----------------------------------------------------
 */
function asyncAdd(num) {
	return new Promise(resolve => {
		setTimeout(() => resolve(num + 10), 1000);
	});
}

asyncAdd(5)
	.then(result => {
		return asyncAdd(result);
	})
	.then(finalResult => {
		console.log(finalResult); // 25
	});

/**
 * -----------------------------------------------------
 * 6. Error handling in chaining
 * -----------------------------------------------------
 */
Promise.resolve(1)
	.then(num => {
		throw new Error("Something broke");
	})
	.then(() => {
		console.log("Will not run");
	})
	.catch(err => {
		console.log(err.message); // Something broke
	});

/**
 * TIP:
 * One catch handles all previous errors.
 */

/**
 * -----------------------------------------------------
 * 7. Promise.all()
 * -----------------------------------------------------
 */
Promise.all([
	Promise.resolve(1),
	Promise.resolve(2),
	Promise.resolve(3)
]).then(values => {
	console.log(values); // [1, 2, 3]
});

/**
 * INTERVIEW FACT:
 * - Fails fast (rejects if ANY promise rejects)
 */

/**
 * -----------------------------------------------------
 * 8. Promise.allSettled()
 * -----------------------------------------------------
 */
Promise.allSettled([
	Promise.resolve("OK"),
	Promise.reject("FAIL")
]).then(results => {
	console.log(results);
});

/**
 * TIP:
 * Use when you want ALL results, success or failure.
 */

/**
 * -----------------------------------------------------
 * 9. Promise.race()
 * -----------------------------------------------------
 */
Promise.race([
	new Promise(res => setTimeout(() => res("Fast"), 100)),
	new Promise(res => setTimeout(() => res("Slow"), 300))
]).then(result => {
	console.log(result); // Fast
});

/**
 * -----------------------------------------------------
 * 10. Promise.any()
 * -----------------------------------------------------
 */
Promise.any([
	Promise.reject("Error"),
	Promise.resolve("First success")
]).then(result => {
	console.log(result); // First success
});

/**
 * INTERVIEW FACT:
 * Rejects only if ALL promises reject.
 */

/**
 * -----------------------------------------------------
 * 11. async / await is syntax sugar
 * -----------------------------------------------------
 */
async function getData() {
	try {
		const result = await Promise.resolve("Hello");
		console.log(result);
	} catch (err) {
		console.log(err);
	}
}

getData();

/**
 * INTERVIEW LINE:
 * async/await is built on top of Promises.
 */

/**
 * -----------------------------------------------------
 * 12. Common Promise traps ❌
 * -----------------------------------------------------
 */

// ❌ Not returning promise
Promise.resolve(1).then(num => {
	Promise.resolve(num + 1);
});

// ✅ Correct
Promise.resolve(1).then(num => {
	return Promise.resolve(num + 1);
});

/**
 * -----------------------------------------------------
 * FINAL GOLDEN RULES ⭐
 * -----------------------------------------------------
 *
 * - Promise settles only once
 * - then() always returns a promise
 * - catch handles previous errors
 * - async/await = promises underneath
 * - Promise.all fails fast
 */
