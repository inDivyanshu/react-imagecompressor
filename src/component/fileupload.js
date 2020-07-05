import React from "react";
import imageCompression from "browser-image-compression";
class Home extends React.Component {
  fileUpload(e) {
    console.log(e);
    let files = e.target.files;
    let file = files[0];
    console.log(file)
    console.log(`originalFile size ${file.size / 1024 / 1024} MB`);
    const options = {
      maxSizeMB: 0.5, // (default: Number.POSITIVE_INFINITY)
      maxWidthOrHeight: 1920, // compressedFile will scale down by ratio to a point that width or height is smaller than maxWidthOrHeight (default: undefined)
      onProgress: (i) => {
        console.log(i);
      },
      // optional, a function takes one progress argument (percentage from 0 to 100)
      //   fileType: string            // optional, fileType override
    };
    imageCompression(file, options)
    .then(function (compressedFile) {
        imageCompression.getDataUrlFromFile(compressedFile).then(res=>{
            console.log(res)
        })
      console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);})
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.fileUpload}></input>
      </div>
    );
  }
}

export default Home;
