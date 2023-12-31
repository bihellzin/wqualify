import { Button } from "antd";
import { FaUmbrellaBeach, FaWater } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ sidebarOpen, handleSidebarOpen }) => {
  const navigate = useNavigate();

  return (
    <aside
      style={{
        position: "fixed",
        height: "calc(100vh - 86px)",
        top: 0,
        right: 0,
        display: sidebarOpen ? "flex" : "none",
        width: "70%",
        backgroundColor: "#FFD8A8",
        flexDirection: "column",
        gap: 8,
        padding: 16,
      }}
    >
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        icon={<FaUmbrellaBeach size={20} />}
        onClick={() => {
          handleSidebarOpen((prev) => !prev);
          return navigate("balneabilidade");
        }}
      >
        O que é balneabilidade?
      </Button>
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        icon={<FaWater size={20} />}
        onClick={() => {
          handleSidebarOpen((prev) => !prev);
          return navigate("categoria-agua");
        }}
      >
        Categoria da água
      </Button>
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        icon={<IoWarningOutline size={20} />}
        onClick={() => {
          handleSidebarOpen((prev) => !prev);
          return navigate("riscos");
        }}
      >
        Riscos
      </Button>
    </aside>
  );
};

export default Sidebar;
