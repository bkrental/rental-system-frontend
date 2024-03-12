"use client";

import { ArrowForwardOutlined } from "@mui/icons-material";
import "@scss/properties.scss";
import { useState } from "react";

const priceOptions = [
  {
    label: "All prices",
    min: 0,
    max: 0,
  },
  {
    label: "Less than 1 milion VND",
    min: 0,
    max: 1,
  },
  {
    min: 1,
    max: 3,
  },
  {
    min: 3,
    max: 5,
  },
  {
    min: 5,
    max: 10,
  },
  {
    min: 10,
    max: 40,
  },
];

export default function PriceDropdown() {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);

  return (
    <div className="property_dropdown property_dropdown--price">
      <div className="property_dropdown-price-range">
        <input
          placeholder="Min"
          className="property_dropdown-price-input"
          type="number"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
        />
        <ArrowForwardOutlined sx={{ fontSize: 20 }} />
        <input
          placeholder="Max"
          className="property_dropdown-price-input"
          type="number"
          value={priceMax}
          onChange={(e) => setPriceMin(e.target.value)}
        />
      </div>

      <div className="property_dropdown-price-select">
        {priceOptions.map(({ label, min, max }) => (
          <div
            data-price-min={min}
            data-price-max={max}
            key={`${min}-${max}`}
            className="property_dropdown-option"
            onClick={() => {
              setPriceMin(min);
              setPriceMax(max);
            }}
          >
            {label || `${min} - ${max} milion VND`}
          </div>
        ))}
      </div>
    </div>
  );
}
