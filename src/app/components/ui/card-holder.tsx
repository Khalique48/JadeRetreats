import Image from "next/image";
import Link from "next/link";

interface CardHolderProps {
  logoUrl: string;
  bgUrl: string;
  brand: string;
  stay: number;
  event: number;
}

const CardHolder: React.FC<CardHolderProps> = ({
  bgUrl,
  brand,
  logoUrl,
  event,
  stay,
}) => {
  return (
    <>
      <div
        className="h-[90vh] md:h-screen bg-cover bg-fixed bg-no-repeat md:px-2 px-30"
        style={{
          backgroundImage: `url('${bgUrl}')`,
        }}
      >
        <div className="bg-gradient-to-t from-black to-transparent md:bg-backgroundColor bg-opacity-50 flex md:flex-row flex-col justify-end items-end md:items-center transition duration-300 opacity-100 px-0 md:px-4 h-full w-full">
          <div className="ease-in duration-100 md:bg-customColor md:w-[35%] w-full bg-backgroundColor text-white rounded-[5px] shadow-lg md:border-2 md:border-borderColor flex flex-col items-center transition pb-4 md:mt-20 md:mb-20 mt-[100vh]">
            <div className="container mx-auto flex flex-col items-left my-0">
              <div className="flex justify-start items-center space-x-2 md:flex-row flex-col">
                <Image
                  src={logoUrl}
                  alt={brand}
                  width={110}
                  height={110}
                  className=" mr-2"
                />
                <div className="hidden md:block">
                  <h3 className=" text-4xl text-borderColor">
                    <span>{brand}</span>
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

              <div className="bg-borderBackground hidden md:flex md:mx-5 justify-center items-start flex-col border-2 rounded border-textBackground gap-y-3 p-3">
                <h2 className="text-sm mb-0 px-0 tracking-widest">
                  BEST SUITED FOR
                </h2>
                <p className="text-xs leading-6  mb-[17.6px]">
                  Personal Celebrations | Wedding Celebrations | Staycations |
                  Corporate Retreats
                </p>
              </div>

              <div className="scroll-container flex overflow-x-auto md:hidden">
                <div className="scroll-content flex justify-center items-center space-y-1 space-x-4 border-t border-b">
                  <p className="text-sm font-bold">Personal Celebrations</p>
                  <p className="text-sm font-bold text-textHoverColor">|</p>
                  <p className="text-sm font-bold">Wedding Celebrations</p>
                  <p className="text-sm font-bold text-textHoverColor">|</p>
                  <p className="text-sm font-bold">Staycations</p>
                  <p className="text-sm font-bold text-textHoverColor">|</p>
                  <p className="text-sm font-bold">Corporate Retreats</p>
                  <p className="text-sm font-bold text-textHoverColor">|</p>
                  {/* Duplicate for seamless scroll */}
                  <p className="text-sm font-bold">Personal Celebrations</p>
                  <p className="text-sm font-bold text-textHoverColor">|</p>
                  <p className="text-sm font-bold">Wedding Celebrations</p>
                  <p className="text-sm font-bold text-textHoverColor">|</p>
                  <p className="text-sm font-bold">Staycations</p>
                  <p className="text-sm font-bold text-textHoverColor">|</p>
                  <p className="text-sm font-bold">Corporate Retreats</p>
                  <p className="text-sm font-bold text-textHoverColor">|</p>
                  <p className="text-sm font-bold">Personal Celebrations</p>
                  <p className="text-sm font-bold text-textHoverColor">|</p>
                  <p className="text-sm font-bold">Wedding Celebrations</p>
                  <p className="text-sm font-bold text-textHoverColor">|</p>
                  <p className="text-sm font-bold">Staycations</p>
                  <p className="text-sm font-bold text-textHoverColor">|</p>
                  <p className="text-sm font-bold">Corporate Retreats</p>
                  <p className="text-sm font-bold text-textHoverColor">|</p>
                </div>
              </div>

              <div className="text-left flex md:flex-col md:items-start px-5 justify-around items-center pt-0 my-4">
                <h2 className="md:block hidden text-sm mb-2">
                  Customize Your Experience
                </h2>
                <div className="flex items-left text-xs justify-start items-center gap-x-2">
                  <span>{stay} People Stay</span>
                  <Image
                    src="/Ellipse.png"
                    alt="Ellipse"
                    width={8}
                    height={8}
                    className="mx-1 bg-custom-gradient rounded-full"
                  />
                  <span>{event} People Event</span>
                </div>
                <div className="md:hidden">
                  <div className="flex items-center text-xs">
                    <Image
                      src="/Symbol.png"
                      alt="Symbol"
                      width={10}
                      height={10}
                      className="mr-2"
                    />
                    Devanahalli
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly lowercase items-center gap-x-3 my-4 px-2">
              <div className="text-center text-[0.5rem] bg-textColor py-2 px-4">
                Hall for Gatherings{" "}
              </div>
              <div className="text-center text-[0.5rem] bg-textColor py-2 px-4">
                Large Elegant Lawn
              </div>
              <div className="text-center text-[0.5rem] bg-textColor py-2 px-4">
                Venue for Events
              </div>
            </div>
            <div className="text-center w-full flex justify-center items-center md:px-5">
              <Link
                href="https://jadehospitainment.com/retreat/jade-735-new/"
                className="block md:w-full w-1/2 bg-custom-gradient text-black py-2 px-4 rounded-md  transition-colors duration-300 font-semibold"
              >
                VIEW RETREAT
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div
            className="md:hidden h-[75vh] bg-cover bg-fixed bg-no-repeat md:px-2 px-30 "
            style={{
                backgroundImage: `url('${bgUrl}')`,
            }}
        >


        </div> */}
    </>
  );
};

export default CardHolder;
