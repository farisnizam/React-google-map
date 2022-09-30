import { useEffect, useState } from "react";

function Marker({
  position,
  map,
  title,
  contenttt,
}: {
  position: google.maps.LatLngLiteral;
  map?: google.maps.Map;
  title: any;
  contenttt: any;
}) {
  console.log({ position });

  const [marker, setMarker] = useState<google.maps.Marker | null>(null);

  const infowindow = new google.maps.InfoWindow({
    content: contenttt,
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });

  useEffect(() => {
    setMarker(new google.maps.Marker({}));
  }, []);

  if (marker) {
    marker.setMap(map);
    marker.setPosition(position);
    marker.setTitle(title);
  }
  return null;
}

export default Marker;
