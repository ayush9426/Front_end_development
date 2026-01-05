import React from 'react'
import Header from '../Common/Header'
import Header2 from '../Common/Header2'
import Footer from '../Common/Footer'

function Feature() {
  return (
    <div>
        <Header/>
        <Header2  title="Features" data="Features" />

        <div>
  {/* Features Start */}
  <div className="container-fluid pt-6 pb-6">
    <div className="container pt-4">
      <div className="row g-0 feature-row wow fadeIn" data-wow-delay="0.1s">
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
          <div className="feature-item border h-100">
            <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
              <i className="fa fa-hammer fa-2x text-white" />
            </div>
            <div className="p-5 pt-0">
              <h5 className="text-uppercase mb-3">Quality Welding</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
              <a className="position-relative text-body text-uppercase small d-flex justify-content-between" href="#"><b className="bg-white pe-3">Read More</b> <i className="bi bi-arrow-right bg-white ps-3" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.4s">
          <div className="feature-item border h-100">
            <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
              <i className="fa fa-dollar-sign fa-2x text-white" />
            </div>
            <div className="p-5 pt-0">
              <h5 className="text-uppercase">Affordable Pricing</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
              <a className="position-relative text-body text-uppercase small d-flex justify-content-between" href="#"><b className="bg-white pe-3">Read More</b> <i className="bi bi-arrow-right bg-white ps-3" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
          <div className="feature-item border h-100">
            <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
              <i className="fa fa-check-double fa-2x text-white" />
            </div>
            <div className="p-5 pt-0">
              <h5 className="text-uppercase">Best Welder</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
              <a className="position-relative text-body text-uppercase small d-flex justify-content-between" href="#"><b className="bg-white pe-3">Read More</b> <i className="bi bi-arrow-right bg-white ps-3" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.6s">
          <div className="feature-item border h-100">
            <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
              <i className="fa fa-tools fa-2x text-white" />
            </div>
            <div className="p-5 pt-0">
              <h5 className="text-uppercase">Quality Tools</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
              <a className="position-relative text-body text-uppercase small d-flex justify-content-between" href="#"><b className="bg-white pe-3">Read More</b> <i className="bi bi-arrow-right bg-white ps-3" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features End */}
  {/* Features Start */}
  <div className="pb-6">
    <div className="container-fluid feature mt-6 wow fadeIn" data-wow-delay="0.1s">
      <div className="container">
        <div className="row g-0 justify-content-end">
          <div className="col-lg-6 pt-5">
            <div className="mt-5">
              <h1 className="display-6 text-white text-uppercase mb-4 wow fadeIn" data-wow-delay="0.3s">Why You should Choose Our welding Services</h1>
              <p className="text-light mb-4 wow fadeIn" data-wow-delay="0.4s">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar
                tortor. Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus. Pellentesque eu
                consequat augue.</p>
              <div className="row g-4 pt-2 mb-4">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                  <div className="flex-column text-center border border-5 border-primary p-5">
                    <h1 className="text-white" data-toggle="counter-up">9999</h1>
                    <p className="text-white text-uppercase mb-0">Satisfied Clients</p>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="flex-column text-center border border-5 border-primary p-5">
                    <h1 className="text-white" data-toggle="counter-up">9999</h1>
                    <p className="text-white text-uppercase mb-0">Complete Projects</p>
                  </div>
                </div>
              </div>
              <div className="border border-5 border-primary border-bottom-0 p-5">
                <div className="experience mb-4 wow fadeIn" data-wow-delay="0.6s">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-white text-uppercase">Experience</span>
                    <span className="text-white">90%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="experience wow fadeIn" data-wow-delay="0.7s">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-white text-uppercase">Work Done</span>
                    <span className="text-white">95%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features End */}
  {/* Newsletter Start */}
  <div className="container-fluid newsletter mt-6 wow fadeIn" data-wow-delay="0.1s">
    <div className="container pb-5">
      <div className="bg-white p-5 mb-5">
        <div className="row g-5">
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
            <h1 className="display-6 text-uppercase mb-4">Newsletter</h1>
            <div className="d-flex">
              <i className="far fa-envelope-open fa-3x text-primary me-4" />
              <p className="fs-5 fst-italic mb-0">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore lorem ipsum.</p>
            </div>
          </div>
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="form-floating mb-3">
              <input type="email" className="form-control border-0 bg-light" id="mail" placeholder="Your Email" />
              <label htmlFor="mail">Your Email</label>
            </div>
            <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Newsletter End */}
</div>


        <Footer/>
    </div>
  )
}

export default Feature