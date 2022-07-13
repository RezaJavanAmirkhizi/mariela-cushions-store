import "../asset/index.scss";
import { Route, Routes } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import Home from "../pages/Home";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
