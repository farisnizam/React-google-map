import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./Map";
import Marker from "./Marker";

import "./App.css";

function App() {
  // const center = { lat: -25.344, lng: 131.031 };
  const center = { lat: 5, lng: 101 };
  const zoom = 7;
  const positions = [
    {
      lat: 5.128294931317309,
      lng: 101.92369832330463,
    },
    {
      lat: 6.035826345274785,
      lng: 100.57677442812441,
    },
    center,
  ];
  return (
    <Wrapper apiKey={"AIzaSyBbPkG0hX9GDe3aAB5LxaQkPnuQ7KGDViI"}>
      <Map center={center} zoom={zoom}>
        {positions.map((position) => (
          <Marker position={position} />
        ))}
      </Map>
    </Wrapper>
  );
}

export default App;
