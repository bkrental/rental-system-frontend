import clsx from "clsx";
import styles from "./AddressDropdown.module.scss";
import {
  ArrowBackIos,
  CachedOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setAddress } from "@/redux/features/filter/filterSlice";

export default function DropdownActions({ activeMenu, setActiveMenu }) {
  const dispatch = useDispatch();
  const goBack = () => {
    setTimeout(() => setActiveMenu("form"), 0);
  };

  const reset = () => {
    if (activeMenu == "form" || activeMenu == "province") {
      dispatch(setAddress({ province: "", districts: [] }));
    } else {
      dispatch(setAddress({ districts: [] }));
    }
  };

  return (
    <div className={styles.action}>
      {activeMenu != "form" && (
        <div onClick={goBack} className={styles.actionBtn}>
          <ArrowBackIos /> Back
        </div>
      )}
      <div style={{ flex: 1 }}></div>
      <div onClick={reset} className={styles.actionBtn}>
        <CachedOutlined /> Reset
      </div>
      <div className={clsx(styles.actionBtn, styles.actionBtnPrimary)}>
        <SearchOutlined />
        Search
      </div>
    </div>
  );
}
