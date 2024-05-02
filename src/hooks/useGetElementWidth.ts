import { useEffect, useRef, useState } from "react";

const useGetElementWidth = ()=>{
	const containerRef = useRef<HTMLDivElement>(null);
	const [width , setWidth] = useState<number|undefined>(0) ;

	useEffect(() => {
		const handleResize = () => {
			const divWidth = containerRef.current?.clientWidth;
			setWidth(divWidth);
		};
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};

	}, []);

	return {containerRef , width} ;
}
export default useGetElementWidth ;
