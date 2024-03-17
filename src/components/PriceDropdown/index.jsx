"use client";
import "@scss/properties.scss";
import Dropdown from "../Dropdown";
import PriceForm from "./PriceForm";
import PriceSelect from "./PriceSelect";
import { PRICE_SUGGESTIONS } from "@/constants/price";

export default function PriceDropdown({ price, setPrice }) {
  return (
    <Dropdown>
      <PriceForm price={price} setPrice={setPrice} />

      <PriceSelect options={PRICE_SUGGESTIONS} onOptionSelect={setPrice} />
    </Dropdown>
  );
}
