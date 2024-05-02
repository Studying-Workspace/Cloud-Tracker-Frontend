import { useEffect, useRef } from "react";

export function useClickOutSideElement(handler: () => void , type:any) {
	const ref = useRef<typeof type>(null);

	useEffect(
		function () {
			function handleClick(e: any) {
				if (ref.current && !ref.current.contains(e.target)) {
					handler();
				}
			}

			document.addEventListener("click", handleClick, true);

			// clean up
			return function () {
				document.removeEventListener("click", handleClick, true);
			};
		},
		[handler],
	);

	return ref;
}
