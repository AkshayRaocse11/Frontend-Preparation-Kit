// Disable SSL certificate verification (development only)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const promise =  fetch('https://dummyjson.com/users');
const promise1 = fetch('https://dummyjson.com/users');
const promise2 = fetch('https://dummyjson.com/users');

async function callApi(){
	const promiseAll = await Promise.all([promise,promise1,promise2]);
	console.log(promiseAll);
}

callApi()