// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import instance from "../../api/axios";

function Slider() {
	//Create the State to get all collections
	const [collections, setCollections] = useState([]);

	//Create this function to get collections
	const getCollections = async () => {
		await instance
			.get("/Collections")
			.then((response) => {
				setCollections(response.data);
			})
			.catch((error) => {
				setCollections([]);
			});
	};

	useEffect(() => {
		getCollections();
	}, []);

	return (
		<>
			<div className="bg">
				<div className="top-bg"></div>
				<div className="slider-con">
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination]}
						className="mySwiper"
					>
						{collections.length !== 0
							? collections.map((collection) => {
									return (
										<SwiperSlide key={collection.id}>
											<div className="pic"></div>
											<div className="des">
												<p>NEW</p>
												<h1>{collection.name}</h1>
												<Link to={`/collections/${collection.name}`}>BUY NOW</Link>
											</div>
										</SwiperSlide>
									);
							  })
							: ""}
					</Swiper>
				</div>
			</div>
		</>
	);
}

export default Slider;
