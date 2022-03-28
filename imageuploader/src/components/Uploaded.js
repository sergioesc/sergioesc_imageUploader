import React from "react";

export default function Uploaded() {
  return (
    <div className="upload-container">
      <div className="upload-inner">
        <div className="upload-status"> :)</div>
        <p>Uploaded Successfully!</p>
        <div className="upload-image">
          <img
            src="http://pm1.narvii.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg"
            alt="imagen"
          />
        </div>
        <div className="upload-link">
          <p>linkimage</p>
          <button>COPY LINK</button>
        </div>
      </div>
    </div>
  );
}
