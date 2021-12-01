import React, { useState } from "react";
//CSS
import "./gallery.css";
//Components
import NavBar from "../navbar/navbar";
import Slider from "../slider/slider";
import Footer from "../footer/footer";
//Material-UI
import Container from "@mui/material/Container";
//Images
import Image1 from "../galleryImages/image1.jpeg";
import Image2 from "../galleryImages/image2.jpeg";
import Image3 from "../galleryImages/image3.jpeg";
import Image4 from "../galleryImages/image4.jpeg";
import Image5 from "../galleryImages/image5.jpeg";
import Image6 from "../galleryImages/image6.jpeg";
import Image7 from "../galleryImages/image7.jpeg";
import Image8 from "../galleryImages/image8.jpeg";
import Image9 from "../galleryImages/image9.jpeg";
import Image10 from "../galleryImages/image10.jpeg";
import Image11 from "../galleryImages/image11.jpeg";
import Image12 from "../galleryImages/image12.jpeg";
import Image13 from "../galleryImages/image13.jpeg";
import Image14 from "../galleryImages/image14.jpeg";
import Image15 from "../galleryImages/image15.jpeg";
import Image16 from "../galleryImages/image16.jpeg";
import Image17 from "../galleryImages/image17.jpeg";
import Image18 from "../galleryImages/image18.jpeg";
import Image19 from "../galleryImages/image19.jpeg";
import Image20 from "../galleryImages/image20.jpeg";
import Image21 from "../galleryImages/image21.jpeg";
import Image22 from "../galleryImages/image22.jpeg";
import Image23 from "../galleryImages/image23.jpeg";
import Image24 from "../galleryImages/image24.jpeg";
import Image25 from "../galleryImages/image25.jpeg";
import Image26 from "../galleryImages/image26.jpeg";
import Image27 from "../galleryImages/image27.jpeg";
import Image28 from "../galleryImages/image28.jpeg";
import Image29 from "../galleryImages/image29.jpeg";
import Image30 from "../galleryImages/image30.jpeg";
import Image31 from "../galleryImages/image31.jpeg";
import Image32 from "../galleryImages/image32.jpeg";
import Image33 from "../galleryImages/image33.jpeg";
import Image34 from "../galleryImages/image34.jpeg";
import Image35 from "../galleryImages/image35.jpeg";
import Image36 from "../galleryImages/image36.jpeg";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Image1,
    },
    {
      id: 2,
      imgSrc: Image2,
    },
    {
      id: 3,
      imgSrc: Image3,
    },
    {
      id: 4,
      imgSrc: Image4,
    },
    {
      id: 5,
      imgSrc: Image5,
    },
    {
      id: 6,
      imgSrc: Image6,
    },
    {
      id: 7,
      imgSrc: Image7,
    },
    {
      id: 8,
      imgSrc: Image8,
    },
    {
      id: 9,
      imgSrc: Image9,
    },
    {
      id: 10,
      imgSrc: Image10,
    },
    {
      id: 11,
      imgSrc: Image11,
    },
    {
      id: 12,
      imgSrc: Image12,
    },
    {
      id: 13,
      imgSrc: Image13,
    },
    {
      id: 14,
      imgSrc: Image14,
    },
    {
      id: 15,
      imgSrc: Image15,
    },
    {
      id: 16,
      imgSrc: Image16,
    },
    {
      id: 17,
      imgSrc: Image17,
    },
    {
      id: 18,
      imgSrc: Image18,
    },
    {
      id: 19,
      imgSrc: Image19,
    },
    {
      id: 20,
      imgSrc: Image20,
    },
    {
      id: 18,
      imgSrc: Image18,
    },
    {
      id: 19,
      imgSrc: Image19,
    },
    {
      id: 20,
      imgSrc: Image20,
    },
    {
      id: 21,
      imgSrc: Image21,
    },
    {
      id: 22,
      imgSrc: Image22,
    },
    {
      id: 23,
      imgSrc: Image23,
    },
    {
      id: 24,
      imgSrc: Image24,
    },
    {
      id: 25,
      imgSrc: Image25,
    },
    {
      id: 26,
      imgSrc: Image26,
    },
    {
      id: 27,
      imgSrc: Image27,
    },
    {
      id: 28,
      imgSrc: Image28,
    },
    {
      id: 29,
      imgSrc: Image29,
    },
    {
      id: 30,
      imgSrc: Image30,
    },
    {
      id: 31,
      imgSrc: Image31,
    },
    {
      id: 32,
      imgSrc: Image32,
    },
    {
      id: 33,
      imgSrc: Image33,
    },
    {
      id: 34,
      imgSrc: Image34,
    },
    {
      id: 35,
      imgSrc: Image35,
    },
    {
      id: 36,
      imgSrc: Image36,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <div>
      <NavBar />
      <Slider />
      <Container maxWidth='lg'>
        <h1 className='galleryTitle'>Gallery</h1>
      </Container>

      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt={tempimgSrc} />
      </div>

      <div className='gallery'>
        {data.map((item, index) => {
          return (
            <div
              className='pics'
              key={index}
              onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} alt={item.id} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
