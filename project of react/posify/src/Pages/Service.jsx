import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Header2 from '../common/Header2'

function Service() {
  return (
    <div>
        <Header2 title="Service" data="Service"/>
        <div>
  {/* Service Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="text-center">
        <div className="title wow fadeInUp" data-wow-delay="0.1s">
          <div className="title-center">
            <h5>Services</h5>
            <h1>How We Help You</h1>
          </div>
        </div>
      </div>
      <div className="service-item service-item-left">
        <div className="row g-0 align-items-center">
          <div className="col-md-5">
            <div className="service-img p-5 wow fadeInRight" data-wow-delay="0.2s">
              <img className="img-fluid rounded-circle" src="img/service-1.jpg" alt />
            </div>
          </div>
          <div className="col-md-7">
            <div className="service-text px-5 px-md-0 py-md-5 wow fadeInRight" data-wow-delay="0.5s">
              <h3 className="text-uppercase">Fashion Shows</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat
                fermentum urna, sed gravida enim eleifend vitae. Ut rhoncus non metus at convallis.
                Maecenas pharetra placerat mauris. Phasellus quis egestas dui. Nullam ornare consectetur
                rhoncus. Praesent elit mauris, feugiat quis convallis et, egestas a tellus.</p>
              <a className="btn btn-outline-primary border-2 px-4" href="#!">Read More <i className="fa fa-arrow-right ms-1" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="service-item service-item-right">
        <div className="row g-0 align-items-center">
          <div className="col-md-5 order-md-1 text-md-end">
            <div className="service-img p-5 wow fadeInLeft" data-wow-delay="0.2s">
              <img className="img-fluid rounded-circle" src="img/service-2.jpg" alt />
            </div>
          </div>
          <div className="col-md-7">
            <div className="service-text px-5 px-md-0 py-md-5 text-md-end wow fadeInLeft" data-wow-delay="0.5s">
              <h3 className="text-uppercase">Corporate Events</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat
                fermentum urna, sed gravida enim eleifend vitae. Ut rhoncus non metus at convallis.
                Maecenas pharetra placerat mauris. Phasellus quis egestas dui. Nullam ornare consectetur
                rhoncus. Praesent elit mauris, feugiat quis convallis et, egestas a tellus.</p>
              <a className="btn btn-outline-primary border-2 px-4" href="#!">Read More <i className="fa fa-arrow-right ms-1" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="service-item service-item-left">
        <div className="row g-0 align-items-center">
          <div className="col-md-5">
            <div className="service-img p-5 wow fadeInRight" data-wow-delay="0.2s">
              <img className="img-fluid rounded-circle" src="img/service-3.jpg" alt />
            </div>
          </div>
          <div className="col-md-7">
            <div className="service-text px-5 px-md-0 py-md-5 wow fadeInRight" data-wow-delay="0.5s">
              <h3 className="text-uppercase">Commercial Photo Shots</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat
                fermentum urna, sed gravida enim eleifend vitae. Ut rhoncus non metus at convallis.
                Maecenas pharetra placerat mauris. Phasellus quis egestas dui. Nullam ornare consectetur
                rhoncus. Praesent elit mauris, feugiat quis convallis et, egestas a tellus.</p>
              <a className="btn btn-outline-primary border-2 px-4" href="#!">Read More <i className="fa fa-arrow-right ms-1" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="service-item service-item-right">
        <div className="row g-0 align-items-center">
          <div className="col-md-5 order-md-1 text-md-end">
            <div className="service-img p-5 wow fadeInLeft" data-wow-delay="0.2s">
              <img className="img-fluid rounded-circle" src="img/service-4.jpg" alt />
            </div>
          </div>
          <div className="col-md-7">
            <div className="service-text px-5 px-md-0 py-md-5 text-md-end wow fadeInLeft" data-wow-delay="0.5s">
              <h3 className="text-uppercase">Professional Modeling</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat
                fermentum urna, sed gravida enim eleifend vitae. Ut rhoncus non metus at convallis.
                Maecenas pharetra placerat mauris. Phasellus quis egestas dui. Nullam ornare consectetur
                rhoncus. Praesent elit mauris, feugiat quis convallis et, egestas a tellus.</p>
              <a className="btn btn-outline-primary border-2 px-4" href="#!">Read More <i className="fa fa-arrow-right ms-1" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Testimonial Start */}
  <div className="container-fluid py-5 bg-secondary">
    <div className="container py-5">
      <div className="text-center">
        <div className="title wow fadeInUp" data-wow-delay="0.1s">
          <div className="title-center">
            <h5>Testimonial</h5>
            <h1>Our Clients Say</h1>
          </div>
        </div>
      </div>
      <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.3s">
        <div className="testimonial-item text-center" data-dot="<img class='img-fluid' src='img/testimonial-1.jpg' alt=''>">
          <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed
            sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum
            justo sea clita.</p>
          <h5 className="text-uppercase">Joanne Irwin</h5>
          <span className="text-primary">Profession</span>
        </div>
        <div className="testimonial-item text-center" data-dot="<img class='img-fluid' src='img/testimonial-2.jpg' alt=''>">
          <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed
            sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum
            justo sea clita.</p>
          <h5 className="text-uppercase">Lana Anderson</h5>
          <span className="text-primary">Profession</span>
        </div>
        <div className="testimonial-item text-center" data-dot="<img class='img-fluid' src='img/testimonial-3.jpg' alt=''>">
          <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed
            sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum
            justo sea clita.</p>
          <h5 className="text-uppercase">Pamela Torney</h5>
          <span className="text-primary">Profession</span>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
</div>

<Footer/>

    </div>
  )
}

export default Service