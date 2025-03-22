import CarouselBanner from "@/components/carousel-banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import TextBanner from "@/components/text-banner";

export default function Home() {
  const slides = [
    {
      image: "/carousel-images/slide-1.jpg",
      alt: "slide 1",
      link: "/",
      title: "Test 1"
    },
    {
      image: "/carousel-images/slide-2.jpg",
      alt: "slide 2",
      link: "/",
      title: "Test 2"
    }
  ];

  return (
    <>
      <Header />
      <CarouselBanner slides={slides} />
      <TextBanner 
        title="Test Banner"
        description="Lorem ipsum dolor sit amet. Aut quia dolor cum quia consectetur eum officia iusto quo repellendus ratione eos dolores officia. Qui soluta adipisci quo laudantium veritatis et dignissimos galisum ad eaque voluptatem qui laborum eius. Est officiis sint aut magnam vero non voluptatum iste. Ea modi modi sed neque neque id enim voluptas id quos nihil in consectetur quisquam."
        image_link="/banner.jpg"
        image_alt="text banner image"
      />
      <Footer />
    </>
  );
}
