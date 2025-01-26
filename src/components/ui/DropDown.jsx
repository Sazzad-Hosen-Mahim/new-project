import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const DropDown = () => {
  const [currency, setCurrency] = useState("GBP"); // Default state for the dropdown

  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency); // Update the state with the selected currency
  };

  return (
    <Dropdown className="rounded-none bg-[#057793] text-white !min-w-[80px]">
      <DropdownTrigger>
        <Button
          variant=""
          className="font-bold text-sm flex items-center gap-1"
        >
          {currency}
          <FaAngleDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        className="border-none text-center"
      >
        <DropdownItem key="eur" onClick={() => handleCurrencyChange("EUR")}>
          EUR
        </DropdownItem>
        <DropdownItem key="usd" onClick={() => handleCurrencyChange("USD")}>
          USD
        </DropdownItem>
        <DropdownItem key="gbp" onClick={() => handleCurrencyChange("GBP")}>
          GBP
        </DropdownItem>
        <DropdownItem key="cad" onClick={() => handleCurrencyChange("CAD")}>
          CAD
        </DropdownItem>
        <DropdownItem key="sgd" onClick={() => handleCurrencyChange("SGD")}>
          SGD
        </DropdownItem>
        <DropdownItem key="btc" onClick={() => handleCurrencyChange("BTC")}>
          BTC
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
