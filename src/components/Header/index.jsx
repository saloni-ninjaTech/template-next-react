import React from 'react';
import Link from 'next/link'; 
import { useRouter } from 'next/router';
import { Grid, Icon, IconButton, Typography } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';

function Header() {
  const router = useRouter();
  const pathName = router.pathname;

  const getHeaderName = () => {
    let tempName = "";
    switch (pathName) {
        case "/About":
          tempName = "About Us";
        break;
        case "/Service":
          tempName = "Services";
        break;
        case "/Blog":
          tempName = "Blog Grid";
        break;
        case "/Detail":
          tempName = "Blog Detail";
        break;
        case "/PricingPlan":
          tempName = "Prices";
        break;
        case "/Feature":
          tempName = "Features";
        break;
        case "/Team":
          tempName = "Team Members";
        break;
        case "/Testimonial":
          tempName = "Testimonial";
        break;
        case "/Quote":
          tempName = "Free Quote";
        break;
        case "/Contact":
          tempName = "Contact Us";
          break;

      default:
        tempName = "";
        break;
    }
    return tempName;
  }
  const headerName = getHeaderName();
  return (
    <Grid container>
  {/* Spinner Start */}
  <Grid item xs={12} id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <Grid className="spinner" />
  </Grid>
  {/* Spinner End */}
  {/* Topbar Start */}
      <Grid item xs={12} className="container-fluid bg-dark px-5 d-none d-lg-block">
    <Grid container className="row gx-0">
      <Grid item className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <Grid container className="d-inline-flex align-items-center" style={{ height: 45 }}>
              <Grid item>
                
          <Typography variant='body2' className="me-3 text-light"><Icon fontSize='small' className="fa fa-map-marker-alt me-2" />123 Street, New York, USA</Typography>
              </Grid>
              <Grid item>
                
          <Typography variant='body2' className="me-3 text-light"><Icon fontSize='small' className="fa fa-phone-alt me-2" />+012 345 6789</Typography>
              </Grid>
              <Grid item>
                
          <Typography variant='body2' className="text-light"><Icon fontSize='small' className="fa fa-envelope-open me-2" />info@example.com</Typography>
            </Grid>
        </Grid>
      </Grid>
      <Grid item className="col-lg-4 text-center text-lg-end">
        <div className="d-inline-flex align-items-center" style={{height: 45}}>
          <IconButton className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><Twitter fontSize='small'  /></IconButton>
          <IconButton className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><Facebook fontSize='small' /></IconButton>
          <IconButton className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><LinkedIn fontSize='small'  /></IconButton>
          <IconButton className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><Instagram fontSize='small' /></IconButton>
          <IconButton className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><YouTube fontSize='small' /></IconButton>
        </div>
      </Grid>
    </Grid>
  </Grid>
  {/* Topbar End */}
  {/* Navbar Start */}
  <Grid item={12} className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
      <Link href="/" className="navbar-brand p-0">
        <h1 className="m-0"><i className="fa fa-user-tie me-2" />Startup</h1>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link href="/" className={`nav-item nav-link ${pathName==="/" ? "active" : ""}`}>Home</Link>
          <Link href="/About" className={`nav-item nav-link ${pathName==="/About" ? "active" : ""}`}>About</Link>
          <Link href="/Service" className={`nav-item nav-link ${pathName==="/Service" ? "active" : ""}`}>Service</Link>
          <div className="nav-item dropdown">
            <a href="#" className={`nav-link dropdown-toggle ${pathName==="/Blog" || pathName==="/Detail" ? "active" : ""}`} data-bs-toggle="dropdown">Blog</a>
            <div className="dropdown-menu m-0">
              <Link href="/Blog" className={`dropdown-item ${pathName==="/Blog" ? "active" : ""}`}>Blog Grid</Link>
              <Link href="/Detail" className={`dropdown-item ${pathName==="/Detail" ? "active" : ""}`}>Blog Detail</Link>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu m-0">
              <Link href="/PricingPlan" className={`dropdown-item ${pathName==="/PricingPlan" ? "active" : ""}`}>Pricing Plan</Link>
              <Link href="/Feature" className={`dropdown-item ${pathName==="/Feature" ? "active" : ""}`}>Our features</Link>
              <Link href="/Team" className={`dropdown-item ${pathName==="/Team" ? "active" : ""}`}>Team Members</Link>
              <Link href="/Testimonial" className={`dropdown-item ${pathName==="/Testimonial" ? "active" : ""}`}>Testimonial</Link>
              <Link href="/Quote" className={`dropdown-item ${pathName==="/Quote" ? "active" : ""}`}>Free Quote</Link>
            </div>
          </div>
          <Link href="/Contact" className={`nav-item nav-link ${pathName==="/Contact" ? "active" : ""}`}>Contact</Link>
        </div>
        <butaton type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search" /></butaton>
        {/* <a href="https://htmlcodex.com/startup-company-website-template" className="btn btn-primary py-2 px-4 ms-3">Download Pro Version</a> */}
      </div>
        </nav>
        {pathName === "/" ? (<div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
      <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
        <div className="p-3" style={{maxWidth: 900}}>
          <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative &amp; Innovative</h5>
          <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative &amp; Innovative Digital Solution</h1>
          <Link href="/Quote" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</Link>
          <a href className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
      <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
        <div className="p-3" style={{maxWidth: 900}}>
          <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative &amp; Innovative</h5>
          <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative &amp; Innovative Digital Solution</h1>
          <Link href="Quote" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</Link>
          <a href className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    ):(<div className="container-fluid bg-primary py-5 bg-header" style={{marginBottom: 90}}>
      <div className="row py-5">
        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">{headerName}</h1>
          <a href className="h5 text-white">Home</a>
          <i className="far fa-circle text-white px-2" />
          <a href className="h5 text-white">{headerName}</a>
        </div>
      </div>
          </div>
        )}
        
        
  </Grid>
  {/* Navbar End */}
</Grid>
  )
}

export default Header;