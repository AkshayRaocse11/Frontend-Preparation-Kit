/**
 * =====================================================
 * WEB PERFORMANCE METRICS – CORE WEB VITALS
 * =====================================================
 *
 * Google uses these metrics for ranking.
 * Interviewers LOVE these questions.
 */

/**
 * -----------------------------------------------------
 * 1. TTFB (Time To First Byte)
 * -----------------------------------------------------
 *
 * Measures:
 * Time from request → first byte received
 *
 * Affected by:
 * - Server speed
 * - Network latency
 * - CDN usage
 */

const ttfbExample = "Server response time";

/**
 * OPTIMIZATION:
 * - Use CDN
 * - Server-side caching
 */

/**
 * -----------------------------------------------------
 * 2. LCP (Largest Contentful Paint)
 * -----------------------------------------------------
 *
 * Measures:
 * Time until largest element is visible
 *
 * Usually:
 * - Hero image
 * - Large text block
 */

/**
 * GOOD:
 * LCP ≤ 2.5s
 *
 * BAD:
 * LCP > 4s
 */

/**
 * OPTIMIZATION:
 * - Optimize images
 * - Preload critical assets
 * - Server-side rendering
 */

/**
 * -----------------------------------------------------
 * 3. CLS (Cumulative Layout Shift)
 * -----------------------------------------------------
 *
 * Measures:
 * Visual stability (unexpected layout shifts)
 */

let clsScore = 0.1; // Bad if > 0.1

/**
 * Causes:
 * - Images without width/height
 * - Ads loading late
 * - Fonts swapping
 */

/**
 * FIXES:
 * - Set image dimensions
 * - Reserve space
 * - Use font-display: swap carefully
 */

/**
 * -----------------------------------------------------
 * 4. FID → replaced by INP (new metric)
 * -----------------------------------------------------
 *
 * INP = Interaction to Next Paint
 *
 * Measures:
 * Responsiveness to user input
 */

/**
 * -----------------------------------------------------
 * 5. Measuring Web Vitals
 * -----------------------------------------------------
 */
// Use web-vitals library
// getLCP(), getCLS(), getINP()

/**
 * -----------------------------------------------------
 * FINAL INTERVIEW SUMMARY ⭐
 * -----------------------------------------------------
 *
 * - TTFB → server speed
 * - LCP → loading experience
 * - CLS → visual stability
 * - INP → interactivity
 *
 * Core Web Vitals = UX + SEO
 */
