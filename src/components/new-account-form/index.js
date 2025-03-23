"use client";

import React from "react";
import "./style.scss";

export default function NewAccountForm(){
    const [first_name, set_first_name] = React.useState("");
    const [last_name, set_last_name] = React.useState("");
    const [email, set_email] = React.useState("");
    const [password, set_password] = React.useState("");
    const [confirm_password, set_confirm_password] = React.useState("");

    return (
        <section id="new-account-form">
            <div className="container">
                <h1>Create new Account</h1>
                <div>
                    <label htmlFor="first-name-input">First name</label>
                    <input id="first-name-input" placeholder="First name" onChange={event => set_first_name(event.target.value)}></input>
                    <strong>Error message</strong>
                </div>
                <div>
                    <label htmlFor="last-name-input">Last name</label>
                    <input id="last-name-input" placeholder="Last name" onChange={event => set_last_name(event.target.value)}></input>
                    <strong>Error message</strong>
                </div>
                <div>
                    <label htmlFor="email-input">Email</label>
                    <input id="email-input" placeholder="Email" onChange={event => set_email(event.target.value)}></input>
                    <strong>Error message</strong>
                </div>
                <div>
                    <label htmlFor="password-input">Password</label>
                    <input id="password-input" placeholder="Password" onChange={event => set_password(event.target.value)}></input>
                    <strong>Error message</strong>
                </div>
                <div>
                    <label htmlFor="confirm-password-input">Confirm password</label>
                    <input id="confirm-password-input" placeholder="Confirm password" onChange={event => set_confirm_password(event.target.value)}></input>
                    <strong>Error message</strong>
                </div>
                <button type="button">Create account</button>
                <button type="button">Cancel</button>
            </div>
        </section>
    );
}