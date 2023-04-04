import { Grid } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <Grid className="col-lg-4">
        {/* Search Form Start */}
        <Grid className="mb-5 wow slideInUp" data-wow-delay="0.1s">
          <Grid className="input-group">
            <input type="text" className="form-control p-3" placeholder="Keyword" />
            <button className="btn btn-primary px-4"><i className="bi bi-search" /></button>
          </Grid>
        </Grid>
        {/* Search Form End */}
        {/* Category Start */}
        <Grid className="mb-5 wow slideInUp" data-wow-delay="0.1s">
          <Grid className="section-title section-title-sm position-relative pb-3 mb-4">
            <h3 className="mb-0">Categories</h3>
          </Grid>
          <Grid className="link-animated d-flex flex-column justify-content-start">
            <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2" />Web Design</a>
            <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2" />Web Development</a>
            <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2" />Web Development</a>
            <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2" />Keyword Research</a>
            <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2" />Email Marketing</a>
          </Grid>
        </Grid>
        {/* Category End */}
        {/* Recent Post Start */}
        <Grid className="mb-5 wow slideInUp" data-wow-delay="0.1s">
          <Grid className="section-title section-title-sm position-relative pb-3 mb-4">
            <h3 className="mb-0">Recent Post</h3>
          </Grid>
          <Grid className="d-flex rounded overflow-hidden mb-3">
            <img className="img-fluid" src="img/blog-1.jpg" style={{width: 100, height: 100, objectFit: 'cover'}} alt />
            <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
            </a>
          </Grid>
          <Grid className="d-flex rounded overflow-hidden mb-3">
            <img className="img-fluid" src="img/blog-2.jpg" style={{width: 100, height: 100, objectFit: 'cover'}} alt />
            <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
            </a>
          </Grid>
          <Grid className="d-flex rounded overflow-hidden mb-3">
            <img className="img-fluid" src="img/blog-3.jpg" style={{width: 100, height: 100, objectFit: 'cover'}} alt />
            <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
            </a>
          </Grid>
          <Grid className="d-flex rounded overflow-hidden mb-3">
            <img className="img-fluid" src="img/blog-1.jpg" style={{width: 100, height: 100, objectFit: 'cover'}} alt />
            <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
            </a>
          </Grid>
          <Grid className="d-flex rounded overflow-hidden mb-3">
            <img className="img-fluid" src="img/blog-2.jpg" style={{width: 100, height: 100, objectFit: 'cover'}} alt />
            <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
            </a>
          </Grid>
          <Grid className="d-flex rounded overflow-hidden mb-3">
            <img className="img-fluid" src="img/blog-3.jpg" style={{width: 100, height: 100, objectFit: 'cover'}} alt />
            <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
            </a>
          </Grid>
        </Grid>
        {/* Recent Post End */}
        {/* Image Start */}
        <Grid className="mb-5 wow slideInUp" data-wow-delay="0.1s">
          <img src="img/blog-1.jpg" alt className="img-fluid rounded" />
        </Grid>
        {/* Image End */}
        {/* Tags Start */}
        <Grid className="mb-5 wow slideInUp" data-wow-delay="0.1s">
          <Grid className="section-title section-title-sm position-relative pb-3 mb-4">
            <h3 className="mb-0">Tag Cloud</h3>
          </Grid>
          <Grid className="d-flex flex-wrap m-n1">
            <a href className="btn btn-light m-1">Design</a>
            <a href className="btn btn-light m-1">Development</a>
            <a href className="btn btn-light m-1">Marketing</a>
            <a href className="btn btn-light m-1">SEO</a>
            <a href className="btn btn-light m-1">Writing</a>
            <a href className="btn btn-light m-1">Consulting</a>
            <a href className="btn btn-light m-1">Design</a>
            <a href className="btn btn-light m-1">Development</a>
            <a href className="btn btn-light m-1">Marketing</a>
            <a href className="btn btn-light m-1">SEO</a>
            <a href className="btn btn-light m-1">Writing</a>
            <a href className="btn btn-light m-1">Consulting</a>
          </Grid>
        </Grid>
        {/* Tags End */}
        {/* Plain Text Start */}
        <Grid className="wow slideInUp" data-wow-delay="0.1s">
          <Grid className="section-title section-title-sm position-relative pb-3 mb-4">
            <h3 className="mb-0">Plain Text</h3>
          </Grid>
          <Grid className="bg-light text-center" style={{padding: 30}}>
            <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
            <a href className="btn btn-primary py-2 px-4">Read More</a>
          </Grid>
        </Grid>
        {/* Plain Text End */}
      </Grid>
  )
}

export default Sidebar