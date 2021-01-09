import React from "react";

export function SubmitBtn (props) {
    return (
<button type="button" className="btn btn-success submit-btn" {...props}>Submit</button>
    );
}

export function LoginBtn(props) {
	return (
	<button {...props} type="button" className="btn btn-success loginBtn">Login</button>
	);
}

export function AcceptBtn(props) {
	return (
	<button type="button" className="btn btn-success loginBtn" {...props}>Accept</button>
	);
}

export function DeclineBtn(props) {
	return (
	<button type="button" className="btn btn-success loginBtn" {...props}>Decline</button>
	);
}
