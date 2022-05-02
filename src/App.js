import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Events from './Pages/Events';

function App() {
	return (
		<div className="app">
			<div className="bg-image"></div>
			<div className="container">
				<Router>
					<div className="navbar">
						<Navbar />
					</div>
					<div className="elements">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="flight-plan" element={<Menu />} />
							<Route path="about" element={<About />} />
							<Route path="fly-outs" element={<Events />} />
						</Routes>
					</div>
				</Router>
			</div>
		</div>
	);
}

export default App;
