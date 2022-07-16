function Product(props) {
	return (
		<a className="product" href="/">
			<div className="pic">
				<img src={props.image} alt={props.name} />
			</div>
			<h3>{props.name}</h3>
			<p>{`$${props.price} USD`}</p>
		</a>
	);
}

export default Product;
