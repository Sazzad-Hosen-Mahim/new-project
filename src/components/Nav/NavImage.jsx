import { IoLogoAndroid } from "react-icons/io";

const NavImage = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row">
      {/* Image and Relative Part */}
      <div className="flex-shrink-0 lg:relative sm:p-5 md:p-0">
        <img
          src="https://www.sleepingpillsuk.com/images/banner2.jpg"
          alt="banner-image"
          className="w-full"
        />
        {/* Relative part */}
        <div className="lg:absolute right-4 bottom-6 lg:w-[350px] lg:h-[69px] bg-white border-1 border-dashed border-black flex items-center gap-10 px-5 lg:py-9 py-3 rounded-lg mt-4 lg:mt-0">
          <div className="uppercase mb-1 font-semibold ">
            Get <span className="italic">10% off </span> on <br /> every order!
          </div>
          <div>
            <p className="uppercase text-center font-semibold">Apply code</p>
            <div className="uppercase bg-[#002039] text-white px-7 py-[5px] mb-1 border-1 border-dashed border-white text-md font-bold rounded-lg">
              sleep 2025
            </div>
          </div>
        </div>
      </div>

      {/* Flex Part */}
      <div className="bg-[#057793] w-full lg:w-[220px] px-2 text-center mt-4 lg:mt-0 lg:ms-1">
        <div className="py-2 flex justify-center">
          <img
            src="https://www.sleepingpillsuk.com/images/free_pills_icon.png"
            alt="free pills"
          />
        </div>
        <div className="border-1 border-dashed px-2 py-1 text-center my-1">
          <h1 className="uppercase text-lg font-bold text-white">
            Get 30 free pills
          </h1>
        </div>
        <h1 className="text-white text-sm font-semibold my-1">
          With 1st Mobile App Order
        </h1>
        <div className="flex items-center justify-center bg-[#021C31] hover:bg-[#26CC00] border-1 border-white rounded-sm text-white py-1 my-1 w-full">
          <IoLogoAndroid className="text-3xl" />
          <h1 className="uppercase font-semibold ms-2">Read More</h1>
        </div>
        <p className="text-sm text-center italic text-white">
          For Android device only
        </p>
      </div>
    </div>
  );
};

export default NavImage;
