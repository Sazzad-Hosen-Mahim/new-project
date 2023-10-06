import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink color="foreground" to="/some">
            Features
          </NavLink>
        </NavbarItem>
        <NavbarItem isActive>
          <NavLink href="#" aria-current="page">
            Customers
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to="/signup">
            Integrations
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className=" lg:flex">
          <NavLink to="/login">Login</NavLink>
        </NavbarItem>
        <NavbarItem>
          <Button as={NavLink} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
