// “A technique that limits a function’s execution to once per fixed time interval, regardless of how often the event fires.”

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