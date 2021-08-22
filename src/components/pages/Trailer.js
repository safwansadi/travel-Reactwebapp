import React from "react";
import "../../App.css";

export default function Trailer() {
  return (
    <>
      {" "}
      <video src="/videos/trailer.mp4" autoPlay loop muted />
      <h1 className="trailer">Trailer</h1>;
    </>
  );
}
