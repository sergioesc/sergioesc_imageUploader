import Loading from "./components/Loading.js";

function App() {
  return <div className="App">
    <div className="upload-container">
      <h2>Upload your image</h2>
      <small id="small-text">File should be Jpeg, Png...</small>

      <form className="form-upload">
        <label>Drag & Drop your image here</label>
        <input className="input-image" type="file" accept="image/png, image/jpeg"></input>
      </form>
    </div>
    <Loading />
  </div>;
}

export default App;
