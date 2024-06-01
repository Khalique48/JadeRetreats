"use client";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";

const SubHero: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 overflow-hidden">
        <div className="w-[60vh] md:flex md:flex-col justify-center px-4 md:w-[100vh] md:py-20">
          <div className="hidden md:block">
            <img
              className="inline-block"
              loading="lazy"
              decoding="async"
              width="72"
              height="65"
              src="https://jadehospitainment.com/wp-content/uploads/2024/03/jade-logo.png"
              alt=""
            />
            <h2 className="text-lg text-white mt-2 md:text-2xl tracking-wider text-start md:text-start md:py-3">
              Join Our Club For Exclusive Offers & Discounts
            </h2>
          </div>
          <div
            className="bg-textColor md:px-2 md:pe-2 flex flex-col items-start md:items-start px-2 w-full"
            style={{
              backgroundImage:
                'url("https://jadehospitainment.com/wp-content/uploads/2024/05/Untitled-design-1-1.png")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="px-4 md:px-0 w-full">
              <p className="my-4 md:text-white text-gray-500 text-lg text-start md:text-start md:w-full">
                At Jade Hospitainment, we value our customers and want to show
                our appreciation for your loyalty. By becoming a member, you’ll
                gain access to special promotions, limited-time offers, and
                exclusive discounts that are tailored just for you. Don’t miss
                out on the chance to enhance your shopping experience and save
                big on your favorite products.
              </p>
            </div>
            <div className="list-disc list-inside text-lg text-gray-500 md:text-white text-start md:text-left w-full">
              <span className="px-4 w-full inline-block">
                <FontAwesomeIcon icon={faCheck} style={{ color: "#BC9948" }} />
                Personalized Offers to our retreats
              </span>
              <br />
              <span className="px-4 w-full inline-block">
                <FontAwesomeIcon icon={faCheck} style={{ color: "#BC9948" }} />
                Early Access to new Launches
              </span>
              <br />
              <span className="px-4 w-full inline-block">
                <FontAwesomeIcon icon={faCheck} style={{ color: "#BC9948" }} />
                Members-Only Discounts
              </span>
              <br />
              <span className="px-4 w-full inline-block">
                <FontAwesomeIcon icon={faCheck} style={{ color: "#BC9948" }} />
                Monthly Newsletter
              </span>
              <br />
            </div>
            <form className="my-8 w-full flex flex-col items-center">
              <input
                className="w-full bg-textColor p-2 mb-4 rounded placeholder:text-start placeholder:text-white"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-full  bg-textColor p-2 mb-4 rounded bg-backgroundColor placeholder:text-start placeholder:text-white"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full p-2 mb-4 bg-textColor bg-backgroundColor rounded placeholder:text-start placeholder:text-white"
                type="tel"
                placeholder="Phone number"
              />
              <button className="md:w-full p-2 text-center bg-custom-gradient text-black hover:text-white font-semibold rounded-lg">
                JOIN THE CLUB
              </button>
            </form>
          </div>
        </div>
        <div className="hidden md:block overflow-hidden">
          <img
            loading="lazy"
            decoding="async"
            width="1080"
            height="1080"
            src="https://jadehospitainment.com/wp-content/uploads/2024/02/long-fly-space-four.webp"
            alt=""
            className="w-[100vh] pe-10 h-[100vh] mt-40"
          />
        </div>
      </div>
      {/* <div className="container mx-auto bg-textColor">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <section className="flex flex-col-reverse md:flex-row items-center md:justify-between">
              <div className="md:w-1/2 tracking-tighter">
                <div className="flex items-center mb-4 md:mb-0">
                  <img
                    src="https://jadehospitainment.com/wp-content/uploads/2024/03/jade-logo.png"
                    alt="Jade Logo"
                    className="w-16 h-auto mr-4 hidden md:block"
                  />
                  <h2 className="text-xl text-white font-semibold tracking-tighter">
                    Join Our Club For Exclusive Offers &amp; Discounts
                  </h2>
                </div>
              </div>
            </section>
            <div
              className="mt-8"
              style={{
                backgroundImage:
                  'url("https://jadehospitainment.com/wp-content/uploads/2024/05/Untitled-design-1-1.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <p className="mb-4 mt-4 text-white">
                At Jade Hospitality, we deeply value our customers and would
                like to give a token of appreciation for always choosing us and
                their loyalty. By becoming a member, you'll gain access to
                special promotions, limited-time offers, and exclusive discounts
                that are tailored just for you. Don't miss out on the chance to
                enhance your shopping experience and save big on your favorite
                products.
              </p>
              <ul className="list-disc list-inside mb-6 text-white">
                <li>Personalized Offers to our retreats</li>
                <li>Early Access to new Launches</li>
                <li>Members-Only Discounts</li>
                <li>Monthly Newsletter</li>
              </ul>
              <form className="w-full md:w-4/5 mx-auto">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 rounded-md py-2 px-4"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full border border-gray-300 rounded-md py-2 px-4"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full border border-gray-300 rounded-md py-2 px-4"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-4/5 md:w-3/5 mx-auto block transition-colors duration-300"
                >
                  Join the Club
                </button>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="animate-fadeInUp animation-delay-2000">
              <img
                src="https://jadehospitainment.com/wp-content/uploads/2024/02/long-fly-space-four.webp"
                alt="Jade Image"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex justify-between items-center bg-black mr-4 px-4 md:px-16 w-full">
        <div className="flex w-full flex-col md:flex-row md:items-center sm:items-start my-16 px-10 justify-between">
          <h1 className="text-3xl text-white md:text-5xl md:text-start mb-8 md:mb-0 font-display">
            Retreat Chronicles
          </h1>
          <div className="flex justify-center md:justify-end uppercase">
            <a
              href="https://jadehospitainment.com/retreat/jade-735-new/"
              className="bg-custom-gradient text-black font-bold py-2 px-4 right-4 rounded leading-6"
            >
              {"Discover Hidden Secrets".toUpperCase()}
            </a>
          </div>
        </div>
      </div>

      <Link href="#">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap"
          />
        </Head>
        <div className="flex justify-between items-center bg-black mr-4 px-4 md:px-16 w-full">
          <div className="flex w-full flex-col md:flex-row md:items-center my-4 px-10 justify-between">
            <p className="text-base text-white underline">
              Our properties cater to family or social gatherings, private
              parties, romantic getaways, and wellness retreats. With Jade,
              you’re not just booking a stay; you’re creating cherished
              memories.
            </p>
          </div>
        </div>
      </Link>

      <Link href="#">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap"
          />
        </Head>
        <div className="flex justify-between items-center bg-black mr-4 px-4 md:px-16 w-full">
          <div className="flex w-full flex-col md:flex-row md:items-center my-4 px-10 justify-between">
            <h1 className="text-3xl hover:text-pink-600 underline text-borderColor">
              6 SPOTS TO HOST PARTIES IN BANGALORE
            </h1>
          </div>
        </div>
      </Link>

      <Link href="#">
        <div className="flex justify-between items-center bg-black mr-4 px-4 md:px-16 w-full">
          <div className="flex w-full flex-col md:flex-row md:items-center my-0 px-10 justify-between">
            <p className="text-base text-white underline">
              From birthdays to jubilant gatherings, discover the key
              ingredients that transform ordinary moments into extraordinary
              celebrations. Learn insider tips, creative themes, and expert
              advice to.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SubHero;
