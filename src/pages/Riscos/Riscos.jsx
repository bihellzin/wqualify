import { Card } from "antd";
import "../../App.css";

const Riscos = () => {
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
        <h3>Riscos</h3>
        <Card bordered={true} bodyStyle={{ padding: "8px 16px" }}>
          <p>
            A recreação em águas impróprias pode trazer uma série de riscos a
            saúde, alguns sintomas e doenças que podem ser contraídos são os
            seguintes:
          </p>
          <ul>
            <li>Hepatite A</li>
            <li>Vômitos</li>
            <li>Diarréias</li>
            <li>Cólera</li>
            <li>Leptospirose</li>
            <li>Febre tifóide</li>
            <li>Conjuntivite infecciosa</li>
            <li>Infecções</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Riscos;
