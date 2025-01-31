import React from "react";
import LatestCollectionCards from "./LatestCollectionCards";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import NotFound from "../shared/notFound";
import { Navigate } from "react-router-dom";

function CollectionsFilter() {
  const collectionProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const categories = ["Men", "Women", "Kids"];
  const subCategory = ["Topwear", "Bottomwear", "Footwear"];
  const [filteredProducts, setFilteredProducts] = useState(
    collectionProducts || []
  );

  // States for checkbox filters
  const [selectedCategories, setselectedCategories] = useState({});
  const [selectedSubCategories, setselectedSubCategories] = useState({});

  // Handle checkbox state changes
  const handleChange = (e, setFilterState) => {
    const { id, checked } = e.target;
    setFilterState((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  // Filter Collections based on selected criteria
  useEffect(() => {
    const filterCollections = () => {
      if (!collectionProducts) return;

      const activeCategories = Object.keys(selectedCategories).filter(
        (key) => selectedCategories[key]
      );
      const activeSubCategories = Object.keys(selectedSubCategories).filter(
        (key) => selectedSubCategories[key]
      );

      const filtered = collectionProducts.filter((collection) => {
        const matchesCategory =
          activeCategories.length > 0
            ? activeCategories.includes(collection.category.toLowerCase())
            : true;

        const matchesSubCategory =
          activeSubCategories.length > 0
            ? activeSubCategories.includes(collection.subCategory.toLowerCase())
            : true;

        return matchesCategory && matchesSubCategory;
      });

      setFilteredProducts(filteredProducts);
    };

    filterCollections();
  }, [collectionProducts, selectedCategories]);

  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row g-0 ">
          {/* Left Sidebar with Filters */}
          <div className="col-12 col-md-3 py-2 py-md-4 px-3 ">
            <form>
              {/* Filter Header */}
              <div className="d-flex align-items-center mb-2 py-2 mt-4 ">
                <b>
                  <h4 className="m-0">Filter</h4>
                </b>
              </div>

              {/* Category Filters */}
              <div className="mb-4 border p-3">
                <h5 className="m-0 mb-2">Categories</h5>
                <div className="d-flex flex-column flex-wrap mt-3 ">
                  {categories.map((category) => (
                    <div
                      key={category}
                      className="form-check d-flex align-items-center me-4 mb-2"
                    >
                      <input
                        type="checkbox"
                        className="form-check-input me-2"
                        id={category}
                        style={{ border: "1px solid black" }}
                        checked={selectedCategories[category] || false}
                        onChange={(e) => handleChange(e, setselectedCategories)}
                      />
                      <label
                        className="form-check-label  m-0"
                        htmlFor={category}
                        style={{ color: "#374151", fontFamily: "Outfit" }}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub Categroy Filters */}
              <div className="mb-4 p-3 border">
                <h5 className="m-0 mb-2">Type</h5>
                <div className="d-flex flex-wrap flex-column mt-3">
                  {subCategory.map((subCategory) => (
                    <div
                      key={subCategory}
                      className="form-check d-flex align-items-center me-4 mb-2"
                    >
                      <input
                        type="checkbox"
                        className="form-check-input me-2"
                        id={subCategory}
                        style={{ border: "1px solid black" }}
                        checked={selectedSubCategories[subCategory] || false}
                        onChange={(e) =>
                          handleChange(e, setselectedSubCategories)
                        }
                      />
                      <label
                        className="form-check-label  m-0"
                        style={{ color: "#374151", fontFamily: "Outfit" }}
                        htmlFor={subCategory}
                      >
                        {subCategory.charAt(0).toUpperCase() +
                          subCategory.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>

          {/* Right Section - Job Listings */}
          <div className="col-12 col-md-9 py-2 py-md-4">
            <div className="container">
              <div className="row align-items-center">
                {/* Heading Section */}
                <div className="col-12 col-md-6">
                  <h2
                    style={{
                      color: "#020817",
                      fontFamily: "Outfit",
                      textTransform: "uppercase",
                    }}
                  >
                    <span style={{ color: "#6b7280" }}>All</span> Collections
                  </h2>
                </div>

                {/* Sort Button Section */}
                <div className="col-12 col-md-6 text-md-end mt-3 mt-md-0">
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      style={{ border: "2px solid black" }}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sort By: Relevant
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Sort By: Relevant
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Sort By: Low To High
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Sort By: High to Low
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {collectionProducts && collectionProducts.length > 0 ? (
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 mt-3">
                  {collectionProducts.map((collection, index) => (
                    <div key={index} className="col">
                      <LatestCollectionCards
                      // id={collection._id}
                      // title={collection.title}
                      // category={collection.category}
                      // subCategory={collection.subCategory}
                      // price={collection.price}
                      // image={collection.image}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p>No jobs found based on selected filters.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionsFilter;
