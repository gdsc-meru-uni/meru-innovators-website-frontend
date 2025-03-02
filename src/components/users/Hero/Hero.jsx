import "./Hero.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { HeroData } from "./HeroData";

import MegaDashboard from "../navbar/MegaDashboard";

import { useNavigate } from "react-router-dom";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Hero = () => {
  const navigate = useNavigate();

  const navigateRequiredPage = (link) => {
    navigate(link);
  };

  return (
    <div className="hero">
      <MegaDashboard />
      <div>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5s ease"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {HeroData.map((item) => (
            <div key={item.id} className="relative w-full h-[500px] hero-image">
              {/* Background Image */}
              <img
                src={item.urlImage}
                alt={item.title}
                fill
                className="object-cover w-full h-full"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl max-w-2xl">
                  {item.description}
                </p>
                <button
                  className="text-white  border-2 border-white px-[3rem] py-[0.5rem] rounded-[30px] mt-[2rem]"
                  onClick={() => {
                    navigateRequiredPage(item.buttonUrl);
                  }}
                >
                  {item.buttonDesc}
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
