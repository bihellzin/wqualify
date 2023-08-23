import "./styles.css";
import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import BeachSvg from "../../assets/Rectangle 8.svg";

import { Icon, divIcon, point } from "leaflet";
import Placeholder from "../../assets/placeholder.png";
import Title from "../../assets/image 14.png";
import Marker from "../../components/Marker/Marker";
// create custom icon
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: Placeholder,
  iconSize: [38, 38], // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

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

const cities = [
  {
    top: 130,
    left: 165,
    cityName: "Itamaracá",
  },
  {
    top: 185,
    left: 185,
    cityName: "Paulista",
  },
  {
    top: 270,
    left: 175,
    cityName: "Olinda",
  },
  {
    top: 330,
    left: 170,
    cityName: "Recife",
  },
  {
    top: 420,
    left: 175,
    cityName: "Jaboatão dos Guararapes",
  },
  {
    top: 485,
    left: 165,
    cityName: "Cabo de Santo Agostinho",
  },
  {
    top: 560,
    left: 160,
    cityName: "Ipojuca",
  },
  {
    top: 630,
    left: 145,
    cityName: "Tamandaré",
  },
  {
    top: 690,
    left: 150,
    cityName: "São José da C. Grande",
  },
];

export default function MapPage() {
  console.log("loading");
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
        />
      ))}
    </div>
  );
}
