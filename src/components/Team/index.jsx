import { Grid } from '@mui/material'
import React from 'react'

function Team() {
  return (
    <Grid className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <Grid className="container py-5">
    <Grid className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: 600}}>
      <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
      <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
    </Grid>
    <Grid className="row g-5">
      <Grid className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
        <Grid className="team-item bg-light rounded overflow-hidden">
          <Grid className="team-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="img/team-1.jpg" alt />
            <Grid className="team-social">
              <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
              <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
              <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
              <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
            </Grid>
          </Grid>
          <Grid className="text-center py-4">
            <h4 className="text-primary">Full Name</h4>
            <p className="text-uppercase m-0">Designation</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
        <Grid className="team-item bg-light rounded overflow-hidden">
          <Grid className="team-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="img/team-2.jpg" alt />
            <Grid className="team-social">
              <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
              <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
              <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
              <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
            </Grid>
          </Grid>
          <Grid className="text-center py-4">
            <h4 className="text-primary">Full Name</h4>
            <p className="text-uppercase m-0">Designation</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
        <Grid className="team-item bg-light rounded overflow-hidden">
          <Grid className="team-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="img/team-3.jpg" alt />
            <Grid className="team-social">
              <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
              <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
              <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
              <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
            </Grid>
          </Grid>
          <Grid className="text-center py-4">
            <h4 className="text-primary">Full Name</h4>
            <p className="text-uppercase m-0">Designation</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Grid>

  )
}

export default Team