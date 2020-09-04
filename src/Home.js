import React from "react";
import "./Home.css";
import Header from "./Header";
import Banner from "./Banner";
import Card from "./Card.js";

function Home() {
	return (
		<div className="home">
			<Header />
			<Banner />
			<div className="home_section">
				<Card
					src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
					title="Online Experiences"
					description="Unique activities we can do together, led by a world of hosts"
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
					title="Entire Homes"
					description="Comforable private places, with room for friends or family"
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
					title="Online Experiences"
					description="Unique activities we can do together, led by a world of hosts"
				/>
			</div>
		</div>
	);
}

export default Home;
