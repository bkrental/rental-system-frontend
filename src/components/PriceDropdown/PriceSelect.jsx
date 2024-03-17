import { getPriceOptionLabel } from "@/utils/getPriceLabel";
import styles from "./PriceDropdown.module.scss";

function PriceSelect({ options, onOptionSelect }) {
  return (
    <div className={styles.select}>
      {options.map((price) => (
        <div
          key={price.toString()}
          className={styles.option}
          onClick={(e) => onOptionSelect(price)}
        >
          {getPriceOptionLabel(price)}
        </div>
      ))}
    </div>
  );
}

export default PriceSelect;
