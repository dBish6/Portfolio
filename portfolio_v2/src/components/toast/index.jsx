import "./toast.css";

const Toast = ({ close, type, children }) => {
  return (
    <div
      aria-label="Notification"
      className={type === "error" ? "toast typeError" : "toast typeSuccess"}
    >
      <p>{children}</p>
      <button onClick={close}>&#10005;</button>
    </div>
  );
};

export default Toast;
