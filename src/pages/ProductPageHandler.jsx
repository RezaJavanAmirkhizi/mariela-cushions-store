import Product from "../components/Product";

function ProductPageHandler(props) {
	return (
		<>
			<div className="page-title">
				<h1>{props.pageTitle}</h1>
			</div>
			<div className="products">
				{props.products.length !== 0
					? props.products.map((item) => {
							return (
								<Product
									key={item.id}
									id={item.id}
									image={item.image}
									name={item.name}
									price={item.price}
								/>
							);
					  })
					: ""}
			</div>
		</>
	);
}

export default ProductPageHandler;
