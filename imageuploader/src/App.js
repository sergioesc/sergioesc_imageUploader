import { useReducer, useState } from "react";
import Loading from "./components/Loading.js";
import Uploaded from "./components/Uploaded.js";
import axios from "axios";
import * as Scroll from 'react-scroll'
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, result: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "UPLOAD_REQUEST":
      return { ...state, loadingUpload: true };
    case "UPLOAD_SUCCESS":
      return { ...state, loadingUpload: false };
    case "UPLOAD_FAIL":
      return { ...state, loadingUpload: false, errorUpload: action.payload };
    default:
      return state;
  }
};
function App() {
  const [{ loading, result, error, loadingUpload, errorUpload }, dispatch] =
    useReducer(reducer, {
      loadingUpload: true,
      error: "",
    });
  const [image, setImage] = useState("");
  const [loadingBox, setLoadingBox] = useState();

  const handleScrollTo = () => {
    let scroll = Scroll.animateScroll;
    scroll.scrollTo(1000)
  }
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    try {
      dispatch({ type: "UPLOAD_REQUEST" });
      setLoadingBox(<Loading />);
      const { data } = await axios.post(
        "http://localhost:5000/api/upload",
        bodyFormData
      );
      dispatch({ type: "UPLOAD_SUCCESS" });
      setImage(data.secure_url);
      handleScrollTo()

    } catch (err) {
      dispatch({ type: "UPLOAD_FAIL", payload: console.log(err) });
    }
  };
  return (
    <div className="App">
      <div className="uploader-container">
        <h2>Upload your image</h2>
        <small id="small-text">File should be Jpeg, Png...</small>

        <form className="form-upload">
          <label>Drag & Drop your image here</label>
          <input
            className="input-image"
            type="file"
            accept="image/png, image/jpeg"
            onChange={uploadFileHandler}
          ></input>
        </form>
      </div>

      {loadingUpload ? (
        <div>{loadingBox}</div>
      ) : errorUpload ? (
        <div> Ocurrió un error </div>
      ) : (
        <Uploaded linkImage={image} />
      )}
    </div>
  );
}

export default App;
