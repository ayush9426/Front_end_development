import React from 'react'

function Footer() {
  return (
    <div>
        {/* Footer Start */}
<div className="container-fluid bg-dark text-light footer py-5 wow fadeIn" data-wow-delay="0.1s">
  <div className="container text-center py-5">
    <a href="index.html">
      <h1 className="display-4 mb-3 text-white text-uppercase"><i className="fa-regular fa-face-smile me-1" />Poseify</h1>
    </a>
    <div className="d-flex justify-content-center mb-4">
      <a className="btn btn-lg-square btn-outline-primary border-2 m-1" href="#!"><i className="fab fa-x-twitter" /></a>
      <a className="btn btn-lg-square btn-outline-primary border-2 m-1" href="#!"><i className="fab fa-facebook-f" /></a>
      <a className="btn btn-lg-square btn-outline-primary border-2 m-1" href="#!"><i className="fab fa-youtube" /></a>
      <a className="btn btn-lg-square btn-outline-primary border-2 m-1" href="#!"><i className="fab fa-linkedin-in" /></a>
    </div>
    <p>© <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.</p>
    {/*/*** The author’s attribution link must remain intact in the template. *** /*/}
    {/*/*** If you wish to remove this credit link, please purchase the Pro Version . *** /*/}
    <p className="mb-0">Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>. Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a>.</p>
  </div>
</div>

{/* Back to Top */}
<a href="#" className="btn btn-outline-primary border-2 btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>

    </div>
  )
}

export default Footer