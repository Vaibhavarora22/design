import React from 'react'
import '../styles/home.css';
import img1 from "../Assets/lake.jpg";
import img2 from "../Assets/lands-endslide__800x600.jpg"

const Caras = () => {
  return (
    <>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 brdr" src={img1} alt="First slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First Slide</h5>
                        <p>first slide lake</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 brdr" src={img2} alt="Second slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 brdr" src="https://st4.depositphotos.com/1741969/29457/i/450/depositphotos_294571810-stock-photo-blackground-of-abstract-glitter-lights.jpg" alt="Third slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>

    </>
  )
}

export default Caras