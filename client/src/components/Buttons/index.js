import React from "react";

export function SubmitBtn (props) {
    return (
<button className="submit-btn" {...props} role="button">Submit</button>
    );
}

export function LoginBtn(props) {
    return (
        <button {...props} className="loginBtn">Login</button>
    );
}

export function AcceptBtn(props) {
    return (
        <button {...props} className="loginBtn">Accecpt</button>
    );
}

export function DeclineBtn(props) {
    return (
        <button {...props} className="loginBtn">Decline</button>
    );
}
