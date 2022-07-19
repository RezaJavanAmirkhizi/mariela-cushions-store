import Product from "../Product";

function NewestCollectionProducts() {
	const products = [
		{
			name: "Yellow Cushion",
			price: 19.99,
			image: "https://th.bing.com/th/id/OIP.wz3YBB1Ntvltpn45vPtrFgHaHb?pid=ImgDet&rs=1",
		},
		{
			name: "Silver Cushion",
			price: 19.99,
			image: "https://th.bing.com/th/id/OIP.Xp3zWW8FXmGgin-7hoIQcwHaHa?pid=ImgDet&rs=1",
		},
		{
			name: "Deep Blue Cushion",
			price: 19.99,
			image: "https://th.bing.com/th/id/OIP.6m5kTr77ai4kJYz4M7rGgQHaHa?pid=ImgDet&w=600&h=600&rs=1",
		},
		{
			name: "Pink Cushion",
			price: 19.99,
			image: "https://th.bing.com/th/id/OIP._iaXZW-LAyVutANWxtZzowHaHa?pid=ImgDet&w=1000&h=1000&rs=1",
		},
		{
			name: "Black Cushion",
			price: 19.99,
			image: "https://images-na.ssl-images-amazon.com/images/I/51fJqVavmIL._AC_SX679_.jpg",
		},
		{
			name: "Green Cushion",
			price: 19.99,
			image: "https://th.bing.com/th/id/OIP.rh7gnPPn9weu7YKyVvvu6wHaHa?pid=ImgDet&rs=1",
		},
	];

	return (
		<div className="products">
			{products.map((item, index) => {
				return (
					<Product
						key={index}
						image={item.image}
						name={item.name}
						price={item.price}
					/>
				);
			})}
		</div>
	);
}

export default NewestCollectionProducts;
