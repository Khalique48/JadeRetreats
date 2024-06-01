import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Dispatch, FC } from "react";

interface SwiperProps {
  visibleImages: number
  images_length: number,
  currentIndex: number,
  setCurrentIndex: Dispatch<React.SetStateAction<number>>
}
 
const Swiper: FC<SwiperProps> = ({visibleImages, images_length, currentIndex, setCurrentIndex}) => {
    const increaseProgress = () => {
      console.log(currentIndex);
      if (currentIndex < images_length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(3);
      }
    };

    const decreaseProgress = () => {
      console.log(currentIndex);
      if (currentIndex > 3) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(images_length - 1);
      }
    };
  
  return (
    <div className="flex md:items-center space-x-2 md:px-20 md:pb-10 justify-center items-center">
      <button
        className="p-2 text-yellow-500 bg-transparent rounded-full border border-yellow-500"
        onClick={decreaseProgress}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <div className="relative w-20 h-1 rounded-xl bg-gray-600">
        <div
          className="absolute h-full bg-yellow-600"
          style={{
            width: `${200 / visibleImages}%`,
            transform: `translateX(${((currentIndex - visibleImages + 1) * 5) /
              ((images_length - visibleImages) * 2)}rem)`,
            transition: "transform 0.5s ease-in-out, width 0.5s ease-in-out",
          }}
        ></div>
      </div>
      <button
        className="p-2 text-yellow-500 bg-transparent rounded-full border border-yellow-500"
        onClick={increaseProgress}
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
 
export default Swiper;