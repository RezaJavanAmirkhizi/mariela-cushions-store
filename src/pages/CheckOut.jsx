import { useState } from "react";

function CheckOut() {
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

	return (
		<>
			<div className="page-title">
				<h1>Checkout</h1>
			</div>
			<div className="cart-info">
				<div className="contact-info">
					<div className="customer">
						<div className="title">
							<h4>Customer Info</h4>
							<span>* Required</span>
						</div>
						<div className="forms">
							<span>Email *</span>
							<input type="email" />
						</div>
					</div>
					<div className="address">
						<div className="title">
							<h4>Shipping Address</h4>
							<span>* Required</span>
						</div>
						<div className="forms">
							<span>Full Name *</span>
							<input type="text" />
						</div>
						<div className="forms">
							<span>Street Address *</span>
							<input type="text" />
						</div>
						<div className="row-forms">
							<div className="forms">
								<span>City *</span>
								<input type="text" />
							</div>
							<div className="forms">
								<span>State/Province</span>
								<input type="text" />
							</div>
							<div className="forms">
								<span>Zip/Postal Code*</span>
								<input type="text" />
							</div>
						</div>
						<div className="forms">
							<span>Country *</span>
							<input type="text" />
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
							<input type="text" />
						</div>
						<div className="row-forms">
							<div className="forms">
								<span>Expiration Date *</span>
								<input type="text" />
							</div>
							<div className="forms">
								<span>Security Code *</span>
								<input type="text" />
							</div>
						</div>
						<div className="row-forms">
							<div className="check-box">
								<input
									type="checkBox"
									id="billing-address"
									checked={sameBillingAddress}
									onChange={() =>
										setSameBillingAddress(
											!sameBillingAddress
										)
									}
								/>
								<label htmlFor="billing-address">
									Billing address same as shipping
								</label>
							</div>
						</div>
					</div>
					<div className={`billing-address ${sameBillingAddress ? "disabled" : ""}`}>
						<div className="title">
							<h4>Billing Address</h4>
							<span>* Required</span>
						</div>
						<div className="forms">
							<span>Full Name *</span>
							<input type="text" />
						</div>
						<div className="forms">
							<span>Street Address *</span>
							<input type="text" />
						</div>
						<div className="row-forms">
							<div className="forms">
								<span>City *</span>
								<input type="text" />
							</div>
							<div className="forms">
								<span>State/Province</span>
								<input type="text" />
							</div>
							<div className="forms">
								<span>Zip/Postal Code*</span>
								<input type="text" />
							</div>
						</div>
						<div className="forms">
							<span>Country *</span>
							<input type="text" />
						</div>
					</div>
					<div className="palce-order">
						<a href="/">Place Order</a>
					</div>
				</div>
				<div className="order-info">
					<div className="items">
						<div className="title">
							<h4>Item in Order</h4>
						</div>
						<div className="orders">
							<div className="item">
								<img
									alt=""
									src="https://th.bing.com/th/id/OIP.rh7gnPPn9weu7YKyVvvu6wHaHa?pid=ImgDet&rs=1"
								/>
								<div>
									<h4>Green Cushion</h4>
									<p>Quantity: 1</p>
								</div>
								<p>$ 19.99 USD</p>
							</div>
							<div className="item">
								<img
									alt=""
									src="https://th.bing.com/th/id/OIP.rh7gnPPn9weu7YKyVvvu6wHaHa?pid=ImgDet&rs=1"
								/>
								<div>
									<h4>Green Cushion</h4>
									<p>Quantity: 1</p>
								</div>
								<p>$ 19.99 USD</p>
							</div>
						</div>
					</div>
					<div className="items">
						<div className="title">
							<h4>Order Summary</h4>
						</div>
						<div className="orders">
							<div className="item">
								<h4>Subtotal</h4>
								<p>$59.99 USD</p>
							</div>
							<div className="item">
								<h4>{shipping}</h4>
								<p>{`$ ${shippingAmount} USD`}</p>
							</div>
							<div className="item">
								<h4>Total</h4>
								<p>$78.87 USD</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CheckOut;
