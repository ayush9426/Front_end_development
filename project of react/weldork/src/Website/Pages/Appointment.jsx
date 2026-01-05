import React from 'react'
import Header from '../Common/Header'
import Header2 from '../Common/Header2'
import Footer from '../Common/Footer'

function Appointment() {
  return (
    <div>
        <Header/>
        <Header2 title="Appointment"  data="Appointment" />

       <div>
  {/* Appoinment Start */}
  <div className="pt-6 pb-6">
    <div className="container-fluid appoinment py-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container pt-5">
        <div className="row gy-5 gx-0">
          <div className="col-lg-6 pe-lg-5 wow fadeIn" data-wow-delay="0.3s">
            <h1 className="display-6 text-uppercase text-white mb-4">We Complete Welding &amp; Metal Projects in Time
            </h1>
            <p className="text-white mb-5 wow fadeIn" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus
              augue, iaculis id elit eget, ultrices pulvinar tortor.</p>
            <div className="d-flex align-items-start wow fadeIn" data-wow-delay="0.5s">
              <div className="btn-lg-square bg-white">
                <i className="bi bi-geo-alt text-dark fs-3" />
              </div>
              <div className="ms-3">
                <h6 className="text-white text-uppercase">Office Address</h6>
                <span className="text-white">123 Street, New York, USA</span>
              </div>
            </div>
            <hr className="bg-body" />
            <div className="d-flex align-items-start wow fadeIn" data-wow-delay="0.6s">
              <div className="btn-lg-square bg-white">
                <i className="bi bi-clock text-dark fs-3" />
              </div>
              <div className="ms-3">
                <h6 className="text-white text-uppercase">Office Time</h6>
                <span className="text-white">Mon-Sat 09am-5pm, Sun Closed</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-n5 wow fadeIn" data-wow-delay="0.7s">
            <div className="bg-white p-5">
              <h2 className="text-uppercase mb-4">Online Appoinment</h2>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control border-0 bg-light" id="name" placeholder="Your Name" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="email" className="form-control border-0 bg-light" id="mail" placeholder="Your Email" />
                    <label htmlFor="mail">Your Email</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control border-0 bg-light" id="mobile" placeholder="Your Mobile" />
                    <label htmlFor="mobile">Your Mobile</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <select className="form-select border-0 bg-light" id="service">
                      <option selected>Steel Welding</option>
                      <option value>Pipe Welding</option>
                    </select>
                    <label htmlFor="service">Choose A Service</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control border-0 bg-light" placeholder="Leave a message here" id="message" style={{height: 130}} defaultValue={""} />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Appoinment End */}
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

export default Appointment