"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import useDropdown from "@/hooks/useDropdown";
import PriceDropdown from "../PriceDropdown";
import PropertyTypeDropdown from "../PropertyTypeDropdown";
import { PROPERTY_TYPE_DETAILS } from "@/constants/propertyTypes";
import "./SearchBar.scss";
import AddressDropdown from "../AddressDropdown";
import setSearchParams from "@/utils/setSearchParams";
import { CachedOutlined, SearchOutlined } from "@mui/icons-material";
import { getPriceSelectLabel } from "@/utils/getPriceLabel";

export default function SearchBar() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const formRef = useRef();
  const [elementRef, isOpened, toggleDropdown] = useDropdown();
  const [priceSelectRef, isPriceDDOpened, togglePriceDD] = useDropdown();
  const [addressSelectRef, isAddressDDOpened, toggleAddressDD] = useDropdown();

  const [price, setPrice] = useState([0, 0]);
  const [propertyType, setPropertyType] = useState(PROPERTY_TYPE_DETAILS[0]);
  const [address, setAddress] = useState({
    province: { Name: "All", Value: "all" },
    districts: [],
  });
  const [keyword, setKeyword] = useState(() => searchParams.get("q"));

  const clearFilter = () => {
    setPrice([0, 0]);
    setPropertyType(PROPERTY_TYPE_DETAILS[0]);
    setAddress({ province: { Name: "All", Value: "all" }, districts: [] });
    setKeyword("");
    replace(pathname);
  };

  const onSubmit = useCallback(
    (e) => {
      if (e && e.preventDefault) e.preventDefault();

      const isValidKeyword = (keyword) => (keyword || "").trim().length > 0;
      const isValidPrice = (price) => price > 0;
      const isValidType = (propertyType) => propertyType !== "all";

      setSearchParams("q", keyword, params, isValidKeyword);
      setSearchParams("price[gt]", price[0], params, isValidPrice);
      setSearchParams("price[lt]", price[1], params, isValidPrice);
      setSearchParams("property_type", propertyType.value, params, isValidType);
      setSearchParams(
        "address.province",
        address.province.Name,
        params,
        (province) => province && province !== "All"
      );
      setSearchParams(
        "address.districts",
        address.districts.map((d) => d.Name).join("+"),
        params,
        (districts) => districts.length > 0
      );

      replace(`${pathname}?${params.toString()}`);
    },
    [price, propertyType, keyword, address]
  );

  return (
    <form ref={formRef} onSubmit={onSubmit} className="searchBar_container">
      <input
        name="q"
        placeholder="Enter the keyword to search for properties"
        className="searchBar_input"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {/* Property Type */}
      <div className="searchBar_selectContainer" ref={elementRef}>
        <div onClick={toggleDropdown} className="searchBar_select">
          <div className="searchBar_selectName">Property Type</div>

          <div className="searchBar_selectValue">{propertyType.label}</div>
        </div>
        {isOpened && (
          <PropertyTypeDropdown
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            handleSubmit={onSubmit}
          />
        )}
      </div>

      {/* Address */}
      <div className="searchBar_selectContainer" ref={addressSelectRef}>
        <div onClick={toggleAddressDD} className="searchBar_select">
          <div className="searchBar_selectName">Address</div>
          <div className="searchBar_selectValue">{address.province.Name}</div>
        </div>
        {isAddressDDOpened && (
          <AddressDropdown address={address} setAddress={setAddress} />
        )}
      </div>

      {/* Price */}
      <div className="searchBar_selectContainer" ref={priceSelectRef}>
        <div onClick={togglePriceDD} className="searchBar_select">
          <div className="searchBar_selectName">Price</div>
          <div className="searchBar_selectValue">
            {getPriceSelectLabel(price)}
          </div>
        </div>
        {isPriceDDOpened && <PriceDropdown price={price} setPrice={setPrice} />}
      </div>

      <div className="searchBar_actions">
        <button className="searchBar_button" type="submit">
          <SearchOutlined sx={{ fontSize: 20 }} />
          Search
        </button>
        <div
          onClick={() => clearFilter()}
          className="searchBar_button searchBar_button--reset"
        >
          <CachedOutlined sx={{ fontSize: 20 }} />
        </div>
      </div>
    </form>
  );
}
