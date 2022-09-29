import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

function Map({
  center,
  zoom,
  children,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>();
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const style = { height: "100vh" };
  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current!, {}));
  }, []);

  if (map) {
    map.setCenter(center);
    map.setZoom(zoom);
  }

  return (
    <div ref={ref} style={style} id="map">
      {React.Children.map(children, (child: ReactElement) =>
        React.cloneElement(child, { map })
      )}
    </div>
  );
}

export default Map;
