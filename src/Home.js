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
					src="https://a0.muscache.com/im/pictures/05d4f7c9-4660-4a97-b4ae-9d9a2be8ceb5.jpg?aki_policy=large"
					title="BV601 - A Glaring Rustic Loft in Bui Vien"
					description="An apartment in HoLo Bui Vien Saigon - a member of HoLo Fairy Houses Serviced HomeStay Chain"
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/29bf34c8-6a10-4e13-aa84-d7cac912a5ef.jpg?aki_policy=large"
					title="Bright Sunny Studio in Sai Gon"
					description="A beautiful bright one bedroom apartment in the middle of the center. Located on the entire third floor (No elevator), this mini apartment , offers full privacy perfectly suited for young couples. "
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/544b87a4-35a3-4f70-8c7b-755259a22be7.jpg?aki_policy=large"
					title="Bunk bed in dorimtory"
					description="La vie de Hannah homestay 500m away from BuiVien Street in a small, quiet alley in NguyenTrai Street young, fun and really want to share the beauty of this city with you. "
				/>
			</div>
		</div>
	);
}

export default Home;
