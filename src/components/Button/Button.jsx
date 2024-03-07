import clsx from "clsx";
import styles from "./Button.module.scss";
import Link from "next/link";

function Button({ onClick = () => {}, active, children, href }) {
  const btnComponent = (
    <button
      className={clsx(styles.btn, active && styles.btnActive)}
      onClick={onClick}
    >
      {children}
    </button>
  );

  if (href) {
    return <Link href={href}>{btnComponent}</Link>;
  }

  return btnComponent;
}

export default Button;
