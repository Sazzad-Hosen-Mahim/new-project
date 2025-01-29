import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import MedicineTabs from "../ui/MedicineTabs";
import Review from "../Review/Review";
import RelatedProductCard from "../RelatedProductCard/RelatedProductCard";
import { relatedProducts } from "../../lib/Data/ProductCardItem";
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
        <div className="lg:w-[500px] lg:h-[300px] ">
          <MedicineTabs />
        </div>
      </div>
      <hr className="mt-6" />
      {/* Description  */}
      <div>
        <button className="p-3 bg-[#002039] text-white mt-5 rounded-t-md">
          Description
        </button>
        <div className="bg-[#F9F9F9] border-1 py-3 px-5 my-2">
          {/* each description part start */}
          <div className="mb-5">
            <h1 className="text-[#002039] text-xl font-bold mb-2">
              What is Zopiclone?
            </h1>
            <p>
              Zopiclone tablets are often referred to as a z-medication and are
              the most popular medication used globally for the treatment of
              insomnia. While zopiclone is both the active ingredient and the
              name of the medication when sold in generic form, this medicine
              also goes under the trade names of Imovane, Zimovane and Datolan.
              Zopiclone is a very powerful sedative hypnotic medication that
              works by quickly promoting sleep in people who are struggling to
              sleep at night. This medication is usually used as a short-term
              treatment for insomnia and other disorders that affect sleep.
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-[#002039] text-xl font-bold mb-2">
              How Zopiclone Tablets Work
            </h1>
            <p>
              Zopiclone, although considered a non-benzodiazepine medication,
              has a very similar mechanism of action as that of benzodiazepines
              (which all work very similarly). To promote sleep, patients who
              buy zopiclone medication online should take it around 30 minutes
              before bedtime. The medication is than assimilated by the body and
              attaches itself to gamma aminobutyric acid (GABA) neuro
              transmitters in the brain. The role of GABA is to regulate neural
              activity and ensure that the central nervous system remains in a
              state of relative harmony. This medication allows GABA to perform
              its function more swiftly to promote feelings of calmness and
              sedation in the brain in order to enable uninterrupted sleep for
              the duration of the night.
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-[#002039] text-xl font-bold mb-2">
              When is it Right to use Zopiclone?
            </h1>
            <p>
              Before any type of sleeping medication is considered to treat
              insomnia, all natural means to treat sleeping problems should be
              attempted first. It is wise to avoid caffeine, alcohol and large
              meals close to bedtime as this often results in problems falling
              asleep or disrupted sleep during the night. Avoid sleeping during
              the day and try to go to sleep around the same time every night as
              this will help to establish a regular sleep routine. When all
              natural attempts fail to effectively treat sleeping problems,
              zopiclone tablets can be a fast, effective way to achieve a good
              night&apos;s sleep, however, they should only be used if you are
              18 years or older and experience difficulty falling asleep at
              night or if your sleep is constantly disrupted throughout the
              night.
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-[#002039] text-xl font-bold mb-2">
              Correct Dosage and Usage Instructions for Zopiclone 7.5 mg
            </h1>
            <p>
              Zopiclone 7.5 mg is the most commonly used dosage, however, there
              is a 3.75 mg option for those who require a lower dose. The lower
              dose is usually recommended for those over 65 years of age or
              those suffering from kidney and liver problems. Zopiclone should
              be ingested whole, and it can be taken with or without food but
              should not be crushed or chewed. The tablet must be taken around
              30 to 60 minutes before bedtime, preferably at least 7 to 8 hours
              before you are expected to wake up. This is to avoid feeling
              drowsy, dizzy and tired when you wake up the following morning. If
              you forget to take the tablet, ensure that you do not take a
              double dose to make up for the missed tablet. Instead, take the
              next tablet as normal without trying to make up for the previously
              missed dosage. It is recommended that this medication is only used
              for a short period of time without a break - usually for between 2
              to 4 weeks. This is to prevent dependency and to avoid tolerance
              developing, where the medication becomes less effective for the
              patient.
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-[#002039] text-xl font-bold mb-2">
              Precautions and Warnings
            </h1>
            <p>
              There are some precautions to be considered before you decide to
              buy zopiclone 7.5 mg tablets online. Do not take this medication
              if you have an allergy or hypersensitivity to zopiclone. Avoid
              alcohol while the medication is still active in the system, as
              this can cause excessive drowsiness and can be dangerous. It is
              not advisable to take this medication if you have a history of
              substance abuse or have a personality disorder. Seek medical
              advice before use if you suffer from liver or kidney problems,
              breathing problems or if you are pregnant, trying to get pregnant
              or breastfeeding.
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-[#002039] text-xl font-bold mb-2">
              What Side Effects are Associated with Zopiclone Use?
            </h1>
            <p>
              There are some side effects associated with zopiclone 7.5 mg
              tablets but if correct dosage instructions are followed, they are
              not severe and are easily tolerated. Common side-effects include
              drowsiness the following day after use, dry and bitter taste in
              the mouth, dizziness, loss of appetite, constipation, upset
              stomach and headache. These side effects will subside as soon as
              the medication is no longer active in the body.
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-[#002039] text-xl font-bold mb-2">
              Buy Zopiclone Online for Fast, Effective Relief from Insomnia
            </h1>
            <p>
              You can buy zopiclone tablets online from our trusted online
              pharmacy. We are a long-standing supplier of insomnia medication
              and are able to supply our customers with quality Zopiclone
              medication at the lowest prices to be found on the internet. We
              only stock quality approved medication from reputable, licensed
              manufacturers. Simply choose the quantity of tablets that you wish
              to buy online and complete the simple but secure checkout process.
              Orders are normally dispatched the next working day and you can
              expect to receive your goods quickly; normally within 2 to 7
              working days across the globe. All orders are dispatched
              discreetly and delivered directly to your door. Buy zopiclone
              online today for fast, effective relief from the symptoms of
              insomnia from the number one online sleeping tablets supplier.
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-[#002039] text-xl font-bold mb-2">
              Other Important Facts Concerning Zopiclone
            </h1>
            <p>
              <ul className="list-disc pl-5 mt-5">
                <li className="mb-3">
                  <span className="font-bold">
                    Is it safe ton one zopiclone 7.5 mg tablet?{" "}
                  </span>
                  <br />
                  <span>
                    No. The recommended dosage is one 7.5 mg tablet per night.
                    Anything above this may cause adverse side-effects.
                  </span>
                </li>
                <li className="mb-3">
                  <span className="font-bold">
                    {" "}
                    Arets as effective as branded versions?
                  </span>
                  <br />
                  <span>
                    Generic medications are equally effective as they contain
                    exactly the same active ingredients.
                  </span>
                </li>
                <li className="mb-3">
                  <span className="font-bold">
                    How will I feel the next morning?
                  </span>{" "}
                  <br />
                  <span>
                    If you take the medication correctly, and allow yourself at
                    least seven hours to sleep, you will wake up feeling
                    energized, alert and refreshed.
                  </span>
                </li>
                <li className="mb-3">
                  <span className="font-bold">
                    Is it suitable for long-term use?{" "}
                  </span>
                  <br />
                  <span>
                    No. If it is taken every day for more than 4 weeks, you may
                    develop dependency and increased tolerance.
                  </span>
                </li>
                <li className="mb-3">
                  <span className="font-bold">
                    Should I avoid alcohol when taking this medication?{" "}
                  </span>
                  <br />
                  <span>
                    Yes, alcohol should never be consumed if this medication is
                    being taken as this could result in very deep sleep and
                    problems waking on time in the morning.
                  </span>
                </li>
                <li className="mb-3">
                  <span className="font-bold">
                    Will I stay asleep all night after taking this drug?
                  </span>{" "}
                  <br />
                  <span>
                    Yes. It helps to provide quality, uninterrupted sleep
                    throughout the night.
                  </span>
                </li>
              </ul>
            </p>
          </div>

          {/* each description part end  */}
        </div>
        {/* review start  */}
        <button className="p-2 bg-[#002039] text-white mt-5 rounded-t-md">
          Reviews
        </button>
        <Review />
        {/* review end  */}
        {/* Related product start  */}
        <h1 className="text-xl font-bold">Related Product</h1>
        <hr className="mb-2 mt-3" />
        <div className="grid lg:grid-cols-3 mb-10">
          {relatedProducts.map((product) => (
            <RelatedProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* Related product end  */}
      </div>
    </div>
  );
};

export default SingleMedicine;
