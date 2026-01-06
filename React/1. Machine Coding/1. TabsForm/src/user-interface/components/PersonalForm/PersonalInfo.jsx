import React from "react";

export default  function PersonalInfo(props) {
	const { data, setData, error } = props;
	const { name, email } = data;
	
	const handleChange = (e,key) => {
		setData(prevState => ({
			...prevState,
			[key]: e.target.value,
		}))
	}
	
	return <div className="PersonalInfo">
		<div>
			<label htmlFor="name"> Name</label>
			<input id="name" type="text" value={name} onChange={(e) => handleChange(e, "name")}/>
			{error.name.length > 0 && <span className="error-message">{error.name}</span>}
		</div>
		<div>
			<label htmlFor="email"> Email</label>
			<input id="email" type="email" value={email} onChange={(e) => handleChange(e, "email")}/>
			{error.email.length > 0 && <span className="error-message">{error.email}</span>}
		</div>
	</div>
}