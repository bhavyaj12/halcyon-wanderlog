import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, setSortBy } from "redux-reducers";
import { FilterListOutlinedIcon } from "assets";

const FilterButtons = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { sortBy } = useSelector(getPost);
  const dispatch = useDispatch();

  const selectSortHandler = (sortOption) => {
    dispatch(setSortBy(sortOption));
    setShowFilters(!showFilters);
  };
  const clearSortHandler = () => {
    dispatch(setSortBy("LATEST"));
  };
  return (
    <div className="my-4 d-flex justify-content-between align-items-center filter-container">
      <button
        className={
          sortBy !== "LATEST"
            ? "btn btn-info visible"
            : "btn btn-info invisible"
        }
        onClick={clearSortHandler}
      >
        Clear Filters
      </button>
      <div className="position-relative">
        <button
          onClick={() => {
            setShowFilters(!showFilters);
          }}
        >
          <FilterListOutlinedIcon />
          Filter &amp; Sort
        </button>
        {showFilters && (
          <div className="d-flex flex-column position-absolute filter-options">
            <button
              className={sortBy === "OLDEST" ? "text-info" : ""}
              value="OLDEST"
              onClick={() => selectSortHandler("OLDEST")}
            >
              Oldest
            </button>
            <button
              className={sortBy === "TRENDING" ? "text-info" : ""}
              value="TRENDING"
              onClick={() => selectSortHandler("TRENDING")}
            >
              Trending
            </button>
            <button
              className={sortBy === "LATEST" ? "text-info" : ""}
              value="LATEST"
              onClick={() => selectSortHandler("LATEST")}
            >
              Default (Latest)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterButtons;
