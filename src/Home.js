import React from "react";
import "./Home.css";
import Header from "./Header";
import Banner from "./Banner";

function Home() {
	return (
		<div className="home">
			<Header />
			<Banner />
			<div className="home_section">
				<Card />
				<Card />
				<Card />
			</div>
			<div className="home_section">
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

export default Home;
