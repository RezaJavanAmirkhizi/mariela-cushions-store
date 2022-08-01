import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import getProductsByFilter from "../data/actions/getProductsByFilter";

function ProductDetail(props) {
	//Create this state to control number of products
	const [numOfProducts, setNumOfProducts] = useState(1);

	//Create this state to set products from api
	const [products, setProducts] = useState([]);

	//Create this state to message users
	const [added, setAdded] = useState(false);

	//Get id from query string
	const { id } = useParams();

	useEffect(() => {
		props.getProductsByFilter("id", id);
		setProducts(props.products);
	}, []);

	useEffect(() => {
		setProducts(props.products);
	}, [props.products]);

	//Create this function for add product to card and localstorage
	const addToCart = (e) => {
		e.preventDefault();
		let cartItems = localStorage.getItem("cart")
			? JSON.parse(localStorage.getItem("cart"))
			: [];

		let check = -1;

		for (let i = 0; i < cartItems.length; i++) {
			if (cartItems[i].id === props.products[0].id) {
				check = i;
				break;
			}
		}
		console.log(check);

		if (check !== -1) {
			cartItems[check].count =
				Number(cartItems[check].count) + numOfProducts;
			localStorage.setItem("cart", JSON.stringify(cartItems));
		} else {
			cartItems.push({ ...props.products[0], count: numOfProducts });
			localStorage.setItem("cart", JSON.stringify(cartItems));
		}

		setAdded(true);
		setTimeout(() => {
			setAdded(false);
		}, 2000);
	};

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
								<h1>{props.products[0].name}</h1>
								<p>{`$ ${props.products[0].price} USD`}</p>
								<span>Quantity</span>
								<input
									type="number"
									value={numOfProducts}
									onChange={(e) => {
										if (e.target.value < 1) {
											e.target.value = 1;
										}
										setNumOfProducts(
											Number(e.target.value)
										);
									}}
								/>
								<h5 className={added ? "added" : ""}>
									The item has been successfully added to the
									shopping cart
								</h5>
								<button onClick={(e) => addToCart(e)}>
									Add to cart
								</button>
								<button>Buy Now</button>
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
								alt={props.products[0].name}
								src={props.products[0].image}
							/>
							<img
								alt={props.products[0].name}
								src={props.products[0].image}
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
