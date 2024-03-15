import clsx from "clsx";
import styles from "./AddressDropdown.module.scss";
import AddressMenu from "./AddressMenu";
import OptionIcon from "./OptionIcon";

export default function AddressForm({
  activeMenu,
  setActiveMenu,
  province,
  districts,
  clearProvinceValue,
  clearDistrictsValue,
}) {
  const openProvinceMenu = () => setActiveMenu("province");
  const openDistrictsMenu = () => province && setActiveMenu("districts");

  return (
    <AddressMenu active={activeMenu == "form"}>
      <div className={styles.input} onClick={openProvinceMenu}>
        <div className={styles.title}>Province</div>
        <OptionIcon isActive={province} handleClear={clearProvinceValue} />
        <div className={styles.value}>{province || ""}</div>
      </div>

      <div className={styles.input} onClick={openDistrictsMenu}>
        <div className={styles.title}>Districts</div>
        <OptionIcon isActive={districts} handleClear={clearDistrictsValue} />
        {districts && <div className={styles.value}>{districts || ""}</div>}
      </div>
    </AddressMenu>
  );
}
