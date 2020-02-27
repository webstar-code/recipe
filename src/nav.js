import React  from 'react'
import { AppBar, Typography, Container ,Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        width: '90%',
        margin: 'auto'
    },
    appbar: {
        backgroundColor: '#b6f576',
        margin:'auto',
        boxShadow: '1px 1px 3px 1px #333',
        color: '#333',
        fontFamily: 'sans-serif'
    },
    brand: {
        fontSize: '38px',
        lineHeight: '44px',
        padding: '20px 0px',
    }
}))


function Nav() {

    const classes = useStyles();
    return(
            <AppBar position="static" className={classes.appbar}>
                <Box maxWidth="sm" className={classes.container}>
                <Typography variant="h2" className={classes.brand}>Recipe</Typography>

                </Box>
            </AppBar>

    )
}

export default Nav;