"use client";
import { setPrice } from "@/redux/features/filter/filterSlice";
import "@scss/properties.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

export default function PriceDropdown() {
  const dispatch = useDispatch();
  const price = useSelector((s) => s.filter.price);
  const [priceInput, setPriceInput] = useState([price?.min, price?.max]);

  // Seperate the price input and the price redux state to handle the case when user input invalid price (price_min > price_max)
  useEffect(() => {
    const minPrice = Math.min(...priceInput);
    const maxPrice = Math.max(...priceInput);

    dispatch(setPrice({ min: minPrice, max: maxPrice }));
  }, [priceInput]);

  return (
    <Dropdown>
      <PriceForm price={priceInput} setPrice={setPriceInput} />

      <PriceSelect options={suggestions} onOptionSelect={setPriceInput} />
    </Dropdown>
  );
}
