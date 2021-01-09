import React from "react";

export function SubmitBtn (props) {
    return (
<button className="submit-btn" {...props}>Submit</button>
    );
}

export function LoginBtn(props) {
	return (
	<button {...props} className="loginBtn">Login</button>
	);
}

export function AcceptBtn(props) {
	return (
	<button type="button" class="btn btn-success" {...props} className="loginBtn">Accept</button>
	);
}

export function DeclineBtn(props) {
	return (
	<button type="button" class="btn btn-success" {...props} className="loginBtn">Decline</button>
	);
}
