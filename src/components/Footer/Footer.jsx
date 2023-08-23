import * as ToggleGroup from "@radix-ui/react-toggle-group";
import HomeIcon from "../../assets/home.svg";
import MapIcon from "../../assets/map.svg";
import MenuIcon from "../../assets/menu.svg";

const Footer = () => (
  <footer
    style={{
      backgroundColor: "#FFD8A8",
      position: "fixed",
      width: "100%",
      bottom: "0",
      color: "black",
      fontSize: "25px",
    }}
  >
    <ToggleGroup.Root
      type="single"
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="home"
        aria-label="Home"
        style={{ backgroundColor: "transparent" }}
      >
        <img src={HomeIcon} alt="" />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="map"
        aria-label="Map"
        style={{ backgroundColor: "transparent" }}
      >
        <img src={MapIcon} alt="" />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="menu"
        aria-label="Menu"
        style={{ backgroundColor: "transparent" }}
      >
        <img src={MenuIcon} alt="" />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  </footer>
);

export default Footer;
