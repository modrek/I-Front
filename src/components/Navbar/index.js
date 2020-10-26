import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import * as actionTypes from "../../store/user/userActionTypes";
import Logo from "../Logo";
import "./index.scss";

const Navbar = (props) => {
	const store = useSelector((store) => store);
	const dispatch = useDispatch();

	let userToken = store.Token;
	if (userToken == null) {
		userToken = localStorage.getItem("token");
	}

	let menuItemsobj = [{ title: "Welcome View", url: "/WelcomeView" }];
	if (userToken == undefined || userToken == null)
		menuItemsobj.push({ title: "Login", url: "/Login" });

	let logoutitem = <></>;
	if (userToken != null) {
		menuItemsobj.push({ title: "Private View", url: "/PrivateView" });
		logoutitem = (
			<>
				<li className="nav-item">
					<NavLink
						className="nav-link "
						to="/"
						exact
						onClick={() => {
							logout();
						}}
						>
						Logout
					</NavLink>
			</li>
			</>
		);
	}

	function logout() {
		localStorage.removeItem("token");
		dispatch({ type: actionTypes.START_LOGOUT });
	}

	let menuitems = menuItemsobj.map((itm, index) => {
		return (
			<li key={index} className="nav-item">
				<NavLink className="nav-link" to={itm.url} exact>
					{itm.title}
				</NavLink>
			</li>
		);
	});

	return (
	<header>
		<nav class="navbar navbar-expand-md bg-dark navbar-dark">
		<Logo />
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#collapsibleNavbar"
		>
		<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="collapsibleNavbar">
			<ul class="navbar-nav">
			{menuitems}
			{logoutitem}
			</ul>
		</div>
		</nav>
	</header>
	);
};

export default Navbar;
