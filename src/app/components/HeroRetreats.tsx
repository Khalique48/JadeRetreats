// components/HeroParallaxDemo.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export function HeroReatreats() {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <>
        <div className="relative">
          <img
            src="https://jadehospitainment.com/wp-content/uploads/slider/cache/3f96a285dd0fc0d2af35bc61fa38fdef/21-4.jpg"
            alt=""
            className="w-full"
          />
          <div className="absolute inset-0 mr-2 bg-backgroundColor bg-opacity-50 flex justify-center items-center transition duration-300 opacity-100">
            <div className="w-full bg-customColor max-w-md mx-auto p-4 bg-backgroundColor text-white rounded-lg shadow-lg border-2 border-borderColor flex flex-col items-center transition duration-300 ease-in-out mt-20 mr-4 mb-20 ">
              <div className="container  mx-auto flex flex-col items-left">
                <div className="flex items-center mb-2 mr-4">
                  <Image
                    src="/logo.png"
                    alt="Jade 735"
                    width={110}
                    height={110}
                    className="justify-left mr-2"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      <span>Jade 735</span>
                    </h3>
                    <div className="flex items-center text-sm">
                      <Image
                        src="/Symbol.png"
                        alt="Symbol"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Devanahalli
                    </div>
                  </div>
                </div>

                <div className="bg-borderBackground p-2 text-center mb-2 border-2 rounded border-textBackground">
                  <h2 className="text-lg mb-0 px-0">Best Suited For</h2>
                  <p className="text-sm">
                    Personal Celebrations | Wedding Celebrations | Staycations |
                    Corporate Retreats
                  </p>
                </div>

                <div className="text-left pt-0 mb-2">
                  <h2 className="text-sm mb-2">Customize Your Experience</h2>
                  <div className="flex items-left text-xs items-left justify-left">
                    <span>20 People Stay</span>
                    <Image
                      src="/Ellipse.png"
                      alt="Ellipse"
                      width={10}
                      height={10}
                      className="mx-1"
                    />
                    <span>20 People Event</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
                  <div className="text-center text-sm bg-textColor py-2">
                    <h6 className="text-center text-xs">
                      {" "}
                      Hall for Gatherings{" "}
                    </h6>
                  </div>
                  <div className="text-center text-xs bg-textColor py-2">
                    Large Elegant Lawn
                  </div>
                  <div className="text-center text-xs bg-textColor py-2">
                    Venue for Events
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="https://jadehospitainment.com/retreat/jade-735-new/"
                    className="block bg-borderColor text-black py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300"
                  >
                    View retreat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://jadehospitainment.com/wp-content/uploads/slider/cache/21bc91a2a993b0176714b75d0a6c3698/1-6.jpg"
            alt=""
            className="w-full"
          />
          <div className="absolute inset-0 mr-2 bg-backgroundColor bg-opacity-50 flex justify-center items-center transition duration-300 opacity-100">
            <div className="w-full bg-customColor max-w-md mx-auto p-4 bg-backgroundColor text-white rounded-lg shadow-lg border-2 border-borderColor flex flex-col items-center transition duration-300 ease-in-out mt-20 mr-4 mb-20 ">
              <div className="container  mx-auto flex flex-col items-left">
                <div className="flex items-center mb-2 mr-4">
                  <Image
                    src="/logo.png"
                    alt="Jade 735"
                    width={110}
                    height={110}
                    className="justify-left mr-2"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      <span>Jade 735</span>
                    </h3>
                    <div className="flex items-center text-sm">
                      <Image
                        src="/Symbol.png"
                        alt="Symbol"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Devanahalli
                    </div>
                  </div>
                </div>

                <div className="bg-borderBackground p-2 text-center mb-2 border-2 rounded border-textBackground">
                  <h2 className="text-lg mb-0 px-0">Best Suited For</h2>
                  <p className="text-sm">
                    Personal Celebrations | Wedding Celebrations | Staycations |
                    Corporate Retreats
                  </p>
                </div>

                <div className="text-left pt-0 mb-2">
                  <h2 className="text-sm mb-2">Customize Your Experience</h2>
                  <div className="flex items-left text-xs items-left justify-left">
                    <span>20 People Stay</span>
                    <Image
                      src="/Ellipse.png"
                      alt="Ellipse"
                      width={10}
                      height={10}
                      className="mx-1"
                    />
                    <span>20 People Event</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
                  <div className="text-center text-sm bg-textColor py-2">
                    <h6 className="text-center text-xs">
                      {" "}
                      Hall for Gatherings{" "}
                    </h6>
                  </div>
                  <div className="text-center text-xs bg-textColor py-2">
                    Large Elegant Lawn
                  </div>
                  <div className="text-center text-xs bg-textColor py-2">
                    Venue for Events
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="https://jadehospitainment.com/retreat/jade-735-new/"
                    className="block bg-borderColor text-black py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300"
                  >
                    View retreat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://jadehospitainment.com/wp-content/uploads/slider/cache/231e8c8bd618ca5c0ad0882144dc91df/13-2.jpg"
            alt=""
            className="w-full "
          />
          <section className="bg-none absolute inset-0">
            <div className="container mx-4 px-4 ">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-full">
                  <div className="mb-8">
                    <img
                      src="https://jadehospitainment.com/wp-content/uploads/2023/03/Jade-735-logo-gold.png"
                      alt="Jade 735 Logo"
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="hidden lg:inline">
                    <h2 className="text-white text-center text-4xl font-semibold mb-6">
                      jade 735
                    </h2>
                    <ul className="text-white ">
                      <li className="mb-2">
                        <i className="fas fa-map-pin mr-2"></i>
                        Devanahalli
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-rupee-sign mr-2"></i>₹ 40,000 (10
                        pax)
                      </li>

                      <li className="mb-2 inline text-center mx-4 justify-center">
                        PRIVATE POOL VILLA
                      </li>
                      <li className="mb-2 inline text-center mx-4 justify-center">
                        PRIVATE PARTIES
                      </li>
                      <li className="mb-2 inline text-center mx-4 justify-center">
                        BIRTHDAY PARTY
                      </li>
                      <li className="mb-2 inline text-center mx-4 justify-center">
                        BOUTIQUE WEDDING
                      </li>
                      <li className="mb-2 inline text-center mx-4 justify-center">
                        CORPORATE TEAM OUTING
                      </li>
                      <li className="mb-2 inline text-center mx-4 justify-center">
                        WEEKEND GETAWAY
                      </li>
                      <li className="mb-2 inline text-center mx-4 justify-center">
                        FAMILY VACATION
                      </li>
                      <li className="mb-2 inline text-center mx-4 justify-evenly">
                        BACHELOR PARTY
                      </li>
                      <li className="mb-2 inline text-center mx-4 justify-center">
                        PET FRIENDLY
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 flex items-center justify-center lg:hidden">
                  <h2 className="text-white text-2xl font-semibold">
                    jade 735
                  </h2>
                </div>
                <div className="w-full lg:w-1/3">
                  <div className="flex justify-center lg:justify-end">
                    <a
                      href="http://jadehospitainment.com/retreat/jade-735/"
                      className="bg-white text-gray-900 px-6 py-3 text-sm font-semibold rounded-full inline-block mt-6 lg:mt-0"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="relative">
          <img
            src="https://jadehospitainment.com/wp-content/uploads/slider/cache/231e8c8bd618ca5c0ad0882144dc91df/13-2.jpg"
            alt=""
            className="w-full "
          />
          <div className="absolute inset-0 mr-2 bg-backgroundColor bg-opacity-50 flex justify-center items-center transition duration-300 opacity-100">
            <div className="w-full bg-customColor max-w-md mx-auto p-4 bg-backgroundColor text-white rounded-lg shadow-lg border-2 border-borderColor flex flex-col items-center transition duration-300 ease-in-out mt-20 mr-4 mb-20 ">
              <div className="container  mx-auto flex flex-col items-left">
                <div className="flex items-center mb-2 mr-4">
                  <Image
                    src="/logo.png"
                    alt="Jade 735"
                    width={110}
                    height={110}
                    className="justify-left mr-2"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      <span>Jade 735</span>
                    </h3>
                    <div className="flex items-center text-sm">
                      <Image
                        src="/Symbol.png"
                        alt="Symbol"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Devanahalli
                    </div>
                  </div>
                </div>

                <div className="bg-borderBackground p-2 text-center mb-2 border-2 rounded border-textBackground">
                  <h2 className="text-lg mb-0 px-0">Best Suited For</h2>
                  <p className="text-sm">
                    Personal Celebrations | Wedding Celebrations | Staycations |
                    Corporate Retreats
                  </p>
                </div>

                <div className="text-left pt-0 mb-2">
                  <h2 className="text-sm mb-2">Customize Your Experience</h2>
                  <div className="flex items-left text-xs items-left justify-left">
                    <span>20 People Stay</span>
                    <Image
                      src="/Ellipse.png"
                      alt="Ellipse"
                      width={10}
                      height={10}
                      className="mx-1"
                    />
                    <span>20 People Event</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
                  <div className="text-center text-sm bg-textColor py-2">
                    <h6 className="text-center text-xs">
                      {" "}
                      Hall for Gatherings{" "}
                    </h6>
                  </div>
                  <div className="text-center text-xs bg-textColor py-2">
                    Large Elegant Lawn
                  </div>
                  <div className="text-center text-xs bg-textColor py-2">
                    Venue for Events
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="https://jadehospitainment.com/retreat/jade-735-new/"
                    className="block bg-borderColor text-black py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300"
                  >
                    View retreat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat this structure for other images */}
        <div className="relative">
          <img
            src="https://jadehospitainment.com/wp-content/uploads/slider/cache/231e8c8bd618ca5c0ad0882144dc91df/13-2.jpg"
            alt=""
            className="w-full "
          />
          <div className="absolute inset-0 mr-2 bg-backgroundColor bg-opacity-50 flex justify-center items-center transition duration-300 opacity-100">
            <div className="w-full bg-customColor max-w-md mx-auto p-4 bg-backgroundColor text-white rounded-lg shadow-lg border-2 border-borderColor flex flex-col items-center transition duration-300 ease-in-out mt-20 mr-4 mb-20 ">
              <div className="container  mx-auto flex flex-col items-left">
                <div className="flex items-center mb-2 mr-4">
                  <Image
                    src="/logo.png"
                    alt="Jade 735"
                    width={110}
                    height={110}
                    className="justify-left mr-2"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      <span>Jade 735</span>
                    </h3>
                    <div className="flex items-center text-sm">
                      <Image
                        src="/Symbol.png"
                        alt="Symbol"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Devanahalli
                    </div>
                  </div>
                </div>

                <div className="bg-borderBackground p-2 text-center mb-2 border-2 rounded border-textBackground">
                  <h2 className="text-lg mb-0 px-0">Best Suited For</h2>
                  <p className="text-sm">
                    Personal Celebrations | Wedding Celebrations | Staycations |
                    Corporate Retreats
                  </p>
                </div>

                <div className="text-left pt-0 mb-2">
                  <h2 className="text-sm mb-2">Customize Your Experience</h2>
                  <div className="flex items-left text-xs items-left justify-left">
                    <span>20 People Stay</span>
                    <Image
                      src="/Ellipse.png"
                      alt="Ellipse"
                      width={10}
                      height={10}
                      className="mx-1"
                    />
                    <span>20 People Event</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
                  <div className="text-center text-sm bg-textColor py-2">
                    <h6 className="text-center text-xs">
                      {" "}
                      Hall for Gatherings{" "}
                    </h6>
                  </div>
                  <div className="text-center text-xs bg-textColor py-2">
                    Large Elegant Lawn
                  </div>
                  <div className="text-center text-xs bg-textColor py-2">
                    Venue for Events
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="https://jadehospitainment.com/retreat/jade-735-new/"
                    className="block bg-borderColor text-black py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300"
                  >
                    View retreat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://jadehospitainment.com/wp-content/uploads/slider/cache/231e8c8bd618ca5c0ad0882144dc91df/13-2.jpg"
            alt=""
            className="w-full"
          />
          <div className="absolute inset-0 mr-2 bg-backgroundColor bg-opacity-50 flex justify-center items-center transition duration-300 opacity-100">
            <div className="w-full bg-customColor max-w-md mx-auto p-4 bg-backgroundColor text-white rounded-lg shadow-lg border-2 border-borderColor flex flex-col items-center transition duration-300 ease-in-out mt-20 mr-4 mb-20 ">
              <div className="container  mx-auto flex flex-col items-left">
                <div className="flex items-center mb-2 mr-4">
                  <Image
                    src="/logo.png"
                    alt="Jade 735"
                    width={110}
                    height={110}
                    className="justify-left mr-2"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      <span>Jade 735</span>
                    </h3>
                    <div className="flex items-center text-sm">
                      <Image
                        src="/Symbol.png"
                        alt="Symbol"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Devanahalli
                    </div>
                  </div>
                </div>

                <div className="bg-borderBackground p-2 text-center mb-2 border-2 rounded border-textBackground">
                  <h2 className="text-lg mb-0 px-0">Best Suited For</h2>
                  <p className="text-sm">
                    Personal Celebrations | Wedding Celebrations | Staycations |
                    Corporate Retreats
                  </p>
                </div>

                <div className="text-left pt-0 mb-2">
                  <h2 className="text-sm mb-2">Customize Your Experience</h2>
                  <div className="flex items-left text-xs items-left justify-left">
                    <span>20 People Stay</span>
                    <Image
                      src="/Ellipse.png"
                      alt="Ellipse"
                      width={10}
                      height={10}
                      className="mx-1"
                    />
                    <span>20 People Event</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
                  <div className="text-center text-sm bg-textColor py-2">
                    <h6 className="text-center text-xs">
                      {" "}
                      Hall for Gatherings{" "}
                    </h6>
                  </div>
                  <div className="text-center text-xs bg-textColor py-2">
                    Large Elegant Lawn
                  </div>
                  <div className="text-center text-xs bg-textColor py-2">
                    Venue for Events
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="https://jadehospitainment.com/retreat/jade-735-new/"
                    className="block bg-borderColor text-black py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300"
                  >
                    View retreat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
