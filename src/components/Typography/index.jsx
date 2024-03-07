import styles from "./Typography.module.scss";

export function H1({ children }) {
  return <h1 className={styles.h1}>{children}</h1>;
}

export function H2({ children }) {
  return <h2 className={styles.h2}>{children}</h2>;
}

export function H3({ children }) {
  return <h3 className={styles.h3}>{children}</h3>;
}

export function H4({ children }) {
  return <h4 className={styles.h4}>{children}</h4>;
}

export function H5({ children }) {
  return <h5 className={styles.h5}>{children}</h5>;
}

export function H6({ children }) {
  return <h6 className={styles.h6}>{children}</h6>;
}
