import styles from "./PriceDropdown.module.scss";
import { ArrowForwardOutlined } from "@mui/icons-material";

export default function PriceForm({ price: [minPrice, maxPrice], setPrice }) {
  const santitizePrice = (price) => (Number.isNaN(price) ? "" : price);
  const setMinPrice = (price) => setPrice([santitizePrice(+price), maxPrice]);
  const setMaxPrice = (price) => setPrice([minPrice, santitizePrice(+price)]);

  return (
    <div className={styles.form}>
      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="from">
          From
        </label>
        <input
          id="from"
          // placeholder="Min"
          className={styles.input}
          value={santitizePrice(minPrice)}
          onChange={(e) => setMinPrice(+e.target.value)}
        />
      </div>
      <ArrowForwardOutlined sx={{ fontSize: 20 }} />
      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="to">
          To
        </label>
        <input
          id="to"
          // placeholder="Max"
          className={styles.input}
          value={santitizePrice(maxPrice)}
          onChange={(e) => setMaxPrice(+e.target.value)}
        />
      </div>
    </div>
  );
}
