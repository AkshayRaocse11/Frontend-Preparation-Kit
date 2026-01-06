import React from "react";

export default  function Address(props) {
	const {address , zipCode, setData} = props.data;
	const handleChange = (e,key) => {
		setData(prevState => ({
			...prevState,
			[key]: e.target.value,
		}))
	}
	return <div className="Address"> 
		<div>
			<label htmlFor={"address"}>Address</label>
			<input 
				id="address"
				type="text" 
				value={address} 
				onChange={(e) => handleChange(e,"address")}
			/>
		</div>
		<div>
			<label htmlFor={"zipCode"}>ZipCode</label>
			<input
				id="zipCode"
				type="text"
				value={zipCode}
				onChange={(e) => handleChange(e,"zipCode")}
			/>
		</div>		
	</div>
}