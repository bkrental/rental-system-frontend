import styles from "./PriceDropdown.module.scss";
import { ArrowForwardOutlined } from "@mui/icons-material";

export default function PriceForm({ price: [minPrice, maxPrice], setPrice }) {
  const santitizePrice = (price) => (Number.isNaN(price) ? "" : price);
  const setMinPrice = (price) => setPrice([santitizePrice(+price), maxPrice]);
  const setMaxPrice = (price) => setPrice([minPrice, santitizePrice(+price)]);

  return (
    <div className={styles.form}>
      <input
        placeholder="Min"
        className={styles.input}
        value={santitizePrice(minPrice)}
        onChange={(e) => setMinPrice(+e.target.value)}
      />
      <ArrowForwardOutlined sx={{ fontSize: 20 }} />
      <input
        placeholder="Max"
        className={styles.input}
        value={santitizePrice(maxPrice)}
        onChange={(e) => setMaxPrice(+e.target.value)}
      />
    </div>
  );
}
