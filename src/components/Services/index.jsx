import { Grid } from '@mui/material'
import React from 'react'

function Services() {
  return (
    <Grid className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <Grid className="container py-5">
    <Grid className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: 600}}>
      <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
      <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
    </Grid>
    <Grid className="row g-5">
      <Grid className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
        <Grid className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          <Grid className="service-icon">
            <i className="fa fa-shield-alt text-white" />
          </Grid>
          <h4 className="mb-3">Cyber Security</h4>
          <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
          <a className="btn btn-lg btn-primary rounded" href>
            <i className="bi bi-arrow-right" />
          </a>
        </Grid>
      </Grid>
      <Grid className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
        <Grid className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          <Grid className="service-icon">
            <i className="fa fa-chart-pie text-white" />
          </Grid>
          <h4 className="mb-3">Data Analytics</h4>
          <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
          <a className="btn btn-lg btn-primary rounded" href>
            <i className="bi bi-arrow-right" />
          </a>
        </Grid>
      </Grid>
      <Grid className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
        <Grid className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          <Grid className="service-icon">
            <i className="fa fa-code text-white" />
          </Grid>
          <h4 className="mb-3">Web Development</h4>
          <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
          <a className="btn btn-lg btn-primary rounded" href>
            <i className="bi bi-arrow-right" />
          </a>
        </Grid>
      </Grid>
      <Grid className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
        <Grid className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          <Grid className="service-icon">
            <i className="fab fa-android text-white" />
          </Grid>
          <h4 className="mb-3">Apps Development</h4>
          <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
          <a className="btn btn-lg btn-primary rounded" href>
            <i className="bi bi-arrow-right" />
          </a>
        </Grid>
      </Grid>
      <Grid className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
        <Grid className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          <Grid className="service-icon">
            <i className="fa fa-search text-white" />
          </Grid>
          <h4 className="mb-3">SEO Optimization</h4>
          <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
          <a className="btn btn-lg btn-primary rounded" href>
            <i className="bi bi-arrow-right" />
          </a>
        </Grid>
      </Grid>
      <Grid className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
        <Grid className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
          <h3 className="text-white mb-3">Call Us For Quote</h3>
          <p className="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
          <h2 className="text-white mb-0">+012 345 6789</h2>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Grid>

  )
}

export default Services