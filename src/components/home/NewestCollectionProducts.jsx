import Product from "../Product"

function NewestCollectionProducts() {

    	const products = [
			{
				name: "Plated Cushion",
				price: 19.99,
				image: "https://th.bing.com/th/id/R.143739648776119d2cd8ce4796e6dea7?rik=ThbN%2fhfOp5t93w&pid=ImgRaw&r=0",
			},
			{
				name: "Silver Cushion",
				price: 19.99,
				image: "https://th.bing.com/th/id/OIP.CAicqAxWdyZQxCEkhlE9KAHaHa?pid=ImgDet&rs=1",
			},
			{
				name: "Deep Blue Cushion",
				price: 19.99,
				image: "https://th.bing.com/th/id/R.314dcd0c2e788261b0e20b8ba04a1025?rik=GXXZYl7RihZ1ow&riu=http%3a%2f%2fmobileimages.lowes.com%2fproduct%2fconverted%2f070145%2f070145031931_08865447.jpg%3fsize%3dpdhi&ehk=ljM6z26uWPwIYo2CFDuUT%2fOvyGWuCXs8%2bxKaCH4Vl0E%3d&risl=&pid=ImgRaw&r=0",
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

    return(
        <div className="products">
           {
            products.map((item, index) => {
                return (
					<Product
						key={index}
						image={item.image}
						name={item.name}
						price={item.price}
					/>
				);
            })
           }
        </div>
    )
}

export default NewestCollectionProducts;