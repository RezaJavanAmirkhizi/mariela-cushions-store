
function ContactMe() {
    
    return (
		<div className="contact-me">
			<div className="contacts">
				<div className="item">
					<p>EMAIL</p>
					<span>support@website.com</span>
				</div>
				<div className="item">
					<p>PHONE</p>
					<span>800-123-456</span>
				</div>
				<div className="item">
					<p>ADDRESS</p>
					<span>
						23 Evergreen Street, San Francisco, CaliforniaUSA
					</span>
				</div>
			</div>
			<div className="message">
				<p>
					Drop us your message and I'll get back to you as soon as
					possible.
				</p>
				<div className="contact-info">
					<input type="text" placeholder="your name" />
					<input type="text" placeholder="your company" />
					<input type="phone" placeholder="your phone" />
					<input type="email" placeholder="your email" />
				</div>
                <textarea placeholder="your massage" />
                <a href="/">Let's talk</a>
			</div>
		</div>
	);
}

export default ContactMe;