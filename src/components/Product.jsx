import { Link } from "react-router-dom";
import { connect } from "react-redux";
import getProductsByFilter from "../data/action/getProductsByFilter";

function Product(props) {
	return (
		<Link
			onClick={() => props.getProductsByFilter("id", props.id)}
			className="product"
			to={`/product_detail/${props.id}`}
		>
			<div className="pic">
				<img src={props.image} alt={props.name} />
			</div>
			<h3>{props.name}</h3>
			<p>{`$${props.price} USD`}</p>
		</Link>
	);
}

const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};

export default connect(mapStateToProps, { getProductsByFilter })(Product);
