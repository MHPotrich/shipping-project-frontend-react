import { Button, Stack, Divider } from "@mui/material";
import "./style.css";

export default function CustomSideBar(){
    return (
        <section id="custom-side-bar">
            <div className="side-bar-links-container">
                <a href="/">Home</a>
                <a href="/track">Track shipping</a>
                <a href="/account">My Account</a>
            </div>
        </section>
    );
}