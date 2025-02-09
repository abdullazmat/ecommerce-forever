import React from "react";
import LatestCollectionCards from "./LatestCollectionCards";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function CollectionsFilter() {
  const { allProducts } = useSelector((state) => state.product);
  const { searchText } = useSelector((state) => state.product);
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({
    Men: false,
    Women: false,
    Kids: false,
  });
  const [selectedSubCategories, setSelectedSubCategories] = useState({
    Topwear: false,
    Bottomwear: false,
    Winterwear: false,
  });

  const categories = ["Men", "Women", "Kids"];
  const subCategories = ["Topwear", "Bottomwear", "Winterwear"];

  const handleCategoryChange = (e) => {
    const { id, checked } = e.target;
    setSelectedCategories((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const handleSubCategoryChange = (e) => {
    const { id, checked } = e.target;
    setSelectedSubCategories((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  useEffect(() => {
    const filteredBySearch = allProducts.filter((product) =>
      searchText
        ? product.productName.toLowerCase().includes(searchText.toLowerCase())
        : true
    );

    const filteredByCategory = filteredBySearch.filter((product) => {
      const matchesCategory =
        selectedCategories[product.category] ||
        !Object.values(selectedCategories).includes(true);
      const matchesSubCategory =
        selectedSubCategories[product.subCategory] ||
        !Object.values(selectedSubCategories).includes(true);
      return matchesCategory && matchesSubCategory;
    });

    setFilteredCollections(filteredByCategory);
  }, [allProducts, searchText, selectedCategories, selectedSubCategories]);

  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* Left Sidebar with Filters */}
          <div className="col-12 col-md-3 py-2 py-md-4 px-3">
            <form>
              <div className="d-flex align-items-center mb-2 py-2 mt-4">
                <b>
                  <h4 className="m-0">Filter</h4>
                </b>
              </div>

              {/* Category Filters */}
              <div className="mb-4 border p-3">
                <h5 className="m-0 mb-2">Categories</h5>
                <div className="d-flex flex-column flex-wrap mt-3">
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
                        checked={selectedCategories[category]}
                        onChange={handleCategoryChange}
                      />
                      <label
                        className="form-check-label m-0"
                        htmlFor={category}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subcategory Filters */}
              <div className="mb-4 p-3 border">
                <h5 className="m-0 mb-2">Subcategories</h5>
                <div className="d-flex flex-wrap flex-column mt-3">
                  {subCategories.map((subCategory) => (
                    <div
                      key={subCategory}
                      className="form-check d-flex align-items-center me-4 mb-2"
                    >
                      <input
                        type="checkbox"
                        className="form-check-input me-2"
                        id={subCategory}
                        style={{ border: "1px solid black" }}
                        checked={selectedSubCategories[subCategory]}
                        onChange={handleSubCategoryChange}
                      />
                      <label
                        className="form-check-label m-0"
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

          {/* Right Section - Collection Listings */}
          <div className="col-12 col-md-9 py-2 py-md-4">
            <div className="container">
              <div className="row align-items-center">
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
              </div>
            </div>

            <div>
              {filteredCollections && filteredCollections.length > 0 ? (
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 mt-3">
                  {filteredCollections.map((product) => (
                    <div key={product?._id} className="col">
                      <LatestCollectionCards product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <p>No products found based on selected filters.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionsFilter;
