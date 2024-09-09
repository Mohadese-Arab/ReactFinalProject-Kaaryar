// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import img1 from "../../assets/images/slider1.avif";
import img2 from "../../assets/images/slider2.avif";
import img3 from "../../assets/images/slider3.avif";
import img4 from "../../assets/images/slider4.avif";

const images = [img1, img2, img3, img4];


function Slider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        className="mySwiper"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img src={image} alt={`image${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
