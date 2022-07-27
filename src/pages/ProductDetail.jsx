import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import getProductsByFilter from "../data/action/getProductsByFilter";

function ProductDetail(props) {
	//Create this state to control number of products
	const [numOfProducts, setNumOfProducts] = useState(1);

	//Create this state to set products from api
	const [products, setProducts] = useState([]);

	//Get if from query string
	const { id } = useParams();

	useEffect(() => {
		props.getProductsByFilter("id", id);
		setProducts(props.products);
	}, []);

	useEffect(() => {
		setProducts(props.products);
	}, [props.products]);

	return (
		<>
			{products.length !== 0 ? (
				<>
					<div className="add-cart">
						<div className="bg-top"></div>
						<div className="product-con">
							<div className="pic">
								<img
									alt={props.products[0].name}
									src={props.products[0].image}
								/>
							</div>
							<div className="des">
								<h1>Pink Cushion</h1>
								<p>$19.99 USD</p>
								<span>Quantity</span>
								<input
									type="number"
									value={numOfProducts}
									onChange={(e) =>
										setNumOfProducts(e.target.value)
									}
								/>
								<a href="/">Add to cart</a>
								<a href="/">Buy Now</a>
							</div>
						</div>
					</div>
					<div className="details">
						<div className="details-item">
							<h1>Description</h1>
							<span>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Sit
								amet porttitor eget dolor morbi non arcu risus.
							</span>
						</div>
						<div className="details-item">
							<h1>Shipping</h1>
							<span>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Lobortis mattis aliquam faucibus purus in massa
								tempor nec feugiat. Turpis massa sed elementum
								tempus egestas sed sed.
							</span>
						</div>
						<div className="details-item">
							<h1>images</h1>
							<img
								alt=""
								src="https://indiacircus.com/pub/media/catalog/product/i/n/india-circus-the-mughal-rickshaw-cushion-cover-set-of-5-52121512sd01581-1.jpg"
							/>
							<img
								alt=""
								src="https://indiacircus.com/pub/media/catalog/product/cache/1/image/e9c3970ab036de70892d86c6d221abfe/i/n/india-circus-poppy-window-cushion-cover-set-of-5-52121512sd01574-1.jpg"
							/>
						</div>
					</div>
				</>
			) : (
				""
			)}
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};

export default connect(mapStateToProps, { getProductsByFilter })(ProductDetail);
