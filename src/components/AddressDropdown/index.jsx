"use client";
import {
  setAddress,
  toggleDistrict,
} from "@/redux/features/filter/filterSlice";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../Dropdown";
import AddressForm from "./AddressForm";
import DistrictSelect from "./DistrictSelect";
import DropdownActions from "./DropdownActions";
import ProvinceSelect from "./ProvinceSelect";

export default function AddressDropdown() {
  const dispatch = useDispatch();
  const address = useSelector((s) => s.filter.address);
  const [activeMenu, setActiveMenu] = useState("form");
  const [provinceOptions, setProvinceOptions] = useState([]);
  const province = useMemo(
    () => provinceOptions.find((p) => p.Name === address.province),
    [address.province, provinceOptions]
  );

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
    )
      .then((res) => res.json())
      .then((data) => setProvinceOptions(data.sort()))
      .catch((err) => setProvinceOptions([]));
  }, []);

  const clearProvince = (e) => {
    e.stopPropagation();
    setTimeout(() => {
      dispatch(setAddress({ province: "", districts: [] }));
      setActiveMenu("form");
    }, 0);
  };

  const clearDistricts = (e) => {
    e.stopPropagation();
    setTimeout(() => {
      dispatch(setAddress({ ...address, districts: [] }));
      setActiveMenu("form");
    }, 0);
  };

  return (
    <Dropdown>
      <div>
        <AddressForm
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          province={province?.Name || ""}
          districts={address.districts.join(", ") || ""}
          clearProvinceValue={clearProvince}
          clearDistrictsValue={clearDistricts}
        />
        <ProvinceSelect
          options={provinceOptions}
          active={activeMenu == "province"}
          onClick={(province) => {
            dispatch(setAddress({ province: province.Name, districts: [] }));
            setActiveMenu("form");
          }}
        />
        <DistrictSelect
          active={address.province && activeMenu == "districts"}
          options={province?.Districts || []}
          selected={address.districts}
          onChange={(district) => dispatch(toggleDistrict(district.Name))}
        />
      </div>

      <DropdownActions activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
    </Dropdown>
  );
}
