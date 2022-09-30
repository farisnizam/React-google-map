import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "./Map";
import Marker from "./Marker";

import "./App.css";

function App() {
  const center = { lat: 4.105549469511608, lng: 102.68491495171062 }; //4.105549469511608, 102.68491495171062
  const zoom = 7.5;
  const positions = [
    {
      lat: 3.0736347552458456,
      lng: 101.6721425735755,
      title: "Waltz Residences",
      infoWindowContent: "ESTSWETSWETSET",
    }, // 3.0736347552458456, 101.6721425735755 : Waltz Residences
    {
      lat: 4.6437382006199694,
      lng: 101.15661129869424,
      title: "Lost World of Tambun",
      infoWindowContent: "Haluuuuuuuu",
    }, //4.6437382006199694, 101.15661129869424: Lost World of Tambun
  ];

  // const titles = [{ title: "Test 1" }, { title: "Test 2" }];
  return (
    <Wrapper apiKey={"AIzaSyBbPkG0hX9GDe3aAB5LxaQkPnuQ7KGDViI"}>
      <Map center={center} zoom={zoom}>
        {positions.map((position, i) => (
          <Marker
            position={position}
            title={position.title}
            contenttt={position.infoWindowContent}
          />
        ))}
      </Map>
    </Wrapper>
  );
}

export default App;
