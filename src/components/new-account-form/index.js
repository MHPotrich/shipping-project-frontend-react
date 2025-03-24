"use client";

import React from "react";
import "./style.scss";

export default function NewAccountForm(){
    const [first_name, set_first_name] = React.useState("");
    const [last_name, set_last_name] = React.useState("");
    const [email, set_email] = React.useState("");
    const [password, set_password] = React.useState("");
    const [confirm_password, set_confirm_password] = React.useState("");
    const [first_name_error, set_first_name_error] = React.useState();
    const [last_name_error, set_last_name_error] = React.useState();
    const [email_error, set_email_error] = React.useState();
    const [password_error, set_password_error] = React.useState();
    const [confirm_password_error, set_confirm_password_error] = React.useState();

    function handler_create_account(){}

    function handler_cancel(){}

    return (
        <section id="new-account-form">
            <div className="container">
                <h1>Create new Account</h1>
                <div className="input-area">
                    <label htmlFor="first-name-input">First name</label>
                    <input id="first-name-input" placeholder="First name" value={first_name} onChange={event => set_first_name(event.target.value)}></input>
                    {first_name_error && <strong>{first_name_error}</strong>}
                </div>
                <div className="input-area">
                    <label htmlFor="last-name-input">Last name</label>
                    <input id="last-name-input" placeholder="Last name" value={last_name} onChange={event => set_last_name(event.target.value)}></input>
                    {last_name_error && <strong>{last_name_error}</strong>}
                </div>
                <div className="input-area">
                    <label htmlFor="email-input">Email</label>
                    <input id="email-input" placeholder="Email" value={email} onChange={event => set_email(event.target.value)}></input>
                    {email_error && <strong>{email_error}</strong>}
                </div>
                <div className="input-area">
                    <label htmlFor="password-input">Password</label>
                    <input id="password-input" placeholder="Password" value={password} onChange={event => set_password(event.target.value)}></input>
                    {password_error && <strong>{password_error}</strong>}
                </div>
                <div className="input-area">
                    <label htmlFor="confirm-password-input">Confirm password</label>
                    <input id="confirm-password-input" placeholder="Confirm password" value={confirm_password} onChange={event => set_confirm_password(event.target.value)}></input>
                    {confirm_password_error && <strong>{confirm_password_error}</strong>}
                </div>
                <button type="button" onClick={handler_create_account} className="create-account-button">Create account</button>
                <button type="button" onClick={handler_cancel} className="cancel-create-account-button">Cancel</button>
            </div>
        </section>
    );
}