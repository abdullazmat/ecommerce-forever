import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Collections() {
  const [searchBox, setSearchBox] = useState(true);

  return (
    <div className="container">
      {/* {searchBox && (
        <div className=" w-100  bg-white d-flex align-items-center justify-content-center container  search-box ">
          <div className="w-75 w-md-50 d-flex">
            <input
              type="text"
              placeholder="Search"
              className="form-control input-custom "
            />
            <button className="btn bg-black " style={{ borderRadius: "0" }}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "white" }}
              />
            </button>
          </div>
          <div className=" p-3 border-bottom">
            <button className="btn" onClick={() => setSearchBox(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Collections;
