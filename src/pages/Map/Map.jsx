import BeachSvg from "../../assets/Rectangle 8.svg";
import "./styles.css";

// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
// import { Icon, divIcon, point } from "leaflet";
import { Modal } from "antd";
import { useState } from "react";
import Title from "../../assets/image 14.png";
import Placeholder from "../../assets/placeholder.png";
import Marker from "../../components/Marker/Marker";
// create custom icon
// const customIcon = new Icon({
//   // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
//   iconUrl: Placeholder,
//   iconSize: [38, 38], // size of the icon
// });

// custom cluster icon
// const createClusterCustomIcon = function (cluster) {
//   return new divIcon({
//     html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
//     className: "custom-marker-cluster",
//     iconSize: point(33, 33, true),
//   });
// };

// markers
const markers = [
  {
    geocode: [-8.1000767, -34.89097],
    name: "Praia 1",
    address: "Rua 1",
    waterCategory: "Imprópria",
  },
  {
    geocode: [-8.1600767, -34.91397],
    name: "Praia 2",
    address: "Rua 2",
    waterCategory: "Imprópria",
  },
  {
    geocode: [-8.200767, -34.91797],
    name: "Praia 3",
    address: "Rua 3",
    waterCategory: "Imprópria",
  },
];

const categoryColors = {
  Propría: "#15880d",
  "Muito Boa": "#6fb302",
  Satisfatória: "#C59F1B",
  Imprópria: "#ED1010",
};

const cities = [
  {
    top: 130,
    left: 165,
    cityName: "Itamaracá",
    beaches: [
      {
        address: "em frente à Rua Santina de Barros",
        name: "Praia de Jaguaribe",
        category: "Impropría",
      },
      {
        address: "em frente à Igreja do Pilar",
        name: "Praia de Pilar",
        category: "Impropría",
      },
      {
        address: "em frente ao Forte Orange",
        name: "Praia do Forte",
        category: "Impropría",
      },
    ],
  },
  {
    top: 185,
    left: 185,
    cityName: "Paulista",
    beaches: [
      {
        name: "Praia de Maria Farinha",
        address: "em frente ao Cabanga Iate Clube",
        category: "Imprópria",
      },
      {
        name: "Praia do Janga",
        address:
          "em frente à Rua Cláudio S. Bastos Nº 190 (Cond. Roberto Barbosa)",
        category: "Imprópria",
      },
      {
        name: "Praia do Janga",
        address: "em frente à Rua Betânia",
        category: "Imprópria",
      },
    ],
  },
  {
    top: 270,
    left: 175,
    cityName: "Olinda",
    beaches: [
      {
        name: "Praia de Rio Doce",
        address: "em frente à Rua Paulo N. Queiroz, próximo à foz do Rio Doce",
        category: "Imprópria",
      },
      {
        name: "Praia de Bairro Novo",
        address:
          "em frente à Av. Ministro Marcos Freire Nº 2039 (Quartel da PE)",
        category: "Imprópria",
      },
      {
        name: "Praia do Carmo",
        address: "em frente à Praça João Pessoa, por trás dos CORREIOS",
        category: "Imprópria",
      },
      {
        name: "Praia dos Milagres",
        address: "em frente à Praça dos Milagres",
        category: "Própria",
      },
    ],
  },
  {
    top: 330,
    left: 170,
    cityName: "Recife",
    beaches: [
      {
        name: "Praia do Pina",
        address:
          "em frente à Rua Com. Morais com Eng. Antônio de Góes (Cassino Americano)",
        category: "Própria",
      },
      {
        name: "Praia de Boa Viagem",
        address:
          "em frente à Avenida Boa Viagem Nº 2840 - Posto 8 (Padaria Boa Viagem)",
        category: "Propría",
      },
      {
        name: "Praia de Boa Viagem",
        address: "em frente à Avenida Boa Viagem Nº 6958 - Posto 15",
        category: "Própria",
      },
    ],
  },
  {
    top: 420,
    left: 175,
    cityName: "Jaboatão dos Guararapes",
    beaches: [
      {
        name: "Praia de Piedade",
        address:
          "em frente à Avenida Beira Mar Nº 606 (Hospital da Aeronáutica)",
        category: "Imprópria",
      },
      {
        name: "Praia de Candeias",
        address:
          "em frente à Av. Bernardo V. de Melo Nº 5422 (Conj. Residencial Candeias II)",
        category: "Propría",
      },
      {
        name: "Praia de Candeias",
        address:
          "em frente à Av. Bernardo V. de Melo Nº 6476 - Restaurante Candelária",
        category: "Propría",
      },
      {
        name: "Praia de Barra de Jangada",
        address: "em frente ao Nº 10800 (antiga Marina dos Mares)",
        category: "Propría",
      },
    ],
  },
  {
    top: 485,
    left: 165,
    cityName: "Cabo de Santo Agostinho",
    beaches: [
      {
        name: "Praia de Enseada dos Corais",
        address: "em frente ao Canal do Boto",
        category: "Propría",
      },
      {
        name: "Praia de Gaibu",
        address: "em frente à Avenida Laura Cavalcanti (Centro de Turismo)",
        category: "Propría",
      },
    ],
  },
  {
    top: 560,
    left: 160,
    cityName: "Ipojuca",
    beaches: [
      {
        name: "Praia de Porto de Galinhas",
        address: "em frente à R. Esperança, Escola Manuel L. C. Uchoa",
        category: "Propría",
      },
      {
        name: "Praia de Ponta de Serrambi",
        address: "no Pontal - Quadra 01-01, Lote 01-01",
        category: "Imprópria",
      },
    ],
  },
  {
    top: 630,
    left: 145,
    cityName: "Tamandaré",
    beaches: [
      {
        name: "Praia dos Carneiros",
        address: "em frente ao Condomínio Pontal dos Carneiros",
        category: "Própria",
      },
      {
        name: "Praia de Tamandaré",
        address: "em frente ao Hotel Marinas de Tamandaré",
        category: "Imprópria",
      },
      {
        name: "Praia de Tamandaré",
        address: "em frente à Rua Nilo Gouveia Filho, em frente à estátua",
        category: "Imprópria",
      },
    ],
  },
  {
    top: 690,
    left: 150,
    cityName: "São José da C. Grande",
    beaches: [
      {
        name: "Praia de São José da C. Grande",
        address: "em frente a R. da Matriz esquina c/ R. João Francisco Melo",
        category: "Própria",
      },
    ],
  },
];

export default function MapPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [city, setCity] = useState(null);

  function onMarkerClick(city) {
    setIsModalOpen(true);
    setCity(city);
  }

  function closeModal() {
    setIsModalOpen(false);
    setCity(null);
  }

  return (
    // <MapContainer
    //   center={[-8.0500767, -34.92497]}
    //   zoom={10}
    //   style={{ zIndex: 0, width: "100%" }}
    // >
    //   {/* OPEN STREEN MAPS TILES */}
    //   <TileLayer
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   {/* WATERCOLOR CUSTOM TILES */}
    //   {/* <TileLayer
    //     attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
    //   /> */}
    //   {/* GOOGLE MAPS TILES */}
    //   {/* <TileLayer
    //     attribution="Google Maps"
    //     // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
    //     // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
    //     url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
    //     maxZoom={20}
    //     subdomains={["mt0", "mt1", "mt2", "mt3"]}
    //   /> */}

    //   <MarkerClusterGroup
    //     chunkedLoading
    //     iconCreateFunction={createClusterCustomIcon}
    //   >
    //     {/* Mapping through the markers */}
    //     {markers.map((marker) => (
    //       <Marker
    //         key={marker.geocode}
    //         position={marker.geocode}
    //         icon={customIcon}
    //       >
    //         <Popup>
    //           <p>{marker.name}</p>
    //           <p>{marker.address}</p>
    //           <p>{marker.waterCategory}</p>
    //         </Popup>
    //       </Marker>
    //     ))}

    //     {/* Hard coded markers */}
    //     {/* <Marker position={[51.505, -0.09]} icon={customIcon}>
    //       <Popup>This is popup 1</Popup>
    //     </Marker>
    //     <Marker position={[51.504, -0.1]} icon={customIcon}>
    //       <Popup>This is popup 2</Popup>
    //     </Marker>
    //     <Marker position={[51.5, -0.09]} icon={customIcon}>
    //       <Popup>This is popup 3</Popup>
    //     </Marker>
    //    */}
    //   </MarkerClusterGroup>
    // </MapContainer>
    <>
      <div className="map-container">
        <img src={BeachSvg} alt="" />
        <img
          src={Title}
          style={{
            position: "absolute",
            top: 8,
            left: 0,
            right: 0,
            margin: "0 auto",
          }}
          alt=""
        />
        {cities.map((city) => (
          <Marker
            top={city.top}
            left={city.left}
            cityName={city.cityName}
            key={city.cityName}
            city={city}
            handleClick={onMarkerClick}
          />
        ))}
      </div>
      {isModalOpen && (
        <Modal
          title={city && city.cityName}
          open={isModalOpen}
          onOk={closeModal}
          okText={"Fechar"}
          cancelButtonProps={{ style: { display: "none" } }}
          closable={false}
        >
          <h4>Praias</h4>
          <ul>
            {city.beaches.map((beach, index) => (
              <li key={index}>
                <p>
                  {beach.name}, {beach.address} -{" "}
                  <span
                    style={{
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      color: categoryColors[beach.category],
                    }}
                  >
                    {beach.category}
                  </span>
                </p>
              </li>
            ))}
          </ul>
          <p style={{ margin: 0 }}>Fonte: CPRH</p>
          <p style={{ margin: 0 }}>
            Dados referentes a: 10/11/2023 a 16/11/2023
          </p>
        </Modal>
      )}
    </>
  );
}
