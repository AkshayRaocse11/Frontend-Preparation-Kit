let timerId;
let stop = false;

function mySetTimeout(callback, delay, ...args) {
	if (!delay) delay = 0;
	if (typeof callback !== 'function' || !callback) {
		throw new Error("callback must be a function");
	}

	stop = false; // Reset stop flag for new timeout
	const endTime = Date.now() + delay;

	function afterTimerCallTheFunction() {
		if (stop) return;

		if (Date.now() >= endTime) {
			callback.apply(this, args);
		} else {
			timerId = requestAnimationFrame(afterTimerCallTheFunction);
		}
	}

	timerId = requestAnimationFrame(afterTimerCallTheFunction);
	return timerId;
}

function myClearTimeout() {
	if (timerId !== undefined) {
		cancelAnimationFrame(timerId);
		timerId = undefined;
		stop = true;
	}
}

// Usage example
const id = mySetTimeout(() => {
	console.log("Hello after 5s");
}, 5000);

//
// ┌──────────────────────────────────────────────────────┐
// │              Call Stack (Currently Executing)         │
// └──────────────────────────────────────────────────────┘
//                          ↓
//                     (Stack Empty?)
// ↓
// ┌──────────────────────────────────────────────────────┐
// │  1. MICROTASK QUEUE (Highest Priority)               │
// │     - Promise.then(), Promise.catch(), Promise.finally()
// │     - queueMicrotask()                               │
// │     - MutationObserver                               │
// │     - process.nextTick() (Node.js only)              │
// └──────────────────────────────────────────────────────┘
//                          ↓
// ┌──────────────────────────────────────────────────────┐
// │  2. ANIMATION FRAME QUEUE (Medium Priority)          │
// │     - requestAnimationFrame()                        │
// │     - IntersectionObserver callbacks                 │
// └──────────────────────────────────────────────────────┘
//                          ↓
//                   (Render/Paint)
//                          ↓
// ┌──────────────────────────────────────────────────────┐
// │  3. MACROTASK QUEUE (Lowest Priority)                │
// │     - setTimeout()                                   │
// │     - setInterval()                                  │
// │     - setImmediate() (Node.js only)                  │
// │     - I/O operations                                 │
// │     - UI events (click, scroll, etc)                 │
// └──────────────────────────────────────────────────────┘

console.log("1. Sync");

setTimeout(() => console.log("6. setTimeout"), 0);

Promise.resolve()
	.then(() => console.log("2. Promise 1"))
	.then(() => console.log("3. Promise 2"));

queueMicrotask(() => console.log("4. queueMicrotask"));

requestAnimationFrame(() => console.log("5. RAF"));

console.log("7. Sync 2");

// Output:
// 1. Sync
// 7. Sync 2
// 2. Promise 1
// 3. Promise 2
// 4. queueMicrotask
// 5. RAF
// 6. setTimeout
