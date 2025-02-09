import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

function Toast({ message }) {
  const toastRef = useRef(null);

  useEffect(() => {
    if (toastRef.current) {
      const toast = new window.bootstrap.Toast(toastRef.current, {
        autohide: true,
        delay: 5000, // Bootstrap will handle the delay
      });
      toast.show();
    }
  }, []);

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
      <div
        ref={toastRef}
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body d-flex align-items-center justify-content-center">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="me-2 fa-lg"
            style={{ color: "#FF532E" }}
          />
          <h6 className="p-0 m-0">{message}</h6>
        </div>
      </div>
    </div>
  );
}

export default Toast;
