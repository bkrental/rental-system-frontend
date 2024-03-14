"use client";
import AddressDropdown from "@/components/Dropdown/AddressDropdown";
import PriceDropdown from "@/components/Dropdown/PriceDropdown";
import PropertyTypeDropdown from "@/components/Dropdown/PropertyTypeDropdown";
import Select from "@/components/Select/Select";
import { setKeyword, clearFilter } from "@/redux/features/filter/filterSlice";
import { getPriceSelectLabel } from "@/utils/getPriceLabel";
import { CachedOutlined, SearchOutlined } from "@mui/icons-material";
import "@scss/listings.scss";
import { useSelector, useDispatch } from "react-redux";
import getPropertyTypeLabels from "@/utils/getPropertyTypesLabel";

export default function PropertyLayout({ children }) {
  const {
    keyword,
    property_type,
    address: { province, district, ward },
    price: { min, max },
  } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="property_container">
      <div className="property_topbar">
        <form className="property_topbar-form">
          <div className="property_topbar-form-keyword">
            <input
              value={keyword}
              className="property_topbar-input"
              placeholder="Search by keyword, district or nearby location"
              onChange={(e) => dispatch(setKeyword(e.target.value))}
            />
          </div>

          <Select
            name="property_type"
            title="Property Type"
            DropdownComponent={PropertyTypeDropdown}
            value={getPropertyTypeLabels(property_type)}
          />
          <Select
            name="address"
            title="Address"
            DropdownComponent={AddressDropdown}
            value={`${province}`}
          />
          <Select
            name="price"
            title="Price"
            DropdownComponent={PriceDropdown}
            value={getPriceSelectLabel(min, max)}
          />

          <div className="property_topbar-form-action-btn">
            <div className="property_topbar-form-btn">
              <SearchOutlined sx={{ fontSize: 20 }} />
              Search
            </div>
            <div
              onClick={() => dispatch(clearFilter())}
              className="property_topbar-form-btn property_topbar-form-btn--reset"
            >
              <CachedOutlined sx={{ fontSize: 20 }} />
            </div>
          </div>
        </form>
      </div>
      <div className="property_listings">{children}</div>
      <div className="property_sidebar">Filter section</div>
    </div>
  );
}
