"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";

const TestimonialSection: React.FC = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      // Add Swiper options here
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });

    return () => {
      // swiper.destroy();
    };
  }, []);

  return (
    <>
      <section className="w-screen bg-black flex justify-center items-center transition duration-300 opacity-100 overflow-hidden">
        <div className="w-full max-w-screen-lg mx-auto p-8 mt-0 bg-black text-white rounded-lg shadow-lg border-2 border-black flex flex-col overflow-hidden items-center space-y-8">
          <div className="container grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-black to-black p-8 rounded-lg shadow-lg">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {/* First Testimonial Slide */}

                  <div className="overflow-auto ">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        {/* First Testimonial Slide */}
                        <div className="swiper-slide">
                          <div className="text-white">
                            Loved the venue... One of the best venues for
                            wedding booking or just wanna hang out with your
                            best friends or Bachelorette parteee... Poolside and
                            the garden view with a lot of places to walk around
                            makes the place the best... It is definitely
                            hygienic, decent Indian food as they do have a
                            personal cook... There are gardeners too who have
                            been keeping the huge lawn perfect... Must visit.
                          </div>
                          <div className="flex items-center">
                            <img
                              src="https://jadehospitainment.com/wp-content/uploads/2023/03/image-4.png"
                              alt="Alisha Pradhan"
                              className="w-10 h-10 rounded-full mr-2"
                            />
                            <div>
                              <span className="block font-bold">
                                Alisha Pradhan
                              </span>
                              <span className="block">⭐⭐⭐⭐⭐</span>
                            </div>
                          </div>
                        </div>
                        {/* Second Testimonial Slide */}
                        <div className="swiper-slide">
                          <div className="text-white">
                            Loved the venue... One of the best venues for
                            wedding booking or just wanna hang out with your
                            best friends or Bachelorette parteee... Poolside and
                            the garden view with a lot of places to walk around
                            makes the place the best... It is definitely
                            hygienic, decent Indian food as they do have a
                            personal cook... There are gardeners too who have
                            been keeping the huge lawn perfect... Must visit.
                          </div>
                          <div className="flex items-center">
                            <img
                              src="https://jadehospitainment.com/wp-content/uploads/2023/03/image-4.png"
                              alt="Alisha Pradhan"
                              className="w-10 h-10 rounded-full mr-2"
                            />
                            <div>
                              <span className="block font-bold">
                                Alisha Pradhan
                              </span>
                              <span className="block">⭐⭐⭐⭐⭐</span>
                            </div>
                          </div>
                        </div>
                        {/* Add more testimonial slides as needed */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black p-8 rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/hJxMrjX6Mgg?controls=0&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fjadehospitainment.com&amp;widgetid=1"
                  title="NYE 2023 by Jade"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
