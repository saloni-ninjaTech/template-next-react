import { Grid } from '@mui/material'
import React from 'react'

function Quote() {
  return (
    <Grid className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <Grid className="container py-5">
    <Grid className="row g-5">
      <Grid className="col-lg-7">
        <Grid className="section-title position-relative pb-3 mb-5">
          <h5 className="fw-bold text-primary text-uppercase">Request A Quote</h5>
          <h1 className="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h1>
        </Grid>
        <Grid className="row gx-3">
          <Grid className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
            <h5 className="mb-4"><i className="fa fa-reply text-primary me-3" />Reply within 24 hours</h5>
          </Grid>
          <Grid className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
            <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3" />24 hrs telephone support</h5>
          </Grid>
        </Grid>
        <p className="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
        <Grid className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
          <Grid className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: 60, height: 60}}>
            <i className="fa fa-phone-alt text-white" />
          </Grid>
          <Grid className="ps-4">
            <h5 className="mb-2">Call to ask any question</h5>
            <h4 className="text-primary mb-0">+012 345 6789</h4>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="col-lg-5">
        <Grid className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
          <form>
            <Grid className="row g-3">
              <Grid className="col-xl-12">
                <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{height: 55}} />
              </Grid>
              <Grid className="col-12">
                <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{height: 55}} />
              </Grid>
              <Grid className="col-12">
                    <select defaultValue={0}  className="form-select bg-light border-0" style={{height: 55}}>
                  <option value={0}>Select A Service</option>
                  <option value={1}>Service 1</option>
                  <option value={2}>Service 2</option>
                  <option value={3}>Service 3</option>
                </select>
              </Grid>
              <Grid className="col-12">
                <textarea className="form-control bg-light border-0" rows={3} placeholder="Message" defaultValue={""} />
              </Grid>
              <Grid className="col-12">
                <button className="btn btn-dark w-100 py-3" type="submit">Request A Quote</button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Grid>

  )
}

export default Quote