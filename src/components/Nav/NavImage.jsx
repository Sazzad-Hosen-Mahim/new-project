import { IoLogoAndroid } from "react-icons/io";

const NavImage = () => {
  return (
    <div className="flex sm:flex-col md:flex-row">
      <div className="flex-shrink-0">
        <img
          src="https://www.sleepingpillsuk.com/images/banner2.jpg"
          alt="banner-image"
        />
      </div>
      <div className="bg-[#057793] w-[220px] px-2 text-center ms-1">
        <div className="py-2 flex justify-center">
          <img src="https://www.sleepingpillsuk.com/images/free_pills_icon.png" />
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
