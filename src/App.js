import React from "react";

class App extends React.Component {
  Post = e => {
    e.preventDefault();
    const file = document.getElementById("inputGroupFile01").files;
    const formData = new FormData();

    formData.append("img", file[0]);

    fetch("http://localhost:5000/", {
      method: "POST",
      body: formData
    }).then(r => {
      console.log(r);
    });

    document
      .getElementById("img")
      .setAttribute("src", `http://localhost:5000/${file[0].name}`);
    console.log(file[0]);
  };

  render() {
    return (
      <div className="container">
        <div ><h1 className='header'>Image Uploader</h1>
          <h4 className="header">
            A simple app to upload and retrieve images from a
            database
          </h4>
          <hr className="my-4" /></div>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              Choose file
            </label>
          </div>
        </div>
        <button type="button" className="btn btn-primary button" onClick={this.Post}>
          Upload
        </button>
        <img id='img'
          className="center"
        ></img>


       


      </div>
    );
  }
}

export default App;