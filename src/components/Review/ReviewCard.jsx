/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { name, date, rating = 5, customerReview, image } = review;

  return (
    <div className="flex gap-3 mb-5 items-start">
      {/* Avatar */}
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-[60px] h-[60px] rounded-full object-cover"
        />
      ) : (
        <div
          className="w-[50px] h-[50px] rounded-full
         bg-gray-300 flex items-center justify-center text-black text-xl font-bold"
        >
          {name.charAt(0).toUpperCase()}
        </div>
      )}

      {/* Review Content */}
      <div className="border py-4 px-5 rounded-lg shadow-sm w-full">
        {/* Header */}
        <div className="flex gap-2 items-center mb-2">
          {/* Rating Stars */}
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                className={index < rating ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          {/* Name and Date */}
          <div className="font-semibold ml-2">{name}</div>
          <div>-</div>
          <div className="text-sm text-gray-500">{date}</div>
        </div>

        {/* Review Text */}
        <div className="text-gray-700">{customerReview}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
