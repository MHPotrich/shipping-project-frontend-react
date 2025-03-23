"use client";

import "./style.scss";
import Link from "next/link";
import React from "react";

export default function LoginForm(){
    const [email, set_email] = React.useState("");
    const [password, set_password] = React.useState("");
    const [email_error, set_email_error] = React.useState();
    const [password_error, set_password_error] = React.useState();

    function login_handler(){
        const cache_email = email;
        const cache_password = password;

        set_password("");
        set_email_error("Invalid email!");
        set_password_error("Email end/or password Invalid!");
    }

    return <section id="login-form">
        <div className="container">
            <h1>Login</h1>
            <div className="input-area">
                <label htmlFor="email-login">Email:</label>
                <input id="email-login" placeholder="Email" onChange={event => set_email(event.target.value)} />
                {email_error && <strong className="error-warning">{email_error}</strong>}
            </div>
            <div className="input-area">
                <label htmlFor="password-login">Password:</label>
                <input id="password-login" placeholder="Password" type="password" onChange={event => set_password(event.target.value)} />
                {password_error && <strong className="error-warning">{password_error}</strong>}
            </div>
            <button type="button" className="login-button" onClick={login_handler}>Login</button>
            <span className="create-account-link">Don't have account? <Link href="/new-account">create an account</Link></span>
        </div>
    </section>
}