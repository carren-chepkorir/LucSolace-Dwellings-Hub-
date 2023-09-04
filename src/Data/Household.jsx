const House = ({ house }) => {
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
        </div>
      </div>
    </div>
  );
};
export default House;
