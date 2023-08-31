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
          <img src="" alt="hey house here" />
        </div>
      </div>
      <div className="col-md-5">
        <p className="price">${house.price}</p>
        <p>{house.description}</p>
      </div>
    </div>
  );
};
export default House;
