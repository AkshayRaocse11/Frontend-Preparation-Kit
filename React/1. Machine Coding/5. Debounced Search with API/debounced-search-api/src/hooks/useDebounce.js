import { useCallback, useEffect, useRef } from "react";

export default function useDebouncedSearch(func, delay) {
	const timerRef = useRef(null);
	const funcRef = useRef(func);

	// keep latest function reference
	useEffect(() => {
		funcRef.current = func;
	}, [func]);

	const debounced = useCallback((...args) => {
		if (timerRef.current != null) {
			clearTimeout(timerRef.current);
		}
		timerRef.current = setTimeout(() => {
			// call the latest function
			funcRef.current(...args);
			timerRef.current = null;
		}, delay);
	}, [delay]);

	// cleanup on unmount
	useEffect(() => {
		return () => {
			if (timerRef.current != null) {
				clearTimeout(timerRef.current);
			}
		};
	}, []);

	return { debounced };
}
