import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const OrderResult = () => {
	return (
		<div className="container">
			<FontAwesomeIcon icon={faCircleCheck} size="3x"/>
			<h1>Your order has been successfully registered</h1>
            <Link className="icon-link" to="/">Back To Home</Link> 
		</div>
	);
};

export default OrderResult;
