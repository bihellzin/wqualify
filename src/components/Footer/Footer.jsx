import { Button } from "antd";
import { GrMapLocation } from "react-icons/gr";
import { HiOutlineHome, HiOutlineMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Footer = ({ handleMenuClick }) => {
  const navigate = useNavigate();
  return (
    <footer
      style={{
        backgroundColor: "#FFD8A8",
        position: "fixed",
        width: "100%",
        bottom: "0",
        color: "black",
        fontSize: "25px",
        display: "flex",
        justifyContent: "space-around",
        padding: "8px 0",
      }}
    >
      <Button
        style={{
          width: 70,
          height: 70,
          backgroundColor: "transparent",
          borderColor: "transparent",
        }}
        icon={<HiOutlineHome size={45} />}
        size={"large"}
        onClick={() => {
          handleMenuClick(false);
          return navigate("/");
        }}
      />
      <Button
        style={{
          width: 70,
          height: 70,
          backgroundColor: "transparent",
          borderColor: "transparent",
        }}
        icon={<GrMapLocation size={40} />}
        size={"large"}
      />
      <Button
        style={{
          width: 70,
          height: 70,
          backgroundColor: "transparent",
          borderColor: "transparent",
        }}
        icon={<HiOutlineMenu size={45} />}
        size={"large"}
        onClick={() => handleMenuClick((prev) => !prev)}
      />
    </footer>
  );
};

export default Footer;
