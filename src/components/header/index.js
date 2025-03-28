"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.scss";

export default function Header(){
    const pathname = usePathname();
    const menu_options = [
        {
            label: "Home",
            link: "/"
        },
        {
            label: "My shippings",
            link: "/shippings"
        },
        {
            label: "Tracking shippings",
            link: "/track"
        },
        {
            label: "Search shipping",
            link: "/search-shipping"
        },
        {
            label: "Pricing",
            link: "/plans"
        },
        {
            label: "About",
            link: "/about"
        }
    ];

    function is_option_active(href){
        return href == pathname;
    }

    return <>
        <header>
            <div className="container-vertial">
                <div className="menu-options">
                    { menu_options.map((option, index) => <Link key={index} href={option.link} ><button className={"menu-option" + ( is_option_active(option.link) ? " selected" : "" ) } type="button">{option.label}</button></Link>) }
                </div>
                <div className="login-area">
                    <Link href="/login"><button type="button">Login</button></Link>
                    <Link href="/create-account"><button type="button">Sign up</button></Link>
                    <Link href="/create-account"><button type="button">Sign up for business</button></Link>
                </div>
            </div>
        </header>
        <div className="placeholder-header"></div>
    </>
}