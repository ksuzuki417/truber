import React from 'react';
import { useHistory } from "react-router-dom";
import Container from '../Container/Container';
import Wrapper from '../Wrapper/Wrapper';

export default function AuthOptions (){
  const history = useHistory();
  const register = () => history.push("/signup");
	const login= () => history.push("/login");
	
	return(
		<Wrapper>
			<Container>
<nav className="auth-options">
			<button type="button" class="btn btn-success" onClick={register}>Sign Up</button>
			<button type="button" class="btn btn-success" onClick={login}>Login</button>
		</nav>
			</Container>
		</Wrapper>
		
	);
}