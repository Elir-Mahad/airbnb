import React, { useState } from "react";
import "./Banner.css";

import { Button } from "@material-ui/core";

function Banner() {
	const [showSearch, setShowSearch] = useState(false);
	// This constant is set to false because we only want it to appear when the button is clicked.
	// For testing purposes, if you change the useState to true,
	// then the conditional h1 'show date picker' will appear on the page

	return (
		<div className="banner">
			<div className="banner_search">
				{showSearch && <h1>Show date picker</h1>}
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
					Search Dates
				</Button>
			</div>
			<div className="banner_info">
				<h1>Get out and stretch your imagination</h1>
				<h5>
					Plan a different kind of getaway to uncover the hidden gems near you.
				</h5>
				<Button variant="outline"> Explore Nearby</Button>
			</div>
		</div>
	);
}

export default Banner;
