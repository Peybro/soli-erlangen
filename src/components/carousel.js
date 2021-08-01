import * as React from "react";

export default function Carousel() {
  let images = [
    {
      src: "https://soli-erlangen.de/assets/slideshow/radball_generationen.jpg",
      alt: "",
      title: "Radball von Jung bis alt",
      desc: "",
    },
    {
      src: "https://soli-erlangen.de/assets/slideshow/radball_moritz-und-tobi.jpg",
      alt: "",
      title: "Moritz und Tobi",
      desc: "",
    },
    {
      src: "https://soli-erlangen.de/assets/slideshow/radball_moritz-und-tobi-2.jpg",
      alt: "",
      title: "Moritz und Tobi",
      desc: "",
    },
  ];

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
        ></button>
      </div> */}
      <div className="carousel-inner">
        {images.map((image,i)=>{
          return (
            <div className={`carousel-item ${i===0?'active':''}`}>
            <img src={image.src} className="d-block w-100" alt={image.alt} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{image.title}</h5>
              <p>{image.desc}</p>
            </div>
          </div>
          )
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
