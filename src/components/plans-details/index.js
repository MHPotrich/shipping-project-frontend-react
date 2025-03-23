"use client";

import "./style.scss";

export default function PlansDetails(){
    const plans = [
        {
            title: "Plan 1",
            details: [
                {
                    feature: "Something",
                    value: "Included"
                },
                {
                    feature: "Something",
                    value: "Not included"
                },
                {
                    feature: "Something",
                    value: "Not included"
                }
            ],
            price: "$ 0.00"
        },
        {
            title: "Plan 2",
            details: [
                {
                    feature: "Something",
                    value: "Included"
                },
                {
                    feature: "Something",
                    value: "Included"
                },
                {
                    feature: "Something",
                    value: "Not included"
                }
            ],
            price: "$ 0.00"
        },
        {
            title: "Plan 3",
            details: [
                {
                    feature: "Something",
                    value: "Included"
                },
                {
                    feature: "Something",
                    value: "Included"
                },
                {
                    feature: "Something",
                    value: "Included"
                }
            ],
            price: "$ 0.00"
        }
    ];

    return (
        <section id="plans-details">
            <div className="container">
                <h1>Plans</h1>
                <div className="plans-grid">
                    {
                        plans.map((plan, index) => 
                            <div className="card" key={index}>
                                <h3 className="princing-title">{plan.title}</h3>
                                <div className="details-grid">
                                    {
                                        plan.details.map((detail, index) => 
                                            <div className="details-grid-line" key={index}>
                                                <span>{detail.feature}</span>
                                                <span>{detail.value}</span>
                                            </div>
                                        )
                                    }
                                </div>
                                <h1 className="price">{plan.price}</h1>
                                <button type="button">Contract</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}