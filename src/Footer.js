import React from 'react'

import {makeStyles} from '@material-ui/core/styles'
import Typography  from '@material-ui/core/Typography'
const usestyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#b6f576',
        color: '#333'
    },
    text: {
        padding: '20px',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 'bold'
    }

}))


function Footer() {
    const classes = usestyles();

    return(
        <footer className={classes.footer}>
            <Typography variant="h2" className={classes.text}>This is my project of Recipes
            <br></br>Still in Production
            <br></br>by bhavesh choudhary</Typography>
        </footer>





    )
}

export default Footer;