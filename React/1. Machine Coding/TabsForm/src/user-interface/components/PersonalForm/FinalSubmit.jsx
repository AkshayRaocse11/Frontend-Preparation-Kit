import React from "react";

export default  function FinalSubmit(props) {
	console.log(props.data);
	const {data} = props;

	return 	<div className="FinalSubmit">
				<span>
					<div> {data.name} </div>
					<div> {data.email} </div>
					<div> {data.address} </div>
					<div> {data.zipCode} </div>				
				</span>
		</div>
}