export default function TextField({
  placeholder,
  onChange,
  value = "",
  iconStart,
  className,
}) {
  return (
    <div className="form-group">
      {iconStart}
      <input
        onChange={onChange}
        value={value}
        className={`form-input ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}
