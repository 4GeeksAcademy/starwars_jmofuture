import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Demo } from "./views/demo";
import { Single } from "./views/single";
import Details from "./component/details";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
//import { Footer } from "./component/footer"; <Footer />

import { Home } from "./views/home";

const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div className="container">
			<BrowserRouter basename={basename}>
					<Navbar />
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/details/:type/:uid" element={<Details />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);