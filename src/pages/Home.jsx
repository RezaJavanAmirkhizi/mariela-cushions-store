import Slider from "../components/home/Slider";
import Description from "../components/home/Description";
import AboutMe from "../components/home/AboutMe";
import Details from "../components/home/Details";
import NewestCollection from "../components/home/NewestCollection";
import NewestCollectionProducts from "../components/home/NewestCollectionProducts";

function Home() {
	return (
		<>
			<Slider />
			<Description />
			<AboutMe />
			<Details />
			<NewestCollection />
			<NewestCollectionProducts />
		</>
	);
}

export default Home;
