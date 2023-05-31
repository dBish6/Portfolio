import { createContext, useState } from "react";
import { createPortal } from "react-dom";
import { nanoid } from "nanoid";

import Toast from "../components/toast";

export const ToastContext = createContext();

export const ToastProvider = (props) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (msg, type) =>
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: nanoid(), message: msg, type: type },
    ]);

  const close = (id) =>
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );

  return (
    <ToastContext.Provider value={addToast}>
      {props.children}

      {createPortal(
        <div
          className="toastsContainer"
          style={{
            position: "fixed",
            bottom: "1rem",
            left: "1rem",
            zIndex: "10",
          }}
        >
          {toasts &&
            toasts.map((toast) => (
              <Toast
                key={toast.id}
                close={() => close(toast.id)}
                type={toast.type}
              >
                {toast.message}
              </Toast>
            ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};
