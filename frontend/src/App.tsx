import React from 'react';
import { useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
	useEffect(() => {
		console.log("init app");
		fetch("http://localhost:5000/api/data")
		.then((response) => {
			console.log("response",response);
			response.json().then((data: {x: number, s: string }) => { console.log(data); })
				.catch((error) => { console.log("json error"); console.log(error); });
		})
		.catch((error) => {console.log("fetch error"); console.log(error);})
		.finally(() => {
			console.log("finally");
		});
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
