import React from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="container-modal flex centrar-x centrar-y">{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
