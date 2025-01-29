/* eslint-disable react/prop-types */
import { FaAngleRight } from "react-icons/fa";

const ProductImageCard = ({ item }) => {
  const { title, image } = item;

  return (
    <div className="flex flex-col group items-center w-full">
      {/* Image Container */}
      <div className="relative w-full flex justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[150px] sm:h-[172px] object-cover transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
        />
      </div>

      {/* Button */}
      <button className="w-full bg-[#097AA1] text-white p-3 text-center transition-colors duration-300 group-hover:bg-[#2F458F] hover:bg-[#002039]">
        <div className="flex items-center justify-center">
          <span className="text-sm md:text-base font-semibold">
            See All {title}
          </span>
          <FaAngleRight className="ml-1" />
        </div>
      </button>
    </div>
  );
};

export default ProductImageCard;
