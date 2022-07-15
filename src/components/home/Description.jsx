
function Description() {
    return (
		<div className="description">
			<p>{"I'm a cushion designer".toUpperCase()}</p>
			<span>
				Based in San Francisco, California I design trendy and fashion
				Cushions, since I have memory I always had a tendency to design
				and illustration.
			</span>
			<a className="button" href="/">
				LEARN MORE
			</a>
			<div className="parts">
				<div className="item">
					<div className="pic">
						<img
							alt="About me"
							src="https://uploads-ssl.webflow.com/62be0f5753ff54221209cbb4/62be0f5853ff54069909cbed_1.png"
						/>
					</div>
					<div className="title">
						<h2>About me</h2>
						<a href="/">Learn more</a>
					</div>
				</div>
				<div className="item">
					<div className="pic">
						<img
							alt="My products"
							src="https://uploads-ssl.webflow.com/62be0f5753ff54221209cbb4/62be0f5853ff54fc5009cbe7_2.png"
						/>
					</div>
					<div className="title">
						<h2>My products</h2>
						<a href="/">Learn more</a>
					</div>
				</div>
				<div className="item">
					<div className="pic">
						<img alt="Contact me" src="https://uploads-ssl.webflow.com/62be0f5753ff54221209cbb4/62be0f5853ff544e9b09cbe8_3.png" />
					</div>
					<div className="title">
						<h2>Contact me</h2>
						<a href="/">Learn more</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Description;