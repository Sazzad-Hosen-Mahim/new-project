import { AiFillLike } from "react-icons/ai";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaCreditCard } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";

const items = [
  {
    title: "100% Satisfaction",
    icons: <AiFillLike />,
    desc: "Feedback",
  },
  {
    title: "24/7 Support",
    icons: <HiChatBubbleLeftRight />,
    desc: "Customer Care",
  },
  {
    title: "Payment",
    icons: <FaCreditCard />,
    desc: "Secure System",
  },
  {
    title: "Quality Assurance",
    icons: <FaAward />,
    desc: "100% Secure",
  },
  {
    title: " Fast Delivery",
    icons: <FaTruck />,
    desc: "Assurance",
  },
];

const NavStaticItem = () => {
  return (
    <div className="flex w-full gap-[3px] mt-1 text-center mx-auto">
      {items.map((item, i) => (
        <div key={i} className="flex-1">
          <div className="bg-[#057793] px-[12px] py-2">
            <div className="flex items-center gap-4 text-white">
              <div className="text-4xl">{item.icons}</div>
              <div className="flex flex-col text-center">
                <h1 className="font-bold text-md">{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavStaticItem;
