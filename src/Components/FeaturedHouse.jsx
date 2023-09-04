import React from "react";
import House from "../Data/Household";

const FeaturedHouse = ({ house }) => {
  if (house) {
    return (
      <div>
        <div
          className="row container-fluid bg:{#fd7e14}"
          style={{ height: "50px" }}
        >
          <h3 className="col-md-12 text-center">Featured House</h3>
        </div>
        {/* below we are rendering a function containing info of featured house */}
        <House house={house} />
      </div>
    );
  } else {
    return <div>No featured House at this time</div>;
  }
};
export default FeaturedHouse;
