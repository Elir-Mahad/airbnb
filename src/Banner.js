import React, { useState } from "react";
import "./Banner.css";

import { Button } from "@material-ui/core";
import Search from "./Search";

import { useHistory } from "react-router-dom";

function Banner() {
	const history = useHistory();
	// the constant history stores the function useHistory which is imported from react-router-dom

	const [showSearch, setShowSearch] = useState(false);
	// This constant is set to false because we only want it to appear when the button is clicked.
	// For testing purposes, if you change the useState to true,
	// then the conditional h1 'show date picker' will appear on the page

	return (
		<div className="banner">
			<div className="banner_search">
				{showSearch && <Search />}
				{/* if showsearch is true then show this h1 element */}
				<Button
					onClick={() => setShowSearch(!showSearch)}
					// When the button is clicked,
					// set constant showSearch to the opposite of whatever it is.
					// So if its true, then set it to false,
					// and if its false then set it to true.
					className="banner_searchButton"
					variant="outlined"
				>
					{showSearch ? "Hide" : "Search Dates"}
					{/* If showSearch is true 
						(i.e, if the button above, 
						which has the showSearch function attached to it, 
						is clicked on), 
						then show the string 'hide' on the button; 
						this will indicate that it has been clicked.
						Otherwise, if the button has not been clicked,
						then show the string 'search dates' on it. */}
				</Button>
			</div>
			<div className="banner_info">
				<h1>Get out and stretch your imagination</h1>
				<h5>
					Plan a different kind of getaway to uncover the hidden gems near you.
				</h5>
				<Button
					onClick={() => history.push("/search")}
					// on click, this function:
					// go into the history (this is imported from react router)
					// push the page  '/search' into the history (ie, display the page with /search link)
					variant="outline"
				>
					Explore Nearby
				</Button>
			</div>
		</div>
	);
}

export default Banner;
