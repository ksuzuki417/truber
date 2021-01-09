import React from 'react';
import { useHistory } from "react-router-dom";

export default function AuthOptions (){
  const history = useHistory();
  const register = () => history.push("/signup");
	const login= () => history.push("/login");
	
	return(
		<nav className="auth-options">
			<button onClick={register}>Sign Up</button>
			<button onClick={login}>Login</button>
		</nav>
	);
}