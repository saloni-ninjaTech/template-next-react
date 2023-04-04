import { Grid } from '@mui/material'
import React from 'react'

function Testimonials() {
  return (
    <Grid className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <Grid className="container py-5">
    <Grid className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{maxWidth: 600}}>
      <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
      <h1 className="mb-0">What Our Clients Say About Our Digital Services</h1>
    </Grid>
    <Grid className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
      <Grid className="testimonial-item bg-light my-4">
        <Grid className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
          <img className="img-fluid rounded" src="img/testimonial-1.jpg" style={{width: 60, height: 60}} />
          <Grid className="ps-4">
            <h4 className="text-primary mb-1">Client Name</h4>
            <small className="text-uppercase">Profession</small>
          </Grid>
        </Grid>
        <Grid className="pt-4 pb-5 px-5">
          Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
        </Grid>
      </Grid>
      <Grid className="testimonial-item bg-light my-4">
        <Grid className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
          <img className="img-fluid rounded" src="img/testimonial-2.jpg" style={{width: 60, height: 60}} />
          <Grid className="ps-4">
            <h4 className="text-primary mb-1">Client Name</h4>
            <small className="text-uppercase">Profession</small>
          </Grid>
        </Grid>
        <Grid className="pt-4 pb-5 px-5">
          Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
        </Grid>
      </Grid>
      <Grid className="testimonial-item bg-light my-4">
        <Grid className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
          <img className="img-fluid rounded" src="img/testimonial-3.jpg" style={{width: 60, height: 60}} />
          <Grid className="ps-4">
            <h4 className="text-primary mb-1">Client Name</h4>
            <small className="text-uppercase">Profession</small>
          </Grid>
        </Grid>
        <Grid className="pt-4 pb-5 px-5">
          Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
        </Grid>
      </Grid>
      <Grid className="testimonial-item bg-light my-4">
        <Grid className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
          <img className="img-fluid rounded" src="img/testimonial-4.jpg" style={{width: 60, height: 60}} />
          <Grid className="ps-4">
            <h4 className="text-primary mb-1">Client Name</h4>
            <small className="text-uppercase">Profession</small>
          </Grid>
        </Grid>
        <Grid className="pt-4 pb-5 px-5">
          Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Grid>

  )
}

export default Testimonials