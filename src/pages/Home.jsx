import Slider from "../components/home/Slider";
import Description from "../components/home/Description";
import AboutMe from "../components/home/AboutMe";
import Details from "../components/home/Details";
import NewestCollection from "../components/home/NewestCollection";
import NewestCollectionProducts from "../components/home/NewestCollectionProducts";
import ContactMe from "../components/home/ContactMe";
import Newsletter from "../components/home/Newsletter";

function Home() {
	return (
		<>
			<Slider />
			<Description />
			<AboutMe />
			<Details />
			<NewestCollection />
			<NewestCollectionProducts />
			<ContactMe />
			<Newsletter />
		</>
	);
}

export default Home;
