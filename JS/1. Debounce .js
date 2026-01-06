// “A technique where a function is executed only after the user stops triggering an event for a specified time.”

function debounce(func,delay){
	let timerId = null;
	return function debounced(...args){
		if(timerId){
			clearTimeout(timerId);
		}
		timerId = setTimeout(() => {
			func.call(this,...args);
		},delay)
	}
}

