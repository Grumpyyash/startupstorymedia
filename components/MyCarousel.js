/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Carousel from "@brainhubeu/react-carousel";
import CarouselElement from "./utils/CarouselElement";

import mediaData from "../components/mediaCoverage.json";

const MyCarousel = () => {
  return (
    <>
      <Carousel
        infinite
        addArrowClickHandler
        arrowLeft={<IoIosArrowDropleftCircle size="2rem" cursor="pointer" />}
        arrowRight={<IoIosArrowDroprightCircle size="2rem" cursor="pointer" />}
        centered
        slidesPerPage="2"
        breakpoints={{
          640: { slidesPerPage: "1" },
          960: { slidesPerPage: "2" },
        }}
        sx={{ width: ["100%", "80%"], m: "auto", my: "2.5rem" }}
      >
        {mediaData.map((item, key) => {
          return (
            <CarouselElement
              title={item.title}
              link={item.link}
              key={key}
              image={item.image}
            />
          );
        })}
      </Carousel>
    </>
  );
};

export default MyCarousel;
