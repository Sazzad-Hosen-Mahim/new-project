/* eslint-disable react/prop-types */
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";

const ProductImageCard = ({ item }) => {
  const { title, image } = item;
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div className="flex flex-col items-center w-full group">
      {/* Image Container */}
      <div
        className="relative w-full flex justify-center overflow-hidden"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[150px] sm:h-[172px] object-cover transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
        />
      </div>

      {/* Button */}
      <button
        className="w-full text-white p-3 text-center transition-colors duration-300"
        style={{
          backgroundColor: isButtonHovered
            ? "#002039" // Button hover color
            : isImageHovered
            ? "#2F458F" // Image hover color
            : "#097AA1", // Default color
        }}
        onMouseEnter={(e) => {
          e.stopPropagation(); // Prevents hover from propagating to the parent
          setIsButtonHovered(true);
        }}
        onMouseLeave={() => setIsButtonHovered(false)}
      >
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
