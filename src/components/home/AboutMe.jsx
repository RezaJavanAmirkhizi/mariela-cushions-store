
function AboutMe() {
    return (
		<div className="about-me">
			<div className="con-about">
				<div className="des">
					<p>{"About me".toUpperCase()}</p>
					<h1>I'm a trendy Cushion Designer</h1>
					<a href="/">{"learn more".toUpperCase()}</a>
				</div>
				<div className="pic">
					<img
						alt="About me"
						src="https://uploads-ssl.webflow.com/62be0f5753ff54221209cbb4/62be0f5853ff54069909cbed_1.png"
					/>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;