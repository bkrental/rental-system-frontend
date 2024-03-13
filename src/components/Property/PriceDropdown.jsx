"use client";

import { setPrice } from "@/redux/features/filter/filterSlice";
import { getPriceOptionLabel } from "@/utils/getPriceLabel";
import { ArrowForwardOutlined } from "@mui/icons-material";
import "@scss/properties.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const suggestions = [
  [0, 0],
  [0, 1],
  [1, 3],
  [3, 5],
  [5, 10],
  [10, 40],
];

export default function PriceDropdown() {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.filter.price);
  const [minPirceInputValue, setMinPriceInputValue] = useState(price.min);
  const [maxPriceInputValue, setMaxPriceInputValue] = useState(price.max);

  // Seperate the price input and the price redux state to handle the case when user input invalid price (price_min > price_max)
  useEffect(() => {
    const minPrice = Math.min(minPirceInputValue, maxPriceInputValue);
    const maxPrice = Math.max(maxPriceInputValue, minPirceInputValue);
    dispatch(setPrice({ min: minPrice, max: maxPrice }));
  }, [minPirceInputValue, maxPriceInputValue]);

  return (
    <div className="property_dropdown property_dropdown--price">
      <div className="property_dropdown-price-range">
        <input
          placeholder="Min"
          className="property_dropdown-price-input"
          type="number"
          value={minPirceInputValue}
          onChange={(e) => setMinPriceInputValue(e.target.value)}
        />
        <ArrowForwardOutlined sx={{ fontSize: 20 }} />
        <input
          placeholder="Max"
          className="property_dropdown-price-input"
          type="number"
          value={maxPriceInputValue}
          onChange={(e) => setMaxPriceInputValue(e.target.value)}
        />
      </div>

      <div className="property_dropdown-price-select">
        {suggestions.map(([min, max]) => (
          <div
            key={`${min}-${max}`}
            className="property_dropdown-option"
            onClick={() => {
              setMaxPriceInputValue(max);
              setMinPriceInputValue(min);
            }}
          >
            {getPriceOptionLabel(min, max)}
          </div>
        ))}
      </div>
    </div>
  );
}
