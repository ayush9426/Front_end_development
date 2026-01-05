import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

function Home() {
  return (
    <div>
        <Header />
            <div>
  {/* About Start */}
  <div className="container-fluid bg-secondary">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-7 pb-0 pb-lg-5 py-5">
          <div className="pb-0 pb-lg-5 py-5">
            <div className="title wow fadeInUp" data-wow-delay="0.1s">
              <div className="title-left">
                <h5>History</h5>
                <h1>About Our Agency</h1>
              </div>
            </div>
            <p className="mb-4 wow fadeInUp" data-wow-delay="0.2s">Tempor erat elitr rebum at clita. Diam dolor
              diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet. Stet no et lorem dolor et diam, amet duo
              ut dolore vero eos.</p>
            <ul className="list-group list-group-flush mb-5 wow fadeInUp" data-wow-delay="0.3s">
              <li className="list-group-item bg-dark text-body border-secondary ps-0">
                <i className="fa fa-check-circle text-primary me-1" /> Lorem ipsum dolor sit amet
                consectetur elit.
              </li>
              <li className="list-group-item bg-dark text-body border-secondary ps-0">
                <i className="fa fa-check-circle text-primary me-1" /> Donec vehicula, sem ut tempus
                tempus.
              </li>
              <li className="list-group-item bg-dark text-body border-secondary ps-0">
                <i className="fa fa-check-circle text-primary me-1" /> Morbi mi dapibus, feugiat nisi non
                mollis justo.
              </li>
            </ul>
            <div className="row wow fadeInUp" data-wow-delay="0.4s">
              <div className="col-6">
                <a href="#!" className="btn btn-outline-primary border-2 py-3 w-100">Become A Model</a>
              </div>
              <div className="col-6">
                <a href="#!" className="btn btn-primary py-3 w-100">Schedule Casting</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.5s">
          <img className="img-fluid" src="img/about.png" alt />
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
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
  {/* Banner Start */}
  <div className="container-fluid py-5 bg-secondary">
    <div className="container py-5">
      <div className="row g-0 justify-content-center">
        <div className="col-lg-7 text-center">
          <div className="title mx-5 px-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="title-center">
              <h5>Casting</h5>
              <h1>Want to be a Model?</h1>
            </div>
          </div>
          <p className="fs-5 mb-5 wow fadeInUp" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed erat lectus, venenatis sit amet egestas eget, aliquet a nisl.</p>
          <div className="position-relative wow fadeInUp" data-wow-delay="0.3s">
            <input className="form-control border-0 bg-dark rounded-pill w-100 py-4 ps-4 pe-5" type="text" placeholder="Your email" />
            <button type="button" className="btn btn-primary py-3 px-4 position-absolute top-0 end-0 me-2" style={{marginTop: 7}}>SignUp</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner End */}
  {/* Team Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="text-center">
        <div className="title wow fadeInUp" data-wow-delay="0.1s">
          <div className="title-center">
            <h5>Models</h5>
            <h1>Meet Our Models</h1>
          </div>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item">
            <div className="team-body">
              <div className="team-before">
                <span>Age</span>
                <span>Height</span>
                <span>Weight</span>
                <span>Bust</span>
                <span>Waist</span>
                <span>Hips</span>
              </div>
              <img className="img-fluid" src="img/team-1.jpg" alt />
              <div className="team-after">
                <span>22</span>
                <span>185</span>
                <span>55</span>
                <span>79</span>
                <span>59</span>
                <span>89</span>
              </div>
            </div>
            <a className="team-name" href="#">
              <h5 className="text-uppercase mb-0">Naomy Olsen</h5>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item">
            <div className="team-body">
              <div className="team-before">
                <span>Age</span>
                <span>Height</span>
                <span>Weight</span>
                <span>Bust</span>
                <span>Waist</span>
                <span>Hips</span>
              </div>
              <img className="img-fluid" src="img/team-2.jpg" alt />
              <div className="team-after">
                <span>22</span>
                <span>185</span>
                <span>55</span>
                <span>79</span>
                <span>59</span>
                <span>89</span>
              </div>
            </div>
            <a className="team-name" href="#">
              <h5 className="text-uppercase mb-0">Pamela Torney</h5>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item">
            <div className="team-body">
              <div className="team-before">
                <span>Age</span>
                <span>Height</span>
                <span>Weight</span>
                <span>Bust</span>
                <span>Waist</span>
                <span>Hips</span>
              </div>
              <img className="img-fluid" src="img/team-3.jpg" alt />
              <div className="team-after">
                <span>22</span>
                <span>185</span>
                <span>55</span>
                <span>79</span>
                <span>59</span>
                <span>89</span>
              </div>
            </div>
            <a className="team-name" href="#">
              <h5 className="text-uppercase mb-0">Joanne Irwin</h5>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item">
            <div className="team-body">
              <div className="team-before">
                <span>Age</span>
                <span>Height</span>
                <span>Weight</span>
                <span>Bust</span>
                <span>Waist</span>
                <span>Hips</span>
              </div>
              <img className="img-fluid" src="img/team-4.jpg" alt />
              <div className="team-after">
                <span>22</span>
                <span>185</span>
                <span>55</span>
                <span>79</span>
                <span>59</span>
                <span>89</span>
              </div>
            </div>
            <a className="team-name" href="#">
              <h5 className="text-uppercase mb-0">Gillian Rowe</h5>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item">
            <div className="team-body">
              <div className="team-before">
                <span>Age</span>
                <span>Height</span>
                <span>Weight</span>
                <span>Bust</span>
                <span>Waist</span>
                <span>Hips</span>
              </div>
              <img className="img-fluid" src="img/team-5.jpg" alt />
              <div className="team-after">
                <span>22</span>
                <span>185</span>
                <span>55</span>
                <span>79</span>
                <span>59</span>
                <span>89</span>
              </div>
            </div>
            <a className="team-name" href="#">
              <h5 className="text-uppercase mb-0">Naomy Olsen</h5>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item">
            <div className="team-body">
              <div className="team-before">
                <span>Age</span>
                <span>Height</span>
                <span>Weight</span>
                <span>Bust</span>
                <span>Waist</span>
                <span>Hips</span>
              </div>
              <img className="img-fluid" src="img/team-6.jpg" alt />
              <div className="team-after">
                <span>22</span>
                <span>185</span>
                <span>55</span>
                <span>79</span>
                <span>59</span>
                <span>89</span>
              </div>
            </div>
            <a className="team-name" href="#">
              <h5 className="text-uppercase mb-0">Pamela Torney</h5>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item">
            <div className="team-body">
              <div className="team-before">
                <span>Age</span>
                <span>Height</span>
                <span>Weight</span>
                <span>Bust</span>
                <span>Waist</span>
                <span>Hips</span>
              </div>
              <img className="img-fluid" src="img/team-7.jpg" alt />
              <div className="team-after">
                <span>22</span>
                <span>185</span>
                <span>55</span>
                <span>79</span>
                <span>59</span>
                <span>89</span>
              </div>
            </div>
            <a className="team-name" href="#">
              <h5 className="text-uppercase mb-0">Joanne Irwin</h5>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item">
            <div className="team-body">
              <div className="team-before">
                <span>Age</span>
                <span>Height</span>
                <span>Weight</span>
                <span>Bust</span>
                <span>Waist</span>
                <span>Hips</span>
              </div>
              <img className="img-fluid" src="img/team-8.jpg" alt />
              <div className="team-after">
                <span>22</span>
                <span>185</span>
                <span>55</span>
                <span>79</span>
                <span>59</span>
                <span>89</span>
              </div>
            </div>
            <a className="team-name" href="#">
              <h5 className="text-uppercase mb-0">Gillian Rowe</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
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

export default Home