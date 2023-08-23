import { Card } from "antd";
import "../../App.css";

const CategoriaAgua = () => {
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
        <h3> Categoria da água</h3>
        <Card bordered={true} bodyStyle={{ padding: "8px 16px" }}>
          <p>
            As águas doces, salobras e salinas destinadas à recreação de contato
            primário podem ser classificadas em quatro categorias: EXCELENTE,
            MUITO BOA, SATISFATÓRIA ou IMPRÓPRIA.
          </p>
          <p>
            O critério de enquadramento nessas categorias baseia-se nas
            concentrações de Coliformes termotolerantes em um conjunto de
            amostras de cinco semanas consecutivas ou em cinco amostragens com
            intervalo mínimo de 24 horas entre elas.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default CategoriaAgua;
