import GalleryItem from "./GalleryItem";

function Gallery() {
  const galleryLayout = {
    "padding-left": "30px",
    display: "flex",
    "flex-wrap": "wrap",
  };

  return <GalleryItem item={item} key={index} />;
  return <div style={galleryLayout}>{display}</div>;
}

export default Gallery;
