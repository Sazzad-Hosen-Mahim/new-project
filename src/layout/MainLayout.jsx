import { Outlet } from "react-router-dom";
import Header from "./Navbar";

export default function MainLayout() {
  return (
    <div className="relative">
      <Header className="" />
      <div className="min-h-screen flex max-h-full flex-nowrap justify-start transition-[padding] duration-200 p-0 ">
        <div className="">
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
      <div className="w-full relative"></div>
    </div>
  );
}
