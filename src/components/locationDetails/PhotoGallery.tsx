import * as React from "react";

const PhotoGallery = (props: any) => {
  const { photoGallery, height, width } = props;
  const photos = photoGallery.map((element: any) => (
    <div>
      <img
        height={height}
        src={element.url} // use normal <img> attributes as props
        width={width}
        className="image"
      ></img>
    </div>
  ));

  return (
    <>
      <div className="space-y-5">
        {/* <div className="text-xl font-semibold ">Photo Gallery</div> */}
        <h2
          className="text-xl font-semibold mb-8"
          style={{ marginLeft: "50%", color: "black" }}
        >
          Photo Gallery
        </h2>

        <div className="grid space-x-5 md:grid-cols-2 lg:grid-cols-3">
          {photos}
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
