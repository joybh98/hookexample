import React, { useState,useEffect } from "react";
import "./App.css";

export default function App() {
	
	// Set cartItems with useState so it can use the same state when we are using it below
	const [cartItems, setCartItems] = useState([])
	
	const [scrollDepth, setscrollDepth] = useState([])

	function determineUserScrollDepth() {

		const scrolled = document.document.scrollTop
		setscrollDepth(scrolled);

	}

	useEffect(() => {
		window.eventListner('scroll', determineUserScrollDepth)
	}

	return (
		<div className="App">	
					<h1>Items in your cart: {cartItems.toString()}</h1>
		<button
				onClick={() => {
					setCartItems([...cartItems, 'apple'])
				}}
		>
		<p>Add to cart</p>

		</button>
		</div>
	);
}

