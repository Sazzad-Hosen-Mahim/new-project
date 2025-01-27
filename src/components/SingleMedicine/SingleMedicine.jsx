import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const SingleMedicine = () => {
  return (
    <div className="">
      {/* breadcrumb  */}
      <div className=" bg-gray-100 py-3 px-5 ps-10 flex-none">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">
                Sleeping Tablets
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Zopiclone 7.5 mg</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <hr className="border-2 border-black mt-3" />
      <div>
        <div>
          <h1 className="text-2xl mt-2">Zopiclone 7.5 mg & Zopiclone 10 mg</h1>
          <Link className="flex gap-5 items-center mt-2">
            <div className="flex items-center">
              <FaStar className="fill-yellow-400 text-xl" />
              <FaStar className="fill-yellow-400 text-xl" />
              <FaStar className="fill-yellow-400 text-xl" />
              <FaStar className="fill-yellow-400 text-xl" />
              <FaStar className="fill-yellow-400 text-xl" />
            </div>
            <h1>( 12 customer reviews )</h1>
          </Link>
          <p className="mt-2">
            Zopiclone, sold under brand names such as Imovane and Datolan, is a
            sleep inducing medication for the treatment of insomnia. Treatment
            with zopiclone provides relief for people suffering from insomnia by
            allowing them to get to sleep quickly and stay asleep throughout the
            night.
          </p>
        </div>
      </div>
      {/* flex image section start  */}
      <div className="grid grid-cols-2 gap-3 mt-20">
        {/* image  */}
        <div className="w-full">
          <div className="relative p-5 border-1 border-gray-300 lg:w-[500px] lg:h-[400px]">
            <img
              src="https://www.sleepingpillsuk.com/product-img/zopiclone.png"
              alt=""
            />
            <div className="absolute right-20 bottom-10 lg:w-[350px] lg:h-[69px] bg-white border-1 border-dashed border-black flex items-center gap-10 px-5 py-9 rounded-lg">
              <div className="uppercase mb-1 font-semibold ">
                Get <span className="italic">10% off </span> on <br /> every
                order!
              </div>
              <div>
                <p className="uppercase text-center font-semibold">
                  Apply code
                </p>
                <div className="uppercase bg-[#002039] text-white px-7 py-[5px] mb-1 border-1 border-dashed border-white text-md font-bold rounded-lg">
                  sleep 2025
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tab  */}
        <div className="lg:w-[500px] lg:h-[300px] bg-violet-500"></div>
      </div>
    </div>
  );
};

export default SingleMedicine;
