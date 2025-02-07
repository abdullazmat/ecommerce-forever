import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

function Toast() {
  useEffect(() => {
    // Automatically hide the toast after 5 seconds
    const toastElement = document.querySelector(".toast");
    const toast = new window.bootstrap.Toast(toastElement);

    // Show the toast and trigger animation
    toast.show();

    // After 5 seconds, trigger the slide-out and fade
    setTimeout(() => {
      toastElement.classList.remove("show");
      toastElement.classList.add("fade-out");
    }, 5000); // After 5 seconds, trigger the fade-out animation
  }, []);

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
      <div
        className="toast fade"
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
            className="me-2 fa-large"
            style={{ color: "#FF532E" }}
          />
          <h6 className="p-0 m-0">Select Product Size</h6>
        </div>
      </div>
    </div>
  );
}

export default Toast;
