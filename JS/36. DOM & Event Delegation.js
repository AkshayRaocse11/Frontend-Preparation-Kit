/**
 * =====================================================
 * DOM & EVENT DELEGATION (INTERVIEW)
 * =====================================================
 */

/**
 * -----------------------------------------------------
 * 1. DOM selection
 * -----------------------------------------------------
 */
document.getElementById("app");
document.querySelector(".btn");
document.querySelectorAll("li");

/**
 * -----------------------------------------------------
 * 2. Event Bubbling vs Capturing
 * -----------------------------------------------------
 */
document.body.addEventListener("click", () => {
	console.log("Body clicked");
}, false); // bubbling

/**
 * -----------------------------------------------------
 * 3. Event Delegation ⭐ VERY IMPORTANT
 * -----------------------------------------------------
 */
document.getElementById("list").addEventListener("click", (e) => {
	if (e.target.tagName === "LI") {
		console.log("Item clicked:", e.target.textContent);
	}
});

/**
 * WHY?
 * - Better performance
 * - Handles dynamic elements
 */

/**
 * -----------------------------------------------------
 * 4. stopPropagation
 * -----------------------------------------------------
 */
document.querySelector(".btn").addEventListener("click", (e) => {
	e.stopPropagation();
});

/**
 * -----------------------------------------------------
 * 5. Reflow vs Repaint
 * -----------------------------------------------------
 *
 * Reflow → layout calculation (expensive)
 * Repaint → visual update
 */

/**
 * -----------------------------------------------------
 * 6. Avoid layout thrashing
 * -----------------------------------------------------
 */
// ❌ BAD
// el.style.width = el.offsetWidth + 10 + "px";

// ✅ GOOD
// const width = el.offsetWidth;
// el.style.width = width + 10 + "px";

/**
 * -----------------------------------------------------
 * 7. requestAnimationFrame
 * -----------------------------------------------------
 */
requestAnimationFrame(() => {
	console.log("Paint-safe DOM update");
});

/**
 * -----------------------------------------------------
 * FINAL INTERVIEW SUMMARY ⭐
 * -----------------------------------------------------
 *
 * - Use event delegation
 * - Avoid frequent DOM reads/writes
 * - stopPropagation controls bubbling
 * - requestAnimationFrame for animations
 */
