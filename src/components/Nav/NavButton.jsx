import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";

const NavButton = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Products",
    "FAQs",
    "Testimonials",
    "Blog",
    "Contact Us",
    "Bitcoin Discount",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#002039] lg:bg-white text-white justify-start w-full px-0"
    >
      {/* Left Content: Menu Toggle & Brand */}
      <NavbarContent className="lg:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      {/* Center Content: Navigation Links */}
      <NavbarContent className="hidden sm:flex gap-1 w-full px-0">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={index}
            className={`${
              index === menuItems.length - 1 ? "w-full" : "flex-shrink-0"
            }`}
          >
            <Link
              href="#"
              className={`bg-[#0589AC] text-white py-[12px] px-[35px] text-center ${
                index === menuItems.length - 1 ? "w-full block" : "inline-block"
              }`}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-[#3474B1] mt-36 w-full px-0">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full py-2 justify-center ${
                index === menuItems.length - 1 ? "block" : "inline-block"
              }`}
              href="#"
            >
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
