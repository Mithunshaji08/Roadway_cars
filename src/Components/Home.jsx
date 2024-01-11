import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
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
              <a href="#" className="btn btn-primary">Lent Now</a>
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
      
    {/* Testimonials Carousel */}
    <section className="testimonials">
        <h2 className="text-center mt-4 mb-4">What Our Customers Say</h2>

        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Testimonial Set 1 */}
            <div className="carousel-item active">
              <div className="row">
                {/* Testimonial 1 */}
                <div className="col-md-4">
                  <div className="card testimonial-card">
                    <div className="card-body">
                      <p className="card-text">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      </p>
                      <p className="card-text">- John Doe</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="col-md-4">
                  <div className="card testimonial-card">
                    <div className="card-body">
                      <p className="card-text">
                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                      </p>
                      <p className="card-text">- Jane Smith</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="col-md-4">
                  <div className="card testimonial-card">
                    <div className="card-body">
                      <p className="card-text">
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                      </p>
                      <p className="card-text">- Bob Johnson</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Set 2 */}
            <div className="carousel-item">
              <div className="row">
                {/* Testimonial 4 */}
                <div className="col-md-4">
                  <div className="card testimonial-card">
                    <div className="card-body">
                      <p className="card-text">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      </p>
                      <p className="card-text">- Alice Williams</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 5 */}
                <div className="col-md-4">
                  <div className="card testimonial-card">
                    <div className="card-body">
                      <p className="card-text">
                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                      </p>
                      <p className="card-text">- Mark Anderson</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 6 */}
                <div className="col-md-4">
                  <div className="card testimonial-card">
                    <div className="card-body">
                      <p className="card-text">
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                      </p>
                      <p className="card-text">- Emily Davis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add more testimonial sets as needed */}
            {/* ... */}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

    </div>
  );
}

export default Home;
