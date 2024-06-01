import ImageSlider from "./ui/ImageSlider";

const images1 = [
  { url: "/image1.png", text: "High Tea" },
  { url: "/image2.jpg", text: "Outdoor Activities" },
  { url: "/image3.jpg", text: "Picnic" },
  { url: "/image5.jpg", text: "Barbeque X Bonfire" },
  { url: "/image6.jpg", text: "Candlelit Dining" },
  { url: "/image7.jpg", text: "Floating BreakFast" },
  { url: "/image8.jpg", text: "Movie Under The Stars" },
  { url: "/image9.jpg", text: "Spa And Wellness" },

  // Add more image objects here
];
const images2 = [
  { url: "/wedding.jpg", text: "Wedding ANd Celebration" },
  { url: "/Friends.jpg", text: "Friends And Family" },
  { url: "/corporate.jpg", text: "Corporate Events" },
  { url: "/production.jpg", text: "Production And Lifestyle" },
  { url: "/Friends.jpg", text: "Friends And Family" },

  // Add more image objects here
];
const images3 = [
  { url: "/pet.jpg", text: "Pet Friendly" },
  { url: "/unique.jpg", text: "Unique Stays" },
  { url: "/instagram.jpg", text: "Instagrammabale Views" },
  { url: "/pool.jpg", text: "Pool Party" },
  { url: "/wedding_venue.jpg", text: "Wedding Venues" },
  { url: "/corporate1.jpg", text: "Corporate" },
  { url: "/couple.jpg", text: "Couple Friendly" },
  { url: "/hill.jpg", text: "Hill View" },
  { url: "/luxury.jpg", text: "Luxury" },
  // Add more image objects here
];

const images4 = [
  { url: "/1.jpg", text: "" },
  { url: "/2.jpg", text: "" },
  { url: "/3.jpg", text: "" },
  { url: "/4.jpg", text: "" },
  { url: "/5.jpg", text: "" },
  { url: "/6.jpg", text: " " },
  { url: "/7.jpg", text: " " },
  { url: "/8.jpg", text: " " },
  { url: "/9.jpg", text: " " },
  { url: "/10.jpg", text: " " },
  { url: "/11.jpg", text: " " },
  { url: "/12.jpg", text: " " },
  { url: "/13.jpg", text: " " },
  { url: "/14.jpg", text: " " },
  { url: "/15.jpg", text: " " },
  { url: "/16.jpg", text: " " },
  { url: "/17.jpg", text: " " },
  { url: "/18.jpg", text: " " },
  { url: "/19.jpg", text: " " },
  { url: "/20.jpg", text: " " },
  { url: "/21.jpg", text: " " },
  { url: "/22.jpg", text: " " },
  { url: "/23.jpg", text: " " },
  { url: "/24.jpg", text: " " },
  { url: "/25.jpg", text: " " },
  { url: "/26.jpg", text: " " },
  { url: "/27.jpg", text: " " },
  { url: "/28.jpg", text: " " },
  { url: "/29.jpg", text: " " },
  { url: "/30.jpg", text: " " },
  // Add more image objects here
];

const Slider: React.FC = () => {
   
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="text-5xl capitalize text-white font-gilda font-normal tracking-wide text-start mt-20 mb-20 ml-20">
          What You Can Expect
        </div>
        <ImageSlider images={images1} />
      </div>
      <div className="container mx-auto py-8">
        <div className="text-5xl capitalize text-white font-gilda font-normal tracking-wide text-left mt-20 ml-20 mb-20">
          Something for everyone
        </div>
        <ImageSlider images={images2} />
      </div>
      <div className="container mx-auto py-8">
        <div className="text-5xl capitalize text-white font-gilda font-normal tracking-wide text-left mt-20 mb-20 ml-20">
          What Are We Known For?
        </div>
        <ImageSlider images={images3} />
      </div>
      <div className="container mx-auto py-8">
        <div className="text-5xl capitalize text-white font-gilda font-normal tracking-wide text-left mt-20 mb-20 ml-20">
          Influencers And Celebs Hosted
        </div>
        <ImageSlider images={images4} />
      </div>
    </>
  );
};

export default Slider;
