import React from 'react'
import uuid from 'uuid/v4'

import { Grid } from './TimeGrid.style.js'

function TimeGrid() {
  return (
    <Grid>
      {[...Array(24)].map(() => {
        return <li key={uuid()} />
      })}
    </Grid>
  )
}

export default TimeGrid
