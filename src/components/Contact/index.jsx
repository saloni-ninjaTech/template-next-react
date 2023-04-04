import { Grid } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <Grid className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <Grid className="container py-5">
    <Grid className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: 600}}>
      <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
      <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
    </Grid>
    <Grid className="row g-5 mb-5">
      <Grid className="col-lg-4">
        <Grid className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
          <Grid className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: 60, height: 60}}>
            <i className="fa fa-phone-alt text-white" />
          </Grid>
          <Grid className="ps-4">
            <h5 className="mb-2">Call to ask any question</h5>
            <h4 className="text-primary mb-0">+012 345 6789</h4>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="col-lg-4">
        <Grid className="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
          <Grid className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: 60, height: 60}}>
            <i className="fa fa-envelope-open text-white" />
          </Grid>
          <Grid className="ps-4">
            <h5 className="mb-2">Email to get free quote</h5>
            <h4 className="text-primary mb-0">info@example.com</h4>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="col-lg-4">
        <Grid className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
          <Grid className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: 60, height: 60}}>
            <i className="fa fa-map-marker-alt text-white" />
          </Grid>
          <Grid className="ps-4">
            <h5 className="mb-2">Visit our office</h5>
            <h4 className="text-primary mb-0">123 Street, NY, USA</h4>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid className="row g-5">
      <Grid className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
        <form>
          <Grid className="row g-3">
            <Grid className="col-md-6">
              <input type="text" className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{height: 55}} />
            </Grid>
            <Grid className="col-md-6">
              <input type="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{height: 55}} />
            </Grid>
            <Grid className="col-12">
              <input type="text" className="form-control border-0 bg-light px-4" placeholder="Subject" style={{height: 55}} />
            </Grid>
            <Grid className="col-12">
              <textarea className="form-control border-0 bg-light px-4 py-3" rows={4} placeholder="Message" defaultValue={""} />
            </Grid>
            <Grid className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
        <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{minHeight: 350, border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
      </Grid>
    </Grid>
  </Grid>
</Grid>

  )
}

export default Contact