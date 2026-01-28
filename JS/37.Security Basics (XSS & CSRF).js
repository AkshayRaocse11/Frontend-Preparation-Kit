/**
 * =====================================================
 * SECURITY BASICS – XSS & CSRF (FRONTEND INTERVIEW)
 * =====================================================
 *
 * Frontend engineers MUST understand security basics.
 * These questions are common in senior interviews.
 */

/**
 * -----------------------------------------------------
 * 1. What is XSS (Cross-Site Scripting)?
 * -----------------------------------------------------
 *
 * XSS happens when untrusted input is executed as code.
 *
 * Types:
 * - Stored XSS
 * - Reflected XSS
 * - DOM-based XSS
 */

/**
 * Example ❌ (Dangerous)
 */
const userInput = "<img src=x onerror=alert('Hacked')>";
document.body.innerHTML = userInput; // XSS risk

/**
 * -----------------------------------------------------
 * 2. Preventing XSS ✅
 * -----------------------------------------------------
 */

// ✅ Use textContent instead of innerHTML
document.body.textContent = userInput;

// ✅ Sanitize HTML (library like DOMPurify)
// DOMPurify.sanitize(userInput);

/**
 * INTERVIEW FACT:
 * React prevents XSS by escaping values by default.
 */

/**
 * -----------------------------------------------------
 * 3. dangerouslySetInnerHTML (React)
 * -----------------------------------------------------
 *
 * Use ONLY if content is trusted.
 *
 * <div dangerouslySetInnerHTML={{ __html: data }} />
 */

/**
 * -----------------------------------------------------
 * 4. What is CSRF (Cross-Site Request Forgery)?
 * -----------------------------------------------------
 *
 * CSRF tricks a logged-in user into making
 * unwanted authenticated requests.
 */

/**
 * Example attack:
 * - User logged into bank.com
 * - Visits malicious site
 * - Hidden form submits request to bank.com
 */

/**
 * -----------------------------------------------------
 * 5. Preventing CSRF ✅
 * -----------------------------------------------------
 *
 * - CSRF tokens
 * - SameSite cookies
 * - Double submit cookies
 */

/**
 * Cookie example:
 */
// Set-Cookie: sessionId=abc; SameSite=Strict;

/**
 * -----------------------------------------------------
 * 6. XSS vs CSRF (INTERVIEW MUST)
 * -----------------------------------------------------
 *
 * XSS → Execute malicious JS
 * CSRF → Perform unwanted actions
 */

/**
 * -----------------------------------------------------
 * FINAL INTERVIEW SUMMARY ⭐
 * -----------------------------------------------------
 *
 * - Never trust user input
 * - Escape & sanitize data
 * - Use CSRF tokens
 * - React is safe by default (unless bypassed)
 */
