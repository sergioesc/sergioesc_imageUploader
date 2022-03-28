import Loading from "./components/Loading.js";
import Uploaded from "./components/Uploaded.js";

function App() {
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
          ></input>
        </form>
      </div>
      <Loading />
      <Uploaded />
    </div>
  );
}

export default App;
