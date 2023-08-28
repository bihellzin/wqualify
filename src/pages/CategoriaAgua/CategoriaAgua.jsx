import { Button, Card, Table } from "antd";
import "../../App.css";
import { useState } from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const CategoriaAgua = () => {
  const [showTable, setShowTable] = useState(false);
  return (
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
        {showTable ? (
          <>
            <Table
              pagination={false}
              columns={[
                {
                  title: "Categoria",
                  dataIndex: "categoria",
                  key: "categoria",
                },
                {
                  title: "Limite de NMP de coliformes termotolerantes/100ml",
                  dataIndex: "limite",
                  key: "limite",
                },
              ]}
              dataSource={[
                {
                  key: "excelente",
                  categoria: "Excelente",
                  limite: "Máximo de 250 em 80% ou mais das amostras",
                },
                {
                  key: "muito-boa",
                  categoria: "Muito boa",
                  limite: "Máximo de 500 em 80% ou mais das amostras",
                },
                {
                  key: "satisfatoria",
                  categoria: "Satisfatória",
                  limite: "Máximo de 1000 em 80% ou mais das amostras",
                },
                {
                  key: "impropria",
                  categoria: "Imprópria",
                  limite:
                    "Acima de 1000 em mais de 20% das amostras ou valor obtido na última amostragem for superior a 2500",
                },
              ]}
            />
            <p>Fonte: CPRH</p>
          </>
        ) : (
          <p>
            Águas usadas para banho (mar e rios) e recreação se classificam em 4
            categorias: EXCELENTE, MUITO BOA, SATISFATÓRIA ou IMPRÓPRIA. O
            critério é a presença de coliformes nas amostras de 5 semanas ou com
            intervalos de 24 horas.
          </p>
        )}
      </Card>
      <div style={{ height: 160 }}>
        <Button
          shape="circle"
          icon={
            showTable ? (
              <BiChevronLeftCircle size={30} />
            ) : (
              <BiChevronRightCircle size={30} />
            )
          }
          size="large"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8,
          }}
          onClick={() => setShowTable((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default CategoriaAgua;
