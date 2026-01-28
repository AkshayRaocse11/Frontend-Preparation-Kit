/**
 * =====================================================
 * BROWSER INTERNALS – HOW THE BROWSER WORKS (INTERVIEW)
 * =====================================================
 *
 * Browsers are NOT just UI tools.
 * They are complex systems with multiple components.
 */

/**
 * -----------------------------------------------------
 * 1. Main Browser Components
 * -----------------------------------------------------
 *
 * - UI Layer → address bar, buttons
 * - Browser Engine → connects UI & rendering engine
 * - Rendering Engine → parses HTML/CSS
 * - JavaScript Engine → executes JS
 * - Networking → HTTP requests
 * - Data Storage → cookies, localStorage, cache
 */

/**
 * -----------------------------------------------------
 * 2. Rendering Engine Flow (VERY IMPORTANT)
 * -----------------------------------------------------
 *
 * HTML → DOM Tree
 * CSS  → CSSOM Tree
 * DOM + CSSOM → Render Tree
 * Render Tree → Layout
 * Layout → Paint
 */

/**
 * -----------------------------------------------------
 * 3. DOM (Document Object Model)
 * -----------------------------------------------------
 *
 * - Tree representation of HTML
 * - JS can manipulate DOM
 * - DOM operations are EXPENSIVE
 */

/**
 * -----------------------------------------------------
 * 4. CSSOM
 * -----------------------------------------------------
 *
 * - Tree representation of CSS
 * - CSS is render-blocking
 *
 * INTERVIEW FACT:
 * Browser waits for CSS before painting UI.
 */

/**
 * -----------------------------------------------------
 * 5. Render Tree
 * -----------------------------------------------------
 *
 * - Combines DOM + CSSOM
 * - Only visible nodes included
 *
 * display: none → excluded
 */

/**
 * -----------------------------------------------------
 * 6. Layout (Reflow)
 * -----------------------------------------------------
 *
 * - Calculates position & size
 * - Expensive operation
 *
 * Triggers:
 * - width / height
 * - margin / padding
 */

/**
 * -----------------------------------------------------
 * 7. Paint & Composite
 * -----------------------------------------------------
 *
 * Paint → draw pixels
 * Composite → combine layers
 *
 * transform & opacity → GPU accelerated
 */

/**
 * -----------------------------------------------------
 * 8. Why DOM manipulation is slow
 * -----------------------------------------------------
 *
 * - Causes reflow
 * - Causes repaint
 * - Blocks main thread
 *
 * INTERVIEW TIP:
 * Batch DOM updates.
 */

/**
 * -----------------------------------------------------
 * FINAL SUMMARY ⭐
 * -----------------------------------------------------
 *  * - HTML → DOM
 *  * - CSS → CSSOM
 *  * - DOM + CSSOM → Render Tree
 *  * - Layout → Paint → Composite
 *  * - Avoid layout thrashing
 *  */