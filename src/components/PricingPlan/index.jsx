import { Card, Grid } from '@mui/material'
import React from 'react'

function PricingPlan() {
  return (
    <Grid container className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <Grid item xs={12}>

      <Grid container spacing={1} className="container py-5">
        <Grid item xs={2} className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: 600}}>
      <h5 className="fw-bold text-primary text-uppercase">Pricing Plans</h5>
      <h1 className="mb-0">We are Offering Competitive Prices for Our Clients</h1>
    </Grid>
        <Grid item xs={12} className="row g-0">
          <Grid container spacing={1}>
            {/* <Grid item> */}
            <Grid item className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
        <Card className="bg-light rounded">
          <Grid className="border-bottom py-4 px-5 mb-4">
            <h4 className="text-primary mb-1">Basic Plan</h4>
            <small className="text-uppercase">For Small Size Business</small>
          </Grid>
          <Grid className="p-5 pt-0">
            <h1 className="display-5 mb-3">
              <small className="align-top" style={{fontSize: 22}}>$</small>49.00<small className="align-bottom" style={{fontSize: 16}}>/ Month</small>
            </h1>
            <Grid className="d-flex justify-content-between mb-3"><span>HTML5 &amp; CSS3</span><i className="fa fa-check text-primary pt-1" /></Grid>
            <Grid className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1" /></Grid>
            <Grid className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-times text-danger pt-1" /></Grid>
            <Grid className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-times text-danger pt-1" /></Grid>
            <a href className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
          </Grid>
        {/* </Grid> */}
      </Card>
            </Grid>
            {/* <Grid item> */}
            <Grid item className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
        <Card className="bg-white rounded shadow position-relative" style={{zIndex: 1}}>
          <Grid className="border-bottom py-4 px-5 mb-4">
            <h4 className="text-primary mb-1">Standard Plan</h4>
            <small className="text-uppercase">For Medium Size Business</small>
          </Grid>
          <Grid className="p-5 pt-0">
            <h1 className="display-5 mb-3">
              <small className="align-top" style={{fontSize: 22}}>$</small>99.00<small className="align-bottom" style={{fontSize: 16}}>/ Month</small>
            </h1>
            <Grid className="d-flex justify-content-between mb-3"><span>HTML5 &amp; CSS3</span><i className="fa fa-check text-primary pt-1" /></Grid>
            <Grid className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1" /></Grid>
            <Grid className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary pt-1" /></Grid>
            <Grid className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-times text-danger pt-1" /></Grid>
            <a href className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
          </Grid>
        {/* </Grid> */}
      </Card>
            </Grid>
            {/* <Grid item> */}
            <Grid item className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
        <Card className="bg-light rounded">
          <Grid className="border-bottom py-4 px-5 mb-4">
            <h4 className="text-primary mb-1">Advanced Plan</h4>
            <small className="text-uppercase">For Large Size Business</small>
          </Grid>
          <Grid className="p-5 pt-0">
            <h1 className="display-5 mb-3">
              <small className="align-top" style={{fontSize: 22}}>$</small>149.00<small className="align-bottom" style={{fontSize: 16}}>/ Month</small>
            </h1>
            <Grid className="d-flex justify-content-between mb-3"><span>HTML5 &amp; CSS3</span><i className="fa fa-check text-primary pt-1" /></Grid>
            <Grid className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1" /></Grid>
            <Grid className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary pt-1" /></Grid>
            <Grid className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-check text-primary pt-1" /></Grid>
            <a href className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
          </Grid>
        {/* </Grid> */}
      </Card>
            </Grid>
          </Grid>
      
      
      
    </Grid>
        </Grid>
      </Grid>
        
</Grid>

  )
}

export default PricingPlan