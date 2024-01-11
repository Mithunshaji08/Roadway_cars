import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/bently.png" className="d-block w-100" alt="Bentley" />
          </div>
          <div className="carousel-item">
            <img src="/bmw.png" className="d-block w-100" alt="BMW" />
          </div>
          <div className="carousel-item">
            <img src="/lAND ROVER.png" className="d-block w-100" alt="Land Rover" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </section>
      <section className="black-banner">
        <h2 className="text-center mt-4 mb-4 text-white">Our Cars</h2>

      <div className="card-container row">
        {/* Card 1 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/mini cooper.jpg" className="card-img-top" alt="Car 1" />
            <div className="card-body">
              <h5 className="card-title">Mini Cooper</h5>
              <p className="card-text">Drive in Style. Mini, Mighty, Unforgettable.</p>
              <Link to={'/mini-cooper'} className="btn btn-primary">Lent Now</Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/w123.jpg" className="card-img-top" alt="Car 2" />
            <div className="card-body">
              <h5 className="card-title">Mercedes-Benz W123</h5>
              <p className="card-text">Classic Elegance, Timeless Performance.</p>
              <a href="#" className="btn btn-primary">Lent Now</a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/audi.jpg" className="card-img-top" alt="Car 3" />
            <div className="card-body">
              <h5 className="card-title">Audi Q3</h5>
              <p className="card-text">Sophistication in Every Journey</p>
              <a href="#" className="btn btn-primary">Lent Now</a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/panamera.jpg" className="card-img-top" alt="Car 4" />
            <div className="card-body">
              <h5 className="card-title">Porsche Panamera</h5>
              <p className="card-text">Unleash Performance, Embrace Luxury.</p>
              <a href="#" className="btn btn-primary">Lent Now</a>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/fj cruiser.jpg" className="card-img-top" alt="Car 5" />
            <div className="card-body">
              <h5 className="card-title">Toyota FJ Cruiser</h5>
              <p className="card-text">Conquer the Road with Unrivaled Adventure.</p>
              <a href="#" className="btn btn-primary">Lent Now</a>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/defender.jpg" className="card-img-top" alt="Car 6" />
            <div className="card-body">
              <h5 className="card-title">Land Rover Sport</h5>
              <p className="card-text">Elegance, Performance, Adventure.</p>
              <a href="#" className="btn btn-primary">Lent Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="/bmw1.jpg" className="card-img-top" alt="Car 6" />
            <div className="card-body">
              <h5 className="card-title">BMW M3</h5>
              <p className="card-text">Elegance, Performance, Adventure.</p>
              <a href="#" className="btn btn-primary">Lent Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="/jaguar.jpg" className="card-img-top" alt="Car 6" />
            <div className="card-body">
              <h5 className="card-title">Jaguar Sport</h5>
              <p className="card-text">Elegance, Performance, Adventure.</p>
              <a href="#" className="btn btn-primary">Lent Now</a>
            </div>
          </div>
        </div>
      </div>
      </section>

    </div>
  );
}

export default Home;