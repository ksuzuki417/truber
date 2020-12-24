import React from "react";

export function SubmitBtn (props) {
    return (
<button className="submit-btn" {...props} role="button">Submit</button>
    );
}

export function LoginBtn(props) {
    return (
        <button {...props} className="loginBtn" style={{}}>Login</button>
    );
}