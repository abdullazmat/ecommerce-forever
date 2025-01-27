import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CollectionsFilter from "../Components/user/CollectionsFilter";

function Collections() {
  const [searchBox, setSearchBox] = useState(true);

  return (
    <div className="container">
      <CollectionsFilter />
    </div>
  );
}

export default Collections;
