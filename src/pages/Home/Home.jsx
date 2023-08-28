import "../../App.css";
import placa from "../../assets/placa.png";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <h2
          style={{
            fontSize: "2em",
            padding: 0,
            position: "absolute",
            top: 80,
            margin: "0 auto",
          }}
        >
          Balneabilidade - PE
        </h2>
        <img src={placa} style={{ margin: 40 }} alt="" />
        <div
          style={{
            backgroundColor: "rgb(255, 216, 168)",
            position: "absolute",
            zIndex: -1,
            width: "100%",
            height: 260,
            bottom: -95,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
