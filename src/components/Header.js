import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div >
            <AppBar style={{backgroundColor:"#440014"}} position="static">
                <Toolbar>
                    <Typography style={{fontFamily:"cursive"}} variant="h5">The Finest Flavours Explored</Typography>
                    
                    <Link style={{textDecoration:"none",paddingLeft:200}} to="/"><Typography  variant="h6" style={{color:"#ffffff",padding:10,fontFamily:"monospace"}}>Home</Typography></Link>
                    <Link style={{textDecoration:"none"}} to="/add"><Typography  variant="h6" style={{color:"#ffffff",padding:20,fontFamily:"monospace"}}>Add Recipe</Typography></Link>
                    <Link style={{textDecoration:"none"}} to="/search"><Typography variant="h6"  style={{color:"#ffffff",padding:20,fontFamily:"monospace"}}>Search Recipe </Typography></Link> 
                    <Link style={{textDecoration:"none"}} to="/update"><Typography variant="h6"  style={{color:"#ffffff",padding:20,fontFamily:"monospace"}}>Update Recipe</Typography></Link> 
                    <Link style={{textDecoration:"none"}} to="/delete"><Typography  variant="h6" style={{color:"#ffffff",padding:20,fontFamily:"monospace",leftpadding:50,textAlign:"right"}}>Remove Recipe</Typography></Link>
                     
                   
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
