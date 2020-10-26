import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./pages/accounts/login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcomeview from "./pages/welcomeview/welcomeview"
import Privateview from "./pages/privateview/privateview"
import "./App.scss";

const App=(prop)=> {
	
	const store = useSelector((store) => store);	

	let userToken = store.Token;
	
	if (userToken==null) {
		userToken = localStorage.getItem("token");    
	}

	let content = (
		<>      
			<Route exact path="/Welcomeview" component={Welcomeview} />
			<Route exact path="/Privateview" component={Privateview} />
			<Route exact path="/" component={Welcomeview} />
		</>
	);
	

	if (!userToken){    
		content = (
			<>
			<Route exact path="/Login" component={Login} />
			<Route exact path="/Welcomeview" component={Welcomeview} />
			<Route exact path="/" component={Welcomeview} />
			</>
		);	
	}

	return (
		<div className="container-full ">
			<BrowserRouter>
			<Navbar />
			<main>
				<div className="container">
					<Switch>{content}</Switch>
				</div>
			</main>
			<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
