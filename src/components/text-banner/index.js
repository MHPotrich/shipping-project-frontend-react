import "./style.scss";
import Image from "next/image";

export default function TextBanner({ title, description, image_link, image_alt }){
    return <section id="text-banner">
        <div className="container">
            <div className="banner-container">
                <div className="text-content-area">
                    <h1 className="title">{title}</h1>
                    <span className="description">{description}</span>
                </div>
                <div className="image-content">
                    {image_link && <Image className="banner-image" src={image_link} alt={image_alt} fill />}
                </div>
            </div>
        </div>
    </section>
}