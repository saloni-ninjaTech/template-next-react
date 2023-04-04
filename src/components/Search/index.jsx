import { Grid } from '@mui/material'
import React from 'react'

function Search() {
  return (
    <Grid className="modal fade" id="searchModal" tabIndex={-1}>
  <Grid className="modal-dialog modal-fullscreen">
    <Grid className="modal-content" style={{background: 'rgba(9, 30, 62, .7)'}}>
      <Grid className="modal-header border-0">
        <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </Grid>
      <Grid className="modal-body d-flex align-items-center justify-content-center">
        <Grid className="input-group" style={{maxWidth: 600}}>
          <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
          <button className="btn btn-primary px-4"><i className="bi bi-search" /></button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Grid>

  )
}

export default Search