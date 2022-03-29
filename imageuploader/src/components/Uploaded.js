import React from "react";
import { useState } from "react";

export default function Uploaded(props) {
  const [isCopied, setIsCopied] = useState(false);
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(props.linkImage)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="upload-container">
      <div className="upload-inner">
        <div className="upload-status"> :)</div>
        <p>Uploaded Successfully!</p>
        <div className="upload-image">
          <img src={props.linkImage} alt="imagen" />
        </div>
        <div className="upload-link">
          <input
            type="text"
            value={props.linkImage}
            readOnly
          ></input>
          <button onClick={handleCopyClick}>
            <span>{isCopied ? "COPIED!" : "COPY"} </span>
          </button>
        </div>
      </div>
    </div>
  );
}
