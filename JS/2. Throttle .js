// “A technique that limits a function’s execution to once per fixed time interval, regardless of how often 
// the event fires.”

function throttle(fn,delay){
	let isExecuted = 0;
	return function(...args) {
		let now = Date.now();
		if((now-isExecuted) >= delay){
			fn.apply(this,...args);
			isExecuted = now;
		}
	}
}

function handleClick() {
	console.log("Clicked at", Date.now());
}

const throttledClick = throttle(handleClick, 2000);

// Simulating rapid clicks
setInterval(() => {
	throttledClick();
}, 500);

// 1. Store last execution time
// 2. Return a wrapper function
// 3. Get current time
// 4. If difference >= delay → execute
// 5. Update last execution time