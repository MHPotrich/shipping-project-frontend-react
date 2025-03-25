import "./style.scss";
import Link from "next/link";

export default function ListShipping(){
    return <section id="list-shippings">
        <div className="container">
            <div className="title">
                <h1>Shippings</h1>
                <button type="button">New shipping</button>
            </div>
            
            <div className="shippings-table">
                <div className="table-title">
                    <span>Shipping ID</span>
                    <span>Status</span>
                    <span>Client</span>
                    <span></span>
                </div>
                <div className="table-line">
                    <span>0001</span>
                    <span>PENDING</span>
                    <span>first_name last_name</span>
                    <div><Link href="/">Details</Link></div>
                </div>
                <div className="table-line">
                    <span>0002</span>
                    <span>PENDING</span>
                    <span>first_name last_name</span>
                    <div><Link href="/">Details</Link></div>
                </div>
            </div>
        </div>
    </section>;
}