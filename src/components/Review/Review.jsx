import { useState } from "react";
import { customers } from "../../lib/Data/ProductCardItem";
import ReviewCard from "./ReviewCard";
import "./Shadow.css";
import { FaStar } from "react-icons/fa";
// import { Input } from "@nextui-org/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import NotARobot from "../ui/Iamnotarobot";
import { Button } from "@nextui-org/react";

const Review = () => {
  const [hoveredStar, setHoveredStar] = useState(0);
  return (
    <div className="p-5 mt-7 shadow-xl rounded-md bg-white border border-gray-200">
      <div className="mb-10">
        <h1 className="text-2xl font-bold my-3">Customer Review</h1>
        {customers.map((review) => (
          <div key={review.id} className="mb-5">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold">Add a review</h1>
        <p className="text-lg font-semibold mt-3">
          Your email address will not be published. Required fields are marked *
        </p>
        <h1 className="text-xl font-semibold mt-5">Your Rating:</h1>
        <div className="flex mt-5 gap-1">
          {Array.from({ length: 5 }).map((_, index) => {
            const starIndex = index + 1; // Stars are 1-based

            return (
              <FaStar
                key={starIndex}
                onMouseEnter={() => setHoveredStar(starIndex)} // Set hovered star
                onMouseLeave={() => setHoveredStar(0)} // Reset hover
                className={
                  starIndex <= hoveredStar
                    ? "text-yellow-400 cursor-pointer "
                    : "text-gray-400 cursor-pointer"
                }
                size={24} // Adjust the size of the stars
              />
            );
          })}
        </div>
        <div className="mt-14">
          <div className="mb-5">
            <Label htmlFor="text">Name *</Label>
            <Input className="mt-3" />
          </div>
          <div className="mb-5">
            <Label htmlFor="email">Email *</Label>
            <Input className="mt-3" />
          </div>
          <div className="mb-5">
            <Label htmlFor="text">Your Review *</Label>
            <Input className="mt-3 h-[100px]" />
          </div>
        </div>
        <NotARobot />
        <Button className="bg-[#002039] text-white text-base px-6 rounded-sm mb-10">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Review;
