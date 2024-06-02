// "use client";
// import { useEffect, useRef, useState } from "react";

// const ImageSlider: React.FC<{ images: { url: string; text: string }[] }> = ({
//   images,
// }) => {
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (slider) {
//       slider.addEventListener("scroll", () => {
//         setScrollPosition(slider.scrollLeft);
//       });
//     }
//   }, []);

//   return (
//     <>
//       <div className="relative overflow-x-auto scrollbar-hide">
//         <div
//           ref={sliderRef}
//           className="flex space-x-4 p-4 relative overflow-x-scroll"
//           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//         >
//           {images.map((image, index) => (
//             <div key={index} className="w-64 h-64 flex-shrink-0 relative">
//               <img
//                 src={image.url}
//                 alt={`Image ${index + 1}`}
//                 className="object-cover w-full h-full"
//               />
//               <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 transition duration-300 opacity-100">
//                 <div className="text-white text-center">
//                   <span className="text-xl font-bold">{image.text}</span>
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="block mt-2 text-sm underline"
//                   >
//                     View More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ImageSlider;

// 2nd ImageSlider
"use client";
import React, { useState, useEffect } from "react";
import Swiper from "../swiper";
import SwiperMobile from "../SwiperMobile";

interface Image {
  url: string;
  text: string;
}

interface ImageSliderProps {
  images: Image[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [currentIndexMobile, setCurrentIndexMobile] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth >= 1024) {
        setVisibleImages(4);
      } else if (window.innerWidth >= 768) {
        setVisibleImages(3);
      } else {
        setVisibleImages(1);
        setIsMobileView(true);
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);

    return () => {
      window.removeEventListener("resize", updateVisibleImages);
    };
  }, []);



  return (
    <div className="w-full relative">
      <div className="md:justify-end items-center py-4 justify-center md:flex hidden">
        <Swiper
          currentIndex={currentIndex}
          images_length={images.length}
          setCurrentIndex={setCurrentIndex}
          visibleImages={visibleImages}
        />
      </div>

      <div className="flex overflow-hidden space-x-4 transition-transform duration-300 ease-in-out">
        {!isMobileView &&
          images
            .slice(currentIndex - visibleImages + 1, currentIndex + 1)
            .map((image, index) => (
              <div key={index} className="relative md:w-1/4">
                <img
                  src={image.url}
                  alt={image.text}
                  className="w-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center opacity-100 transition-opacity duration-300">
                  <div className="text-4xl font-bold">{image.text}</div>
                  <a href="#" className="mt-2 text-sm underline">
                    View More
                  </a>
                </div>
              </div>
            ))}
        {isMobileView &&
          images
            .slice(
              currentIndexMobile - visibleImages + 1,
              currentIndexMobile + 1
            )
            .map((image, index) => (
              <div key={index} className="relative md:w-1/4">
                <img
                  src={image.url}
                  alt={image.text}
                  className="w-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center opacity-100 transition-opacity duration-300">
                  {" "}
                  <div className="text-4xl font-bold">{image.text}</div>
                  <a href="#" className="mt-2 text-sm underline">
                    View More
                  </a>
                </div>
              </div>
            ))}
      </div>
      <SwiperMobile
        currentIndex={currentIndexMobile}
        images_length={images.length}
        setCurrentIndex={setCurrentIndexMobile}
        visibleImages={visibleImages}
      />
    </div>
  );
};

export default ImageSlider;


