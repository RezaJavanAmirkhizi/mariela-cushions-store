import { Link } from "react-router-dom";
function Footer() {
	return (
		<div className="footer">
			<div className="top">
				<div className="item">
					<div className="icon">
						<img
							alt="Safe shopping"
							src="https://uploads-ssl.webflow.com/62be0f5753ff54221209cbb4/62be0f5853ff54bbb609cbdc_compras.svg"
						/>
					</div>
					<span>Safe shopping</span>
					<p>Buy with confidence</p>
				</div>
				<div className="item">
					<div className="icon">
						<img
							alt="Fast shipping"
							src="https://uploads-ssl.webflow.com/62be0f5753ff54221209cbb4/62be0f5853ff54c80409cbe0_entrega.svg"
						/>
					</div>
					<span>Fast shipping</span>
					<p>Get your product fast</p>
				</div>
				<div className="item">
					<div className="icon">
						<img
							alt="Satisfaction guarantee"
							src="https://uploads-ssl.webflow.com/62be0f5753ff54221209cbb4/62be0f5853ff54643609cbde_como.svg"
						/>
					</div>
					<span>Satisfaction guarantee</span>
					<p>Or get your money back</p>
				</div>
			</div>
			<div className="bottom">
				<a href="/" className="logo">
					<img
						alt="logo"
						src="https://uploads-ssl.webflow.com/62be0f5753ff54221209cbb4/62be0f5853ff54041509cbe6_Logo-w-p-130x130q80.png"
					/>
				</a>
				<div className="menu">
					<nav>
						<li>
							<Link className="link" to="/">
								Home
							</Link>
						</li>
						<li>
							<Link className="link" to="/#about_me">
								About me
							</Link>
						</li>
						<li>
							<Link className="link" to="/products">
								Products
							</Link>
						</li>
						<li>
							<Link className="link" to="/#contact_me">
								Contact me
							</Link>
						</li>
					</nav>
				</div>
				<div className="social-media">
					<div className="media">
						<img
							alt="Facebook"
							src="https://uploads-ssl.webflow.com/62be0f5753ff54221209cbb4/62be0f5853ff54cc5809cbe4_facebook-logo.svg"
						/>
					</div>
					<div className="media">
						<img
							alt="Instagram"
							src="https://uploads-ssl.webflow.com/62be0f5753ff54221209cbb4/62be0f5853ff547e7609cbdf_instagram%20(2).svg"
						/>
					</div>
					<div className="media">
						<img
							alt="Twiter"
							src="https://uploads-ssl.webflow.com/62be0f5753ff54221209cbb4/62be0f5853ff54f78309cbe3_gorjeo%20(1).svg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
