export default function ShippingForm(){
    return <section id="shipping-form">
        <h1>New Shipping</h1>
        
        <span>---separator---</span>
        <div className="input-area">
            <label htmlFor="country-input">country</label>
            <input id="country-input"/>
            <strong>Error Message</strong>
        </div>
        <div className="input-area">
            <label htmlFor="state-input">state</label>
            <input id="state-input"/>
            <strong>Error Message</strong>
        </div>
        <div className="input-area">
            <label htmlFor="city-input">city</label>
            <input id="city-input"/>
            <strong>Error Message</strong>
        </div>
        <div className="input-area">
            <label htmlFor="details-input">Details(optional)</label>
            <input id="details-input"/>
            <strong>Error Message</strong>
        </div>
        <div className="input-area">
            <label htmlFor="zip-input">zip-code(not created yet in server side)</label>
            <input id="zip-input"/>
            <strong>Error Message</strong>
        </div>
        <span>---separator---</span>
    </section>
}