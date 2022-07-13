import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
	return (
		<div className="nav-bar">
			<a href="" className="logo">
				<img
					alt="logo"
					src="https://uploads-ssl.webflow.com/62be0f5753ff54221209cbb4/62be0f5853ff54649009cbdd_Logo-p-130x130q80.png"
				/>
			</a>
			<div className="nav-right">
				<nav>
					<li>Home</li>
					<li>About me</li>
					<li>Products</li>
					<li>Contact me</li>
				</nav>
				<a className="user-item">
					<FontAwesomeIcon icon={faUser} />
				</a>
				<a className="user-item">
					<FontAwesomeIcon icon={faCartShopping} />
				</a>
			</div>
		</div>
	);
}

export default NavBar;
