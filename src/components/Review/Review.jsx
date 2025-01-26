import { customers } from "../../lib/Data/ProductCardItem";
import ReviewCard from "./ReviewCard";
import "./Shadow.css";

const Review = () => {
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
      </div>
    </div>
  );
};

export default Review;
