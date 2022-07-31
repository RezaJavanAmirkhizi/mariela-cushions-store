import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import setUserInfo from "../data/actions/setUserInfo";

function CheckOut(props) {
	//create this state to check shipping method
	const [shipping, setShipping] = useState("Flat-Rate");
	let shippingAmount =
		shipping === "Flat-Rate"
			? 18.9
			: shipping === "Expedited Shipping"
			? 81.9
			: 148.2;
	//Create this state to check same billing address
	const [sameBillingAddress, setSameBillingAddress] = useState(false);

	//Create this state to
	const [subTotal, setSubTotal] = useState(0);

	//Create this state to get all products in cart
	const [products, setProducts] = useState([]);

	//Create this state to get information
	const [user, setUser] = useState({
		email: "",
		shippingAddress: {
			fullName: "",
			streetAddress: "",
			city: "",
			state: "",
			zip: "",
			country: "",
		},
		paymentInfo: {
			cardNumber: "",
			expriationDate: "",
			securityCode: "",
		},
		billingAddress: {
			fullName: "",
			streetAddress: "",
			city: "",
			state: "",
			zip: "",
			country: "",
		},
	});

	useEffect(() => {
		if (localStorage.getItem("cart")) {
			setProducts(JSON.parse(localStorage.getItem("cart")));
		}
	}, []);

	useEffect(() => {
		if (products.length !== 0) {
			let total = 0;
			for (let i = 0; i < products.length; i++) {
				total += products[i].price * products[i].count;
			}
			setSubTotal(total);
		}
	}, [products]);

	const deleteItem = (product) => {
		let newProducts = products.filter((item) => item.id !== product.id);
		localStorage.setItem("cart", JSON.stringify(newProducts));
		setProducts(newProducts);
	};

	const [errMessage, setErrMessage] = useState("");
	let history = useNavigate();

	const placehOlder = (e) => {
		e.preventDefault();
		if(products.length === 0){
			setErrMessage("Your cart is empty")
		}
		else if (user.email === "") {
			setErrMessage("Please enter your email address");
		} else if (
			user.shippingAddress.fullName === "" ||
			user.shippingAddress.streetAddress === "" ||
			user.shippingAddress.city === "" ||
			user.shippingAddress.zip === "" ||
			user.shippingAddress.country === ""
		) {
			setErrMessage("Please enter your shipping address fields");
		} else if (
			user.paymentInfo.cardNumber === "" ||
			user.paymentInfo.expriationDate === "" ||
			user.paymentInfo.securityCode === ""
		) {
			setErrMessage("Please enter your payment information");
		} else if (
			user.billingAddress.fullName === "" ||
			user.billingAddress.streetAddress === "" ||
			user.billingAddress.city === "" ||
			user.billingAddress.zip === "" ||
			user.billingAddress.country === ""
		) {
			setErrMessage("Please enter your billing address fields");
		} else {
			setErrMessage("");
			props.setUserInfo(user);
			localStorage.removeItem("cart");
			history("/order_result");
		}
		window.scrollTo(0 , 0);
	};

	return (
		<>
			<div className="page-title">
				<h1>Checkout</h1>
			</div>
			{errMessage !== "" ? <h4 className="err-message">*{errMessage}</h4> : null}
			<div className="cart-info">
				<div className="contact-info">
					<div className="customer">
						<div className="title">
							<h4>Customer Info</h4>
							<span>* Required</span>
						</div>
						<div className="forms">
							<span>Email *</span>
							<input
								type="email"
								onChange={(e) =>
									setUser({ ...user, email: e.target.value })
								}
							/>
						</div>
					</div>
					<div className="address">
						<div className="title">
							<h4>Shipping Address</h4>
							<span>* Required</span>
						</div>
						<div className="forms">
							<span>Full Name *</span>
							<input
								type="text"
								onChange={(e) =>
									setUser({
										...user,
										shippingAddress: {
											...user.shippingAddress,
											fullName: e.target.value,
										},
									})
								}
							/>
						</div>
						<div className="forms">
							<span>Street Address *</span>
							<input
								type="text"
								onChange={(e) =>
									setUser({
										...user,
										shippingAddress: {
											...user.shippingAddress,
											streetAddress: e.target.value,
										},
									})
								}
							/>
						</div>
						<div className="row-forms">
							<div className="forms">
								<span>City *</span>
								<input
									type="text"
									onChange={(e) =>
										setUser({
											...user,
											shippingAddress: {
												...user.shippingAddress,
												city: e.target.value,
											},
										})
									}
								/>
							</div>
							<div className="forms">
								<span>State/Province</span>
								<input
									type="text"
									onChange={(e) =>
										setUser({
											...user,
											shippingAddress: {
												...user.shippingAddress,
												state: e.target.value,
											},
										})
									}
								/>
							</div>
							<div className="forms">
								<span>Zip/Postal Code*</span>
								<input
									type="text"
									onChange={(e) =>
										setUser({
											...user,
											shippingAddress: {
												...user.shippingAddress,
												zip: e.target.value,
											},
										})
									}
								/>
							</div>
						</div>
						<div className="forms">
							<span>Country *</span>
							<input
								type="text"
								onChange={(e) =>
									setUser({
										...user,
										shippingAddress: {
											...user.shippingAddress,
											country: e.target.value,
										},
									})
								}
							/>
						</div>
					</div>
					<div className="method">
						<div className="title">
							<h4>Shipping Method</h4>
							<span>* Required</span>
						</div>
						<div className="method-forms">
							<div className="method-form">
								<div className="check-box">
									<input
										type="radio"
										id="flat-rate"
										name="shipping-method"
										onChange={() =>
											setShipping("Flat-Rate")
										}
										checked={shipping === "Flat-Rate"}
									/>
									<label htmlFor="flat-rate">
										Flat Rate
										<span>
											Standard flat rate for all shipments
										</span>
									</label>
								</div>
								<p>$ 18.90 USD</p>
							</div>
							<div className="method-form">
								<div className="check-box">
									<input
										type="radio"
										id="expedited-shipping"
										name="shipping-method"
										onChange={() =>
											setShipping("Expedited Shipping")
										}
										checked={
											shipping === "Expedited Shipping"
										}
									/>
									<label htmlFor="expedited-shipping">
										Expedited Shipping
										<span>
											Expedited shipping to get the
											shipment in a day or two
										</span>
									</label>
								</div>
								<p>$ 81.90 USD</p>
							</div>
							<div className="method-form">
								<div className="check-box">
									<input
										type="radio"
										id="overnight-shipping"
										name="shipping-method"
										onChange={() =>
											setShipping("Overnight Shipping")
										}
										checked={
											shipping === "Overnight Shipping"
										}
									/>
									<label htmlFor="overnight-shipping">
										Overnight Shipping
										<span>
											An expensive option to get the
											shipment on the next business day
										</span>
									</label>
								</div>
								<p>$ 148.20 USD</p>
							</div>
						</div>
					</div>
					<div className="payment">
						<div className="title">
							<h4>Payment Info</h4>
							<span>* Required</span>
						</div>
						<div className="forms">
							<span>Card Number *</span>
							<input
								type="text"
								onChange={(e) =>
									setUser({
										...user,
										paymentInfo: {
											...user.paymentInfo,
											cardNumber: e.target.value,
										},
									})
								}
							/>
						</div>
						<div className="row-forms">
							<div className="forms">
								<span>Expiration Date *</span>
								<input
									type="text"
									onChange={(e) =>
										setUser({
											...user,
											paymentInfo: {
												...user.paymentInfo,
												expriationDate: e.target.value,
											},
										})
									}
								/>
							</div>
							<div className="forms">
								<span>Security Code *</span>
								<input
									type="text"
									onChange={(e) =>
										setUser({
											...user,
											paymentInfo: {
												...user.paymentInfo,
												securityCode: e.target.value,
											},
										})
									}
								/>
							</div>
						</div>
						<div className="row-forms">
							<div className="check-box">
								<input
									type="checkBox"
									id="billing-address"
									checked={sameBillingAddress}
									onChange={() =>{setSameBillingAddress(!sameBillingAddress); setUser({...user, billingAddress: user.shippingAddress})}
										
									}
								/>
								<label htmlFor="billing-address">
									Billing address same as shipping
								</label>
							</div>
						</div>
					</div>
					<div
						className={`billing-address ${
							sameBillingAddress ? "disabled" : ""
						}`}
					>
						<div className="title">
							<h4>Billing Address</h4>
							<span>* Required</span>
						</div>
						<div className="forms">
							<span>Full Name *</span>
							<input
								type="text"
								onChange={(e) =>
									setUser({
										...user,
										billingAddress: {
											...user.billingAddress,
											fullName: e.target.value,
										},
									})
								}
							/>
						</div>
						<div className="forms">
							<span>Street Address *</span>
							<input
								type="text"
								onChange={(e) =>
									setUser({
										...user,
										billingAddress: {
											...user.billingAddress,
											streetAddress: e.target.value,
										},
									})
								}
							/>
						</div>
						<div className="row-forms">
							<div className="forms">
								<span>City *</span>
								<input
									type="text"
									onChange={(e) =>
										setUser({
											...user,
											billingAddress: {
												...user.billingAddress,
												city: e.target.value,
											},
										})
									}
								/>
							</div>
							<div className="forms">
								<span>State/Province</span>
								<input
									type="text"
									onChange={(e) =>
										setUser({
											...user,
											billingAddress: {
												...user.billingAddress,
												state: e.target.value,
											},
										})
									}
								/>
							</div>
							<div className="forms">
								<span>Zip/Postal Code*</span>
								<input
									type="text"
									onChange={(e) =>
										setUser({
											...user,
											billingAddress: {
												...user.billingAddress,
												zip: e.target.value,
											},
										})
									}
								/>
							</div>
						</div>
						<div className="forms">
							<span>Country *</span>
							<input
								type="text"
								onChange={(e) =>
									setUser({
										...user,
										billingAddress: {
											...user.billingAddress,
											country: e.target.value,
										},
									})
								}
							/>
						</div>
					</div>
					<div className="palce-order">
						<Link onClick={(e) => placehOlder(e)} to="/checkout">
							Place Order
						</Link>
					</div>
				</div>
				<div className="order-info">
					<div className="items">
						<div className="title">
							<h4>Item in Order</h4>
						</div>
						<div className="orders">
							{products.length !== 0 ? (
								products.map((product) => {
									return (
										<div key={product.id} className="item">
											<FontAwesomeIcon
												onClick={() =>
													deleteItem(product)
												}
												className="delete-item"
												icon={faClose}
											/>
											<img
												alt={product.name}
												src={product.image}
											/>
											<div className="name">
												<Link className="product-link" to={`/product_detail/${product.id}`}>{product.name}</Link>
												<p>{`Quantity: ${product.count}`}</p>
											</div>
											<p>{`$ ${product.price} USD`}</p>
										</div>
									);
								})
							) : (
								<h1>Your cart is empty</h1>
							)}
						</div>
					</div>
					<div className="items">
						<div className="title">
							<h4>Order Summary</h4>
						</div>
						<div className="orders">
							<div className="item">
								<h4>Subtotal</h4>
								<p>{`$ ${subTotal.toFixed(2)} USD`}</p>
							</div>
							<div className="item">
								<h4>{shipping}</h4>
								<p>{`$ ${shippingAmount.toFixed(2)} USD`}</p>
							</div>
							<div className="item">
								<h4>Total</h4>
								<p>{`$ ${(shippingAmount + subTotal).toFixed(
									2
								)} USD`}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
	};
};

export default connect(mapStateToProps, { setUserInfo })(CheckOut);
