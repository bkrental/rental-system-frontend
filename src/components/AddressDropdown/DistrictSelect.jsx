import styles from "./AddressDropdown.module.scss";
import AddressMenu from "./AddressMenu";

export default function DistrictSelect({
  options,
  onChange,
  selected,
  active,
}) {
  return (
    <AddressMenu active={active}>
      {options.map((district) => (
        <label className={styles.option} key={district.Id}>
          <input
            type="checkbox"
            checked={selected.includes(district.Name)}
            onChange={() => onChange(district)}
          />
          {district.Name}
        </label>
      ))}
    </AddressMenu>
  );
}
