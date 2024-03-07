import Link from "next/link";

export default function Button({
  children,
  onClick,
  color = "primary",
  variant = "outline",
  href,
}) {
  const btnComponent = (
    <button className={`btn btn-${variant}-${color}`} onClick={onClick}>
      {children}
    </button>
  );

  if (href) {
    return <Link href={href}>{btnComponent}</Link>;
  }

  return btnComponent;
}
