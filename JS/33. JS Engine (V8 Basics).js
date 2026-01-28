/**
 * =====================================================
 * JAVASCRIPT ENGINE – V8 BASICS (INTERVIEW)
 * =====================================================
 *
 * JS Engine executes JavaScript code.
 * Chrome & Node.js use V8.
 */

/**
 * -----------------------------------------------------
 * 1. Main Components of V8
 * -----------------------------------------------------
 *
 * - Parser
 * - Interpreter (Ignition)
 * - Compiler (TurboFan)
 * - Garbage Collector
 */

/**
 * -----------------------------------------------------
 * 2. Parsing Phase
 * -----------------------------------------------------
 *
 * JS code → AST (Abstract Syntax Tree)
 *
 * Syntax errors found here.
 */

/**
 * -----------------------------------------------------
 * 3. Interpreter (Ignition)
 * -----------------------------------------------------
 *
 * - Converts AST to bytecode
 * - Executes bytecode
 * - Fast startup
 */

/**
 * -----------------------------------------------------
 * 4. JIT Compiler (TurboFan)
 * -----------------------------------------------------
 *
 * - Optimizes hot code
 * - Converts bytecode → machine code
 *
 * INTERVIEW FACT:
 * JS is both interpreted AND compiled.
 */

/**
 * -----------------------------------------------------
 * 5. De-optimization
 * -----------------------------------------------------
 *
 * If assumptions break:
 * - Optimized code is discarded
 * - Falls back to interpreter
 */

/**
 * -----------------------------------------------------
 * 6. Memory Management
 * -----------------------------------------------------
 *
 * - Stack → primitives, function calls
 * - Heap → objects
 *
 * Uses Mark & Sweep GC.
 */

/**
 * -----------------------------------------------------
 * 7. Inline Caching
 * -----------------------------------------------------
 *
 * Optimizes property access:
 * obj.x → cached lookup
 *
 * Changing object shapes breaks cache.
 */

/**
 * -----------------------------------------------------
 * 8. Hidden Classes (VERY IMPORTANT)
 * -----------------------------------------------------
 *
 * V8 creates hidden classes for objects.
 *
 * ❌ Adding properties dynamically hurts performance
 */

/**
 * -----------------------------------------------------
 * FINAL SUMMARY ⭐
 * -----------------------------------------------------
 *
 * - JS parsed to AST
 * - Interpreted first
 * - Hot code compiled
 * - GC frees unreachable memory
 * - Stable object shapes = faster code
 */
