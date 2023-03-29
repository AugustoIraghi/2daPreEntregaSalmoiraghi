import Carousel from 'react-bootstrap/Carousel';
import styles from "./home.module.scss"
import React from 'react'

function Home() {
    const intervalo = 5000
  return (
    <div className={styles.container}>
        <Carousel>
          <Carousel.Item interval={intervalo}>
            <img
              className="d-block w-100"
              src="https://www.monederosmart.com/wp-content/uploads/2020/03/balkouras-nicos-ncOQxZe8Krw-unsplash-scaled-e1583162578291.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={intervalo}>
            <img
              className="d-block w-100"
              src="https://parabuenosaires.com/wp-content/uploads/2022/09/comprar-pc-gamer.jpg"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={intervalo}>
            <img
              className="d-block w-100"
              src="https://culturageek.com.ar/wp-content/uploads/2020/12/Culturageek.com_.ar-Corsair-05.jpg"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={intervalo}>
            <img
              className="d-block w-100"
              src="https://cybertown.mx/wp-content/uploads/2021/08/Reparacion-de-PC-Gamer-reparacion-de-pc-gamer-expertos-en-Cybertown_3.jpg"
              alt="Fourth slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
      );
    }


export default Home