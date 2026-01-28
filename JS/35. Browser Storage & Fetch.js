/**
 * =====================================================
 * BROWSER STORAGE & FETCH API (INTERVIEW)
 * =====================================================
 */

/**
 * -----------------------------------------------------
 * 1. localStorage
 * -----------------------------------------------------
 *
 * - Persistent
 * - Key-value (string only)
 */
localStorage.setItem("user", JSON.stringify({ name: "Akshay" }));

const user = JSON.parse(localStorage.getItem("user"));
console.log(user.name);

/**
 * -----------------------------------------------------
 * 2. sessionStorage
 * -----------------------------------------------------
 *
 * - Cleared when tab closes
 */
sessionStorage.setItem("token", "abc123");

/**
 * -----------------------------------------------------
 * 3. Storage limitations
 * -----------------------------------------------------
 *
 * - ~5MB
 * - Strings only
 * - Synchronous (can block main thread)
 */

/**
 * -----------------------------------------------------
 * 4. Cookies (basic)
 * -----------------------------------------------------
 */
// document.cookie = "theme=dark; expires=Fri, 31 Dec 9999";

/**
 * -----------------------------------------------------
 * 5. Fetch API (MOST IMPORTANT)
 * -----------------------------------------------------
 */
fetch("https://jsonplaceholder.typicode.com/posts/1")
	.then(res => {
		if (!res.ok) throw new Error("HTTP error");
		return res.json();
	})
	.then(data => console.log(data))
	.catch(err => console.log(err.message));

/**
 * -----------------------------------------------------
 * 6. Fetch with async / await
 * -----------------------------------------------------
 */
async function fetchData() {
	try {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
		const data = await res.json();
		console.log(data);
	} catch (err) {
		console.log(err.message);
	}
}

fetchData();

/**
 * -----------------------------------------------------
 * 7. AbortController (INTERVIEW GOLD)
 * -----------------------------------------------------
 */
const controller = new AbortController();

fetch("https://jsonplaceholder.typicode.com/posts", {
	signal: controller.signal
}).catch(err => console.log("Aborted"));

controller.abort();

/**
 * -----------------------------------------------------
 * FINAL INTERVIEW SUMMARY ⭐
 * -----------------------------------------------------
 *
 * - localStorage = persistent
 * - sessionStorage = tab-based
 * - fetch resolves on HTTP error ❗
 * - AbortController cancels requests
 */
