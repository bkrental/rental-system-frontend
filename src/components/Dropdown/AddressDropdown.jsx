"use client";
import { removeProvincePrefix } from "@/utils/getAllProvinces";
import { useEffect, useMemo, useState } from "react";
import styles from "./Dropdown.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "@/redux/features/filter/filterSlice";
import { ArrowBackIos, CleaningServices } from "@mui/icons-material";

export default function AddressDropdown() {
  const dispatch = useDispatch();
  const address = useSelector((s) => s.filter.address);
  const [activeMenu, setActiveMenu] = useState("province");
  const [province, setProvince] = useState("");
  const [districts, setDistricts] = useState([]);

  const [provinceOptions, setProvinceOptions] = useState([]);
  const districtOptions = useMemo(
    () => (province?.Districts ? province.Districts : []),
    [province]
  );

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
    )
      .then((res) => res.json())
      .then(setProvinceOptions)
      .catch((err) => setProvinceOptions([]));
  }, []);

  const toggleActiveMenu = (menu, dependecies = []) => {
    if (dependecies.length > 0) {
      const isAllDependeciesFilled = dependecies.every((dep) => dep !== "");
      if (!isAllDependeciesFilled) return;
    }
    setActiveMenu(activeMenu === menu ? "" : menu);
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={clsx(
          styles.addressForm,
          activeMenu != "province" && styles.addressFormHidden
        )}
      >
        {provinceOptions.map((province) => {
          const provinceName = removeProvincePrefix(province.Name);
          const selectProvince = () => {
            dispatch(setAddress({ province: provinceName }));
            console.log(province);
            setProvince(province);
            toggleActiveMenu("district");
          };
          return (
            <div
              className={styles.addressOption}
              key={province.Id}
              onClick={selectProvince}
            >
              {provinceName}
              <ArrowForwardIosIcon />
            </div>
          );
        })}
      </div>

      {province && activeMenu == "district" && (
        <div className={clsx(styles.addressForm)}>
          <div
            className={clsx(styles.addressOption, styles.addressOptionBack)}
            onClick={() => toggleActiveMenu("province")}
          >
            <ArrowBackIos />
            {removeProvincePrefix(province?.Name)}
          </div>
          {districtOptions.map((district) => {
            const districtName = district.Name;
            const selectDistrict = () => {
              dispatch(
                setAddress({ district: [...address.districts, districtName] })
              );
            };
            return (
              <div
                className={clsx(
                  styles.addressOption,
                  styles.addressOptionDistrict
                )}
                key={district.Id}
                onClick={selectDistrict}
              >
                <input
                  checked={address.districts.includes(districtName)}
                  type="checkbox"
                />
                {districtName}
              </div>
            );
          })}
        </div>
      )}

      {/* {provinces.map(({ Name, Id }) => {
        return (
          <div key={Id} className={styles.option}>
            {removeProvincePrefix(Name)}
          </div>
        );
      })} */}
    </div>
  );
}
