import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBar() {
	//Create this state to open or close the navbar when page is responsive
	const [isOpen, setIsOpen] = useState(false);

	//Create this state to show selected navbar item
	const [isSelected, setIsSelected] = useState("");

	useEffect(() => {
		let pathName = window.location.pathname;
		if (pathName === "/") {
			setIsSelected("Home");
		} else if (pathName === "/products") {
			setIsSelected("Products");
		}
	}, []);

	const menuHandler = () => {
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	};

	const clickHandler = (value) => {
		if (isOpen) {
			setIsOpen(false);
		}
		setIsSelected(value);
	};

	return (
		<div className="nav-bar">
			<a href="/" className="logo">
				<img
					alt="logo"
					src="https://uploads-ssl.webflow.com/62be0f5753ff54221209cbb4/62be0f5853ff54649009cbdd_Logo-p-130x130q80.png"
				/>
			</a>
			<nav className={`menu-item ${isOpen ? "open" : "closed"}`}>
				<li
					className={`link-con ${
						isSelected === "Home" ? "selected" : ""
					}`}
				>
					<Link
						onClick={() => clickHandler("Home")}
						className="link"
						to="/"
					>
						Home
					</Link>
				</li>
				<li
					className={`link-con ${
						isSelected === "About me" ? "selected" : ""
					}`}
				>
					<HashLink
						onClick={() => clickHandler("About me")}
						className="link"
						to="/#about_me"
					>
						About me
					</HashLink>
				</li>
				<li
					className={`link-con ${
						isSelected === "Products" ? "selected" : ""
					}`}
				>
					<Link
						onClick={() => clickHandler("Products")}
						className="link"
						to="/products"
					>
						Products
					</Link>
				</li>
				<li
					className={`link-con ${
						isSelected === "Contact me" ? "selected" : ""
					}`}
				>
					<HashLink
						onClick={() => clickHandler("Contact me")}
						className="link"
						to="/#contact_me"
					>
						Contact me
					</HashLink>
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
