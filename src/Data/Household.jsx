import { useState } from "react";
import inbox from "../assets/images.png";
import Inquiry from "../Components/Inquiry";

const House = ({ house }) => {
  const [inquiryShown, setInquiryShown] = useState(false);
  const inquiryClick = () => {
    setInquiryShown(!inquiryShown);
  };
  return (
    <div>
      <div className="row mt-5">
        <h3 className="col-md-12">{house.country}</h3>
      </div>
      <div className="row ">
        <h2 className="col-md-12"> {house.address}</h2>
      </div>
      <div className="row">
        <div className="col-md-7">
          <img
            className="image-fluid rounded "
            style={{ height: "300px", width: "600px" }}
            src={house.photo}
          />
        </div>
        <div className="col-md-4">
          <p className="price">${house.price}</p>
          <p>{house.description}</p>
          <img
            src={inbox}
            alt="Inbox Icon"
            onClick={inquiryClick}
            height="50"
          />
          {/* conditionally renders inquiry component only if inquiryshown is true  */}

          {inquiryShown && <Inquiry house={house} />}
        </div>
      </div>
    </div>
  );
};
export default House;
