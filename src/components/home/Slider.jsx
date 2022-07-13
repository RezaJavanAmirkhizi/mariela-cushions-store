// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

function Slider() {
	return (
		<>
			<div className="bg">
				<div className="top-bg"></div>
				<div className="bottom-bg"></div>
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
						<SwiperSlide>
							<div className="pic"></div>
							<div className="des">
								<p>NEW</p>
								<h1>Spring CushionCollection 2019</h1>
                                <a href="">BUY NOW</a>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
}

export default Slider;
