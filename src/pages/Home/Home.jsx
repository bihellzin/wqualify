import "../../App.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Informe-se</h1>
        <h1>Sobre</h1>
        <h1>Suas Praias</h1>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
