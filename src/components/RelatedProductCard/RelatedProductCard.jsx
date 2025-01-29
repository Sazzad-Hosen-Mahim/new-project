/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaStarHalfAlt } from "react-icons/fa";

const RelatedProductCard = ({ product }) => {
  const { imageSrc, star: Star, title, desc, buyImage } = product;
  return (
    <div className="p-3 shadow-small m-3 flex flex-col gap-3">
      <img src={imageSrc} alt="title" className="w-[356px] h-[262px] mx-auto" />
      <h1 className="text-lg font-bold mx-auto ">{title}</h1>
      <div className="flex mx-auto">
        <Star className="fill-lime-400" />
        <Star className="fill-lime-400" />
        <Star className="fill-lime-400" />
        <FaStarHalfAlt className="fill-lime-400" />
      </div>
      <h1 className="text-xl text-[#0E5990] font-bold mx-auto">{desc}</h1>
      <img src={buyImage} alt="" className="w-[150px] h-[45px] mx-auto" />
    </div>
  );
};

export default RelatedProductCard;
