import { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import "./NavBarAnimation.css";

const NavButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Tracks the active dropdown item

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setActiveDropdown(null); // Reset the active dropdown when leaving
  };

  const handleDropdownClick = (item) => {
    setActiveDropdown((prev) => (prev === item ? null : item)); // Toggle the active item
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#002039] lg:bg-white text-white justify-start w-full px-0"
    >
      <NavbarContent className="lg:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-[1px] w-full px-0">
        <NavbarItem>
          <Link
            href="#"
            className="bg-custom-gradient font-bold text-white py-[12px] px-[35px] text-center inline-block"
          >
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="#"
            className="bg-custom-gradient font-bold text-white py-[12px] px-[35px] text-center inline-block"
          >
            About Us
          </Link>
        </NavbarItem>

        {/* Dropdown for Products */}
        <div
          className="dropdown-container relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavbarItem>
            <Link
              href="#"
              className="bg-custom-gradient font-bold text-white py-[12px] px-[35px] text-center inline-block"
            >
              Products
            </Link>
          </NavbarItem>

          {isDropdownOpen && (
            <div className="absolute left-0 mt-1 bg-[#057793] text-white shadow-lg w-[225px] z-50">
              {[
                "Sleeping Tablets",
                "Anxiety Medication",
                "Painkillers",
                "Nootropics",
              ].map((item) => (
                <div key={item} className="relative">
                  <Link
                    onMouseEnter={() => handleDropdownClick(item)}
                    href="#"
                    className="block px-4 py-2 hover:bg-[#C43838] text-white border-b border-green-600"
                  >
                    {item}
                  </Link>

                  {/* Secondary Dropdown */}
                  {activeDropdown === item && (
                    <div className="absolute left-full top-0 mt-0 bg-[#057793] text-white shadow-lg w-[225px]">
                      {[
                        "Sleeping Tablets",
                        "Anxiety Medication",
                        "Painkillers",
                      ].map((subItem) => (
                        <Link
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 hover:bg-[#C43838] text-white border-b border-green-600"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <NavbarItem>
          <Link
            href="#"
            className="bg-custom-gradient font-bold text-white py-[12px] px-[35px] text-center inline-block"
          >
            FAQs
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="#"
            className="bg-custom-gradient font-bold text-white py-[12px] px-[35px] text-center inline-block"
          >
            Testimonials
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="#"
            className="bg-custom-gradient font-bold text-white py-[12px] px-[35px] text-center inline-block"
          >
            Blog
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="#"
            className="bg-custom-gradient font-bold text-white py-[12px] px-[35px] text-center inline-block"
          >
            Contact Us
          </Link>
        </NavbarItem>

        {/* Last Button: Bitcoin Discount */}
        <NavbarItem className="flex-grow">
          <Link
            href="#"
            className="bg-custom-gradient font-bold text-white py-[12px] px-[35px] text-center w-full block"
          >
            Bitcoin Discount
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-[#3474B1] mt-36 w-full px-0">
        {[
          "Home",
          "About Us",
          "Products",
          "FAQs",
          "Testimonials",
          "Blog",
          "Contact Us",
          "Bitcoin Discount",
        ].map((item) => (
          <NavbarMenuItem key={item}>
            <Link className="w-full py-2 justify-center block" href="#">
              {item}
            </Link>
            <hr className="w-full" />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavButton;
