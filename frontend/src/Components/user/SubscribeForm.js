import React from "react";

function SubscribeForm() {
  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <div>
            <h2 style={{ color: "#212529", fontFamily: "Outfit" }}>
              Subscribe now & get 20% off
            </h2>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <p className="p-3 text-center ">
              Subscribe to our newsletter to get the latest updates
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <form>
              <div className="d-flex">
                <div className="mb-3 w-100">
                  <input
                    type="email"
                    className="form-control input-custom"
                    id="subEmail1"
                    aria-describedby="subEmail"
                    name="subEmail"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-dark text-white"
                    style={{ borderRadius: "0" }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeForm;
