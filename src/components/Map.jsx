import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";
import map from "../assests/features.json";
const MapChart = () => {
  return (
    <ComposableMap style={{ width: "120%", height: "100%" }}>
      <Geographies
        geography={map}
        fill="#2c065d"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[107.1362, 10.4114]}
        dx={100}
        dy={-50}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          x="0"
          y="-4"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="white"
        >
          {"VungTau"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
