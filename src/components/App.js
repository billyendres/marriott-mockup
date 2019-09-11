import React from "react";
import hotel from "../images/hotel.jpg";
import styled from "styled-components";

const App = () => {
	return (
		<Background>
			<Hotel>
				<h1
					style={{
						color: "white",
						marginTop: "5rem",
						position: "absolute"
					}}
				>
					app
				</h1>
				<SideBar>
					<h1>kjwdbjkbc</h1>
					<h2>dcnkwjenjkwe</h2>
					<h3>sdjkcnjkwcn</h3>
				</SideBar>
			</Hotel>
		</Background>
	);
};

export default App;

const Background = styled.div`
	margin: 0;
	padding: 0;
	position: relative;
	/* display: flex; */
`;

const Hotel = styled.div`
	background: url(${hotel}) no-repeat;
	position: absolute;
	background-size: 80vw 100vh;
	/* background-size: cover; */
	height: 100vh;
	width: 80vw;
	@media only screen and (max-width: 1000px) {
		 {
			width: 100vw;
			height: 80vh;
			background-size: 100vw 80vh;
		}
	}
`;

const SideBar = styled.div`
	width: 20vw;
	height: 100vh;
	position: absolute;
	display: block;
	left: 80%;
	background: white;
	@media only screen and (max-width: 1000px) {
		 {
			width: 100vw;
			height: 20vh;
			left: 0;
			top: 80%;
		}
	}
`;
