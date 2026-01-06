import React, {useState} from "react";
import "./TabsForm.css";
import PersonalInfo from "../PersonalForm/PersonalInfo";
import Address from "../PersonalForm/Address";
import Preferences from "../PersonalForm/Preferences";
import FinalSubmit from "../PersonalForm/FinalSubmit";

export default  function TabsForm() {
	const [data,setData]=useState({
		name: "Akshay",
		email: "akshay@gmail.com",
		address: "Hosur",
		zipCode: 635109,
		newsLetter: true,
		theme: false
	});
	
	const [error,setError]=useState({
		name: "",
		email: "email is Invalid",
		address: "Address is required",
		zipCode: "ZIP Code is required",
	});
	
	const [activeTab, setActiveTab] = useState(0);
	const tabsConfig = [
		{
			label: "Personal Information",
			component: PersonalInfo,
			validate: () => {
				let isValid = true;

				// clear previous errors
				setError(prev => ({ ...prev, name: "", email: "" }));

				if (!data.name.trim()) {
					setError(prev => ({
						...prev,
						name: "Name is required",
					}));
					isValid = false;
				}

				if (!data.email.trim()) {
					setError(prev => ({
						...prev,
						email: "Email is required",
					}));
					isValid = false;
				}

				return isValid;
			},
		},
		{
			label: "Address",
			component: Address,
			validate: () => {
				let isValid = true;

				setError(prev => ({ ...prev, address: "" }));

				if (!data.address.trim()) {
					setError(prev => ({
						...prev,
						address: "Address is required",
					}));
					isValid = false;
				}

				return isValid;
			},
		},
		{
			label: "Preferences",
			component: Preferences,
			validate: () => true, // nothing required
		},
		{
			label: "Final Submit",
			component: FinalSubmit,
			validate: () => true, // summary page
		},
	];
	
	const CurrentTab =tabsConfig[activeTab].component;
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data);
	}
	
	const handlePrev = () => {
		setActiveTab(prev => prev - 1);
	}

	const handleNext = () => {
		if (tabsConfig[activeTab].validate()){
			setActiveTab(prev => prev + 1);
		}
	}
	
	const handleActiveTabChange = (index) => {
		if(tabsConfig[index].validate()){
			setActiveTab(index);
		}
	}
	
	return <div className="TabsForm">
		<div className="tabs-container">
			{tabsConfig.map((tab , index) => {
				return <div key={index} className="tabs-header">
					{<button type="button" className={activeTab === index ? "active-button" : ""} onClick={() => handleActiveTabChange(index)}>{tab.label}</button>}
				</div>
			})}
		</div>
		<div className={"active-tabs"}>
			{<CurrentTab data={data} setData={setData} error={error} />}
		</div>
		<div className="tabs-footer">
			{activeTab !== 0 &&  <button type="button"  className="active-button" onClick={handlePrev}> Prev</button>}
			{activeTab !== tabsConfig.length-1 && <button className="active-button" type="button" onClick={handleNext}> Next</button>}
			{activeTab === tabsConfig.length -1 && <button className="active-button" type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>}
		</div>
		
	</div>
}