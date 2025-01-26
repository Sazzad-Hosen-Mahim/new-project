/* eslint-disable react/prop-types */
import { dropdownOptions } from "../../lib/Data/ProductCardItem";
import DropdownWithInput from "../ui/DropDownInput";
import RadioButton from "../ui/Radio";

const ProductCard = ({ item }) => {
  const { title, desc, image, viewBtn, buyBtnTitle, buyIcon: BuyIcon } = item;

  return (
    <div className="border rounded-sm p-4 flex flex-col h-full text-center">
      {/* Title */}
      <h1 className="text-xl font-bold mb-2">{title}</h1>

      {/* Image */}
      <div className="w-full h-48 mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Description */}
      <p className="text-black text-sm mb-4 line-clamp-3 text-justify">
        {desc}
      </p>

      {/* Radio Button */}
      <div className="my-2 mx-auto">
        <RadioButton />
      </div>

      {/* dropdown  */}
      <div className="my-2">
        <DropdownWithInput options={dropdownOptions} />
      </div>

      {/* Buttons */}
      <div className="flex mt-4 gap-2 items-center">
        <button className="flex-1 p-3 bg-[#08233B] text-white rounded-xl text-center">
          {viewBtn}
        </button>
        <button className="flex-1 flex items-center justify-center p-3 bg-[#08233B] text-white rounded-xl">
          <BuyIcon className="mr-2 text-3xl" />
          {buyBtnTitle}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
