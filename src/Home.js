import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card.js";

function Home() {
	return (
		<div className="home">
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
					src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
					title="Unique stays"
					description="Spaces that are more than just a place to sleep"
				/>
			</div>
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
					src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
					title="Unique stays"
					description="Spaces that are more than just a place to sleep"
				/>
			</div>
		</div>
	);
}

export default Home;
