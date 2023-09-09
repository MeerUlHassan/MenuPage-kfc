import React from 'react'

const Slider = () => {
  return (
    <>
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://source.unsplash.com/1100x400/?burger, zinger" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>Welcome to Hunger Zila</h2>
                    <p >Delicious Delivered Daily!</p>
                    <button className="btn btn-danger">Burgers</button>
                    <button className="btn btn-primary">Pizza's</button>
                    <button className="btn btn-success">Shakes</button>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/1100x400/?fastfood, pizza" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>Taste the Joy of Fast Food Perfection!</h2>
                    <p>Delicious Delivered Daily!</p>
                    <button className="btn btn-danger">Burgers</button>
                    <button className="btn btn-primary">Pizza's</button>
                    <button className="btn btn-success">Shakes</button>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/1100x400/?shakes" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>Best Taste Ever!</h2>
                    <p>Delicious Delivered Daily!</p>
                    <button className="btn btn-danger">Burgers</button>
                    <button className="btn btn-primary">Pizza's</button>
                    <button className="btn btn-success">Shakes</button>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </>
  )
}

export default Slider
