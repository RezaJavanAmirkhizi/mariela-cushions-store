import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {

	const [isOpen, setIsOpen] = useState(false);

	const menuHandler = () => {
		if (isOpen) {
			setIsOpen(false);
		}
		else {
			setIsOpen(true);
		}
	}

	const clickHandler = () => {
		if (isOpen) {
			setIsOpen(false);
		}
	}

	return (
		<div className="nav-bar">
			<a href="/" className="logo">
				<img
					alt="logo"
					src="https://uploads-ssl.webflow.com/62be0f5753ff54221209cbb4/62be0f5853ff54649009cbdd_Logo-p-130x130q80.png"
				/>
			</a>
			<nav className={`menu-item ${isOpen ? "open" : "closed"}`}>
				<li>
					<Link
						onClick={() => clickHandler()}
						className="link"
						to="/"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						onClick={() => clickHandler()}
						className="link"
						to="/#about_me"
					>
						About me
					</Link>
				</li>
				<li>
					<Link
						onClick={() => clickHandler()}
						className="link"
						to="/products"
					>
						Products
					</Link>
				</li>
				<li>
					<Link
						onClick={() => clickHandler()}
						className="link"
						to="/#contact_me"
					>
						Contact me
					</Link>
				</li>
			</nav>
			<div className="nav-right">
				<div className="nav-item">
					<FontAwesomeIcon
						onClick={() => menuHandler()}
						className="menu-icon"
						icon={faBars}
					/>
				</div>
				<div className="nav-item">
					<Link
						onClick={() => clickHandler()}
						className="icon-link"
						to="/checkout"
					>
						<FontAwesomeIcon icon={faCartShopping} />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
