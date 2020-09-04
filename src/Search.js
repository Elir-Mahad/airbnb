import React, { useState } from "react";
import "./Search.css";
import { useHistory } from "react-router-dom";

// Material ui imports
import PeopleIcon from "@material-ui/icons/People";
import { Button } from "@material-ui/core";

// Date range picker imports from https://www.npmjs.com/package/react-date-range-
// This tool will create a calendar for the user
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

// This component is the date picker component
// The user will pick two dates to search for all avaliable rentals

function Search() {
	const history = useHistory();
	// the constant history stores the function useHistory which is imported from react-router-dom
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection"
	}; // The above three constants are used to manipulate the date range plugin

	function handleSelect(ranges) {
		// When the element thats attached to this function is clicked
		setStartDate(ranges.selection.startDate);
		// set the start date whatever range you selected as the start date
		setEndDate(ranges.selection.endDate);
		// set the end date whatever range you selected as the end date
	}

	return (
		<div className="search">
			<DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
			<h2>
				Number of guests
				<PeopleIcon />
			</h2>
			<input min={0} defaultValue={2} type="number" />
			<Button onClick={() => history.push("/search")}> Search Airbnb </Button>
		</div>
	);
}

export default Search;
