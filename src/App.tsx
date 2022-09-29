import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./Map";
import Marker from "./Marker";

import "./App.css";

function App() {
  const center = { lat: -25.344, lng: 131.031 };
  const zoom = 4;
  const positions = [
    { lat: -25.34, lng: 131.01 },
    center,
    { lat: -25, lng: 131 },
  ];
  return (
    <Wrapper apiKey={""}>
      <Map center={center} zoom={zoom}>
        {positions.map((position) => (
          <Marker position={position} />
        ))}
      </Map>
    </Wrapper>
  );
}

export default App;
