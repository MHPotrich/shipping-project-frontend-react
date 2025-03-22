"use client";

import React from "react";
import "./style.scss";
import Image from "next/image";
import Link from "next/link";

export default function CarouselBanner({ slides }){
    const [current_slide_index, set_current_slide_index] = React.useState(0);

    function change_slide_handler(is_next){
        const slides_length = slides.length - 1;

        if(is_next){
            if((current_slide_index + 1) > slides_length){
                set_current_slide_index(0);
                return;
            }

            set_current_slide_index(current_slide_index + 1);
            return;
        }

        if(current_slide_index - 1 < 0){
            set_current_slide_index(slides_length);
            return;
        }

        set_current_slide_index(current_slide_index - 1);
    }

    React.useEffect(() => {
        setTimeout(() => {
            change_slide_handler(true);
        }, 5000);
    }, [current_slide_index]);

    return <section id="carousel-banner">
        <div className="container">
            <div className="slider">
                {
                    slides && <>
                        <button className="slider-button prev-slider-button" type="button" onClick={() => change_slide_handler(false)}>prev</button>
                        <Link href={slides[current_slide_index].link}>
                            <Image className="slider-image" src={slides[current_slide_index].image} alt={slides[current_slide_index].alt} fill sizes="(min-width: 808px) 50vw, 100vw" />
                        </Link>
                        <button className="slider-button next-slider-button" type="button" onClick={() => change_slide_handler(true)}>next</button>
                        { slides[current_slide_index].title && <h1 className="slider-title">{slides[current_slide_index].title}</h1> }
                    </>
                }
            </div>
        </div>
    </section>;
}