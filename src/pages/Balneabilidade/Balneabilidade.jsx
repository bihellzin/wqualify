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
            A Balneabilidade se torna impropría porque a água das praias vem 
            diretamente dos rios e canais, estes que podem carregar altos níveis 
            de poluição, como o esgoto doméstico e industrial não tratados ou porque 
            está em época de muitas chuvas, logo o valor da balneabilidade não é algo
            eterno, se uma praia está impropría hoje, semana que vem ela pode estar propría.
             


            
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Balneabilidade;
