import React, {useEffect} from "react";
import  "./ProgressBar.css";

export default  function ProgressBar({progress}) {
	const [animatedProgress, setAnimatedProgress] = React.useState(0);
	
	useEffect(() => {
		const timeout = setTimeout(() => setAnimatedProgress(progress), 2000);
		return () => clearTimeout(timeout);
	}, [progress]);
	return (<>
	<div className={"outer"}>
		<div className={"inner"}
			style={{
				transform: `translateX(${animatedProgress - 100}%)`,
				backgroundColor: animatedProgress <5 ? "black" : "blue",
			}}
		>
		{animatedProgress}%</div>
	</div>
	</>);
}