import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Подключаем стили AOS
import './Gallery.css'; // Подключаем стили для галереи

const galleryImages = [
  { id: 1, url: `${process.env.PUBLIC_URL}/images/image1.jpg`, alt: 'Nut Cookies with Caramel Filling' },
  { id: 2, url: `${process.env.PUBLIC_URL}/images/image3.jpg`, alt: 'Nut Cookies with Chocolate Filling' },
  { id: 3, url: `${process.env.PUBLIC_URL}/images/image4.jpg`, alt: 'Nut Cookies' },
  { id: 4, url: `${process.env.PUBLIC_URL}/images/image5.jpg`, alt: 'Nut Cookies' },
  { id: 5, url: `${process.env.PUBLIC_URL}/images/image6.jpg`, alt: 'Nut Cookies' },
  { id: 6, url: `${process.env.PUBLIC_URL}/images/image7.jpg`, alt: 'Berries in White Chocolate' },
  { id: 7, url: `${process.env.PUBLIC_URL}/images/image8.jpg`, alt: 'Berries in White Chocolate' },
  { id: 8, url: `${process.env.PUBLIC_URL}/images/image9.jpg`, alt: 'Berries in White Chocolate' },
  { id: 9, url: `${process.env.PUBLIC_URL}/images/image10.jpg`, alt: 'Berries in White Chocolate' },
  { id: 10, url: `${process.env.PUBLIC_URL}/images/image18.jpg`, alt: 'Dubai chocolate' }
];

function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return ( 
    <div className="container">
      <h1 data-aos="fade-up">Gallery</h1>
      <Carousel>
        {galleryImages.map(image => (
          <Carousel.Item key={image.id} data-aos="fade-up" data-aos-delay="200">
            <img className="gallery-img" 
                 src={image.url} 
                 alt={image.alt} 
            /> 
          </Carousel.Item> 
        ))}
      </Carousel> 
    </div> 
  ); 
}

export default Gallery;
