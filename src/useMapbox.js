import { useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function useMapbox(
  container = "map",
  center = [37.61192, 55.76199],
  zoom = 10
) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicG9saW5hLXNobmVpZGVyIiwiYSI6ImNsMndmNjN4ejA5Y3gzZWxvcHJmb3BtcncifQ._KqkuvjVQMF72yRQl_hXaA";

  useLayoutEffect(() => {
    new mapboxgl.Map({
      container,
      style: "mapbox://styles/mapbox/dark-v10",
      center,
      zoom
    });
  }, []);
}
