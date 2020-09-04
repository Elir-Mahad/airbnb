import React from "react";

import { Button } from "@material-ui/core";

import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage_info">
				<p> 62 stays . 26 august to 30 august . 2 guests </p>
				<h1> Stays nearby </h1>
				<Button variant="outlined">Cancellation Flexibility</Button>
				<Button variant="outlined">Type of place</Button>
				<Button variant="outlined">Price</Button>
				<Button variant="outlined">Rooms and beds</Button>
				<Button variant="outlined">More filters</Button>
			</div>
			<SearchResult
				img="https://a0.muscache.com/im/pictures/314fc383-04c6-49b4-8459-36d7327e2a04.jpg?aki_policy=large"
				location="Private room in center of London"
				title="Stay at this spacious Edwardian House"
				description=" 1 guest . 1 bedroom . 1 bed . 1 shared bathroom"
				star={4.73}
				price="$30/night"
				total="117/total"
			/>
			<SearchResult
				img="https://a0.muscache.com/im/pictures/314fc383-04c6-49b4-8459-36d7327e2a04.jpg?aki_policy=large"
				location="Private room in center of London"
				title="Stay at this spacious Edwardian House"
				description=" 1 guest . 1 bedroom . 1 bed . 1 shared bathroom"
				star={4.73}
				price="$30/night"
				total="117/total"
			/>
		</div>
	);
}

export default SearchPage;
