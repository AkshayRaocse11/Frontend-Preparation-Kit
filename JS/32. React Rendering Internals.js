/**
 * =====================================================
 * REACT RENDERING INTERNALS (INTERVIEW)
 * =====================================================
 *
 * React does NOT update the DOM directly every time.
 * It uses a reconciliation process.
 */

/**
 * -----------------------------------------------------
 * 1. Render vs Commit Phase
 * -----------------------------------------------------
 *
 * Render Phase:
 * - Builds Virtual DOM
 * - Calculates changes
 * - Can be paused (Concurrent mode)
 *
 * Commit Phase:
 * - Updates real DOM
 * - Cannot be interrupted
 */

/**
 * -----------------------------------------------------
 * 2. Virtual DOM
 * -----------------------------------------------------
 *
 * - Lightweight JS object
 * - Represents UI tree
 * - Compared with previous tree (diffing)
 */

/**
 * -----------------------------------------------------
 * 3. Reconciliation
 * -----------------------------------------------------
 *
 * Process of comparing:
 * old Virtual DOM vs new Virtual DOM
 *
 * Uses heuristics:
 * - Same type → reuse
 * - Different type → destroy & recreate
 */

/**
 * -----------------------------------------------------
 * 4. Keys (VERY IMPORTANT)
 * -----------------------------------------------------
 *
 * Keys help React:
 * - Track list items
 * - Avoid unnecessary re-renders
 *
 * ❌ index as key → bugs
 */

/**
 * -----------------------------------------------------
 * 5. State update triggers re-render
 * -----------------------------------------------------
 */
setState(prev => prev + 1);

/**
 * React compares:
 * previous state reference vs new state reference
 */

/**
 * -----------------------------------------------------
 * 6. Batching updates
 * -----------------------------------------------------
 *
 * React batches multiple state updates
 * into a single render for performance.
 */

/**
 * -----------------------------------------------------
 * 7. React Fiber (INTERVIEW GOLD)
 * -----------------------------------------------------
 *
 * Fiber = React's new reconciliation engine
 *
 * Benefits:
 * - Incremental rendering
 * - Priority updates
 * - Pause & resume work
 */

/**
 * -----------------------------------------------------
 * 8. Why React is fast
 * -----------------------------------------------------
 *
 * - Virtual DOM diffing
 * - Batched updates
 * - Minimal DOM mutations
 */

/**
 * -----------------------------------------------------
 * FINAL SUMMARY ⭐
 * -----------------------------------------------------
 *
 * - Render phase is interruptible
 * - Commit phase updates DOM
 * - Keys are critical
 * - Fiber enables concurrency
 */
