import React from "react";

export default  function Preferences(props) {
	const {newsLetter , theme, setData} = props.data;
	const handleChange = (e,key) => {
		setData(prevState => ({
			...prevState,
			[key]: e.target.checked,
		}))
	}
	return <div className="Preferences">
		<div>
			<label htmlFor={"newsLetter"}>Preferences</label>
			<input
				id="newsLetter"
				type="checkbox"
				value={newsLetter}
				checked={newsLetter}
				onChange={(e) => handleChange(e,"newsLetter")}
			/>
		</div>
		<div>
			<label htmlFor={"theme"}>ZipCode</label>
			<input
				id="theme"
				type="checkbox"
				value={theme}
				checked={theme}
				onChange={(e) => handleChange(e,"theme")}
			/>
		</div>
	</div>
}