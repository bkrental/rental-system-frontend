import clsx from "clsx";

export default function AuthFormInput({ ...props }) {
  const error = props.error;

  return (
    <>
      <input
        className={clsx("auth_form-input", error && "auth_form-input--error")}
        {...props}
      />
      {error && (
        <p className="auth_form-message auth_form-message--error">{error}</p>
      )}
    </>
  );
}
