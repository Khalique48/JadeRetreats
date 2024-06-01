"use client";


import { DirectionAwareHover } from "./ui/direction-aware-hover";

 function DirectionImage() {
  const imageUrl = "/image.jpg"
 

  return (
    <div id="direction" className="flex flex-col w-screen overflow-hidden justify-center items-center space-y-8 md:space-y-32 px-2">
      <div className="relative w-full overflow-hidden flex md:flex-row flex-col-reverse items-center justify-between mt-20 md:px-20">
        <DirectionAwareHover imageUrl={imageUrl}>
          {/* <p className="font-bold text-xl">In the mountains</p> */}
          <p className="font-normal text-sm"></p>
        </DirectionAwareHover>

        <div className="md:max-w-4xl relative space-y-4 mx-auto md:px-20  w-full mt-0 px-3">
          <h1 className="text-sm md:text-[35px] font-bold dark:text-white">
            STEP INTO THE WORLD OF 
          </h1>
          <h1 className="text-2xl leading-relaxed md:text-[35px] lowercase first-letter:uppercase font-bold dark:text-white">
          JADE HOSPITAINMENT
          </h1>
          <hr className="w-32 h-1 my-8 border-0 rounded dark:bg-gray-700"></hr>
          <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
            Welcome to Jade Hospitainment, where hospitality meets entertainment
            in unique and unforgettable ways. With over two decades of
            experience, Jade is a pioneer in curatin and managing holiday villa
            retreat , specializing in private and exclusive vacation homes
            tailored to your desires. Banglore and goa , need to mention 15 plus
            villa Read more Button specializing in private and exclusive
            vacation homes tailored to your desires.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-2 text-white md:border-0 border-b-[1px] border-gray-700 py-10">
        <h2 className="text-3xl font-bold mb-4">Top retreats</h2>
        <p className="text-lg text-center px-0">
          Where the essence of living is distilled into the sublime, and the
          world fades into a tranquil lullaby.
        </p>
      </div>
    </div>
  );
}
export default DirectionImage