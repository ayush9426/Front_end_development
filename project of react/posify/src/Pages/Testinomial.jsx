import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Header2 from '../common/Header2'

function Testinomial() {
  return (
    <div>
        <Header2 title="Testinomial" data="testinomial"/>
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
     
     <Footer/>
    </div>
  )
}

export default Testinomial