"use client";
import Dropdown from "../Dropdown";
import PriceForm from "./PriceForm";
import PriceSelect from "./PriceSelect";
import { PRICE_SUGGESTIONS } from "@/constants/price";
import styles from "./PriceDropdown.module.scss";

export default function PriceDropdown({ price, setPrice }) {
  return (
    <div className={styles.dropdown}>
      <PriceForm price={price} setPrice={setPrice} />

      <PriceSelect options={PRICE_SUGGESTIONS} onOptionSelect={setPrice} />
    </div>
  );
}
