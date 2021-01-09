import React from "react";
import "../../styles/style.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from "../../components/Container/Container";
import AuthOptions from "../../components/auth/AuthOptions"
import Header from "../../components/Header";

function Homepage() {
	return (
		<Wrapper>
			<Container>
				
			<div className="card text-center border-success mb-3 ">
				<div className="card-body">
				<Header/>
					<h2 className="card-text">About Us:</h2>
					<p>Have a truck and looking to make some extra cash?</p>
					<p>Need a truck and don't know who to call?</p>
					<p>Truber is used to help connect truck owners and those needing to use a truck.</p>
					<p>Sign Up or Login to begin!</p>
    				<AuthOptions></AuthOptions>
				</div>
			</div>
			</Container>
		</Wrapper>
		)
}

export default Homepage;