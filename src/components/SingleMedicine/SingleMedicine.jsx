import { Link } from "react-router-dom";
import MedicineTabs from "../ui/MedicineTabs";
import Review from "../Review/Review";
import RelatedProductCard from "../RelatedProductCard/RelatedProductCard";
import { relatedProducts } from "../../lib/Data/ProductCardItem";
import { FaStar } from "react-icons/fa";
import SingleMedicineDesc from "./SingleMedicineDesc";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";

const SingleMedicine = () => {
  return (
    <div className="px-4 md:px-8 lg:px-0">
      <Breadcrumb />

      <div>
        <div>
          <h1 className="text-xl md:text-2xl mt-2">
            Zopiclone 7.5 mg & Zopiclone 10 mg
          </h1>
          <Link className="flex flex-wrap gap-3 md:gap-5 items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className="fill-yellow-400 text-lg md:text-xl"
                />
              ))}
            </div>
            <h1 className="text-sm md:text-base">( 12 customer reviews )</h1>
          </Link>
          <p className="mt-2 text-sm md:text-base">
            Zopiclone, sold under brand names such as Imovane and Datolan, is a
            sleep-inducing medication for the treatment of insomnia. Treatment
            with zopiclone provides relief for people suffering from insomnia by
            allowing them to get to sleep quickly and stay asleep throughout the
            night.
          </p>
        </div>
      </div>
      {/* Responsive flex image section start  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10 md:mt-20">
        {/* image  */}
        <div className="w-full flex justify-center">
          <div className="relative p-3 md:p-5 border border-gray-300 w-full max-w-[500px] md:h-[420px]">
            <img
              src="https://www.sleepingpillsuk.com/product-img/zopiclone.png"
              alt="Zopiclone"
              className="w-full h-auto"
            />
            <div className="lg:absolute right-5 md:right-20 bottom-5 md:bottom-3 w-[80%] md:w-[350px] md:h-[80px] bg-white border border-dashed border-black flex flex-wrap md:flex-nowrap items-center gap-5 px-5 mx-auto py-5 md:px-5 md:py-9 rounded-lg">
              <div className="uppercase text-sm md:text-base font-semibold">
                Get <span className="italic">10% off</span> on <br /> every
                order!
              </div>
              <div>
                <p className="uppercase text-center text-xs md:text-sm font-semibold">
                  Apply code
                </p>
                <div className="uppercase bg-[#002039] text-white px-5 py-2 text-xs md:text-md font-bold rounded-lg">
                  sleep 2025
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tab  */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[500px] h-auto md:h-[300px]">
            <MedicineTabs />
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      {/* Description  */}
      <div>
        <button className="p-2 md:p-3 bg-[#002039] text-white mt-5 rounded-t-md">
          Description
        </button>
        <SingleMedicineDesc />
      </div>
      {/* Review */}
      <button className="p-2 md:p-3 bg-[#002039] text-white mt-5 rounded-t-md">
        Reviews
      </button>
      <Review />
      {/* Related Products */}
      <h1 className="text-lg md:text-xl font-bold">Related Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedProducts.map((product, index) => (
          <RelatedProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SingleMedicine;
