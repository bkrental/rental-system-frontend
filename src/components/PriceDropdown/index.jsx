"use client";
import "@scss/properties.scss";
import Dropdown from "../Dropdown";
import PriceForm from "./PriceForm";
import PriceSelect from "./PriceSelect";

const suggestions = [
  [0, 0],
  [0, 1],
  [1, 3],
  [3, 5],
  [5, 10],
  [10, 40],
  [40, 70],
  [70, 100],
];

export default function PriceDropdown({ price, setPrice }) {
  return (
    <Dropdown>
      <PriceForm price={price} setPrice={setPrice} />

      <PriceSelect options={suggestions} onOptionSelect={setPrice} />
    </Dropdown>
  );
}
