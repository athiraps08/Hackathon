import { Grid } from '@material-ui/core'
import React from 'react'
import Add from '../Add'
import View from './SearchFud'

const GridView = () => {
    return (
        <div>

            <Grid container style={{padding:30,backgroundcolor:"#440144"}} >
                 <Grid item style={{padding:30}} xs={6} sm={6} md={6}> <Add/> </Grid>
                 <Grid item style={{padding:30}}xs={6} sm={6} md={6}> <View/> </Grid>

            </Grid>
        </div>
    )
}

export default GridView
