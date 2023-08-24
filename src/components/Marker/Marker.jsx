import Placeholder from "../../assets/placeholder.png";

const Marker = ({ top, left, cityName, handleClick, city }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",
        color: "#EB580D",
        cursor: "pointer",
      }}
      className="marker"
      onClick={() => handleClick(city)}
    >
      <img src={Placeholder} style={{ width: 30, height: 30 }} alt="" />
      <p>{cityName}</p>
    </div>
  );
};

export default Marker;
