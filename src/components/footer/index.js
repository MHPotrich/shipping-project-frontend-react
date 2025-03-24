import "./style.scss";

import Link from "next/link";

export default function Footer(){
    return <footer>
        <div className="container">
            <div className="footer-content">
                <div className="link-area">
                    <Link href="/">Link</Link>
                    <Link href="/">Link</Link>
                    <Link href="/">Link</Link>
                    <Link href="/">Link</Link>
                    <Link href="/">Link</Link>
                    <Link href="/">Link</Link>
                    <Link href="/">Link</Link>
                </div>
                <div className="link-area">
                    <Link href="/">Link</Link>
                    <Link href="/">Link</Link>
                    <Link href="/">Link</Link>
                    <Link href="/">Link</Link>
                    <Link href="/">Link</Link>
                    <Link href="/">Link</Link>
                    <Link href="/">Link</Link>
                </div>
            </div>
            <div className="bottom-footer-area">
                <span>Lorem ipsum dolor sit amet.</span>
            </div>
        </div>
    </footer>;
}