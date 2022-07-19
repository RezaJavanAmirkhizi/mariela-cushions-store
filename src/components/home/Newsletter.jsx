
function Newsletter() {
    return (
		<div className="newsletter">
			<p>NEWSLETTER</p>
			<span>Get promotions & updates!</span>
            <div className="contact-info">
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Your email" />
                <a href="/">subscribe</a>
            </div>
		</div>
	);
}

export default Newsletter;