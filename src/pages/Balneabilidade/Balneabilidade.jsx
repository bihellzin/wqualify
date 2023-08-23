import { Card } from "antd";
import "../../App.css";

const Balneabilidade = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
        }}
      >
        <h3>O que é balneabilidade?</h3>
        <Card bordered={true} bodyStyle={{ padding: "8px 16px" }}>
          <p>
            Balneabilidade é o conjunto de fatores que define a qualidade da
            água para fins de recreação de contato primário, ou, seja, contato
            direto e prolongado, onde existe a possibilidade de ingerir
            quantidades consideráveis de água.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Balneabilidade;
