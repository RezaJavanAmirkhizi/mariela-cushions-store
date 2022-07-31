import { Link } from "react-router-dom";

function NewestCollection() {
	return (
		<div className="new-collection-con">
			<div className="new-collection">
				<div className="pic">
					<img alt="" src="https://imagescdn.simons.ca/images/8527/2221700/39/A1_2.jpg?__=2" />
				</div>
				<div className="des">
					<p>NEW</p>
					<h1>Newest Cushion Collection 2022</h1>
					<Link to={`/collections/Patterned`}>BUY NOW</Link>
				</div>
			</div>
		</div>
	);
}

export default NewestCollection;
