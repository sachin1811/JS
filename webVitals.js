interface Metric {
 /**
 * The name of the metric (in acronym form).
 */
 name: 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB';
/**
 * The current value of the metric.
 */
 value: number;
/**
 * The rating as to whether the metric value is within the "good",
 * "needs improvement", or "poor" thresholds of the metric.
 */
 rating: 'good' | 'needs-improvement' | 'poor';
/**
 * The delta between the current value and the last-reported value.
 * On the first report, `delta` and `value` will always be the same.
 */
 delta: number;
/**
 * A unique ID representing this particular metric instance. This ID can
 * be used by an analytics tool to dedupe multiple values sent for the same
 * metric instance, or to group multiple deltas together and calculate a
 * total. It can also be used to differentiate multiple different metric
 * instances sent from the same page, which can happen if the page is
 * restored from the back/forward cache (in that case new metrics object
 * get created).
 */
 id: string;
/**
 * Any performance entries relevant to the metric value calculation.
 * The array may also be empty if the metric value was not based on any
 * entries (e.g. a CLS value of 0 given no layout shifts).
 */
 entries: (
 | PerformanceEntry
 | LayoutShift
 | FirstInputPolyfillEntry
 | NavigationTimingPolyfillEntry
 )[];
/**
 * The type of navigation.
 *
 * This will be the value returned by the Navigation Timing API (or
 * `undefined` if the browser doesn't support that API), with the following
 * exceptions:
 * - 'back-forward-cache': for pages that are restored from the bfcache.
 * - 'prerender': for pages that were prerendered.
 * - 'restore': for pages that were discarded by the browser and then
 * restored by the user.
 */
 navigationType:
 | 'navigate'
 | 'reload'
 | 'back-forward'
 | 'back-forward-cache'
 | 'prerender'
 | 'restore';
}

function sendToAnalytics(metric) {
    const body = JSON.stringify(metric);
    const url = 'https://example.com/analytics';
   // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
    if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
    } else {
    fetch(url, { body, method: 'POST', keepalive: true });
    }
   }
   reportWebVitals(sendToAnalytics);