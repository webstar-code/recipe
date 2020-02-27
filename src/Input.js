import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        boxSizing: 'border-box',
        width: '80%',
        margin: '50px auto',
    },
    form: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
    },
    textfield: {
        width:'50%',
        
    },
    button: {
        padding:'15px 30px',
        margin:'0px 50px',
        backgroundColor: '#7bbb67',
        fontSize:'24px',
        lineHeight: '20px',
        boxShadow: 'none',   
    },
    desc: {
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: 'bold',
        lineheight: '30px',
        paddingBottom: '10px',
    }

    

}))

function Input() {

    const classes = useStyles();


    return(
        <div className={classes.container}>
            <form className={classes.form}>
                <TextField id="outlined-secondary"
                // label="Search"
                placeholder="Search"
                variant="outlined"
                color="secondary"
                className={classes.textfield}>
                </TextField>
                <Button variant="contained" className={classes.button}>Search</Button>
                
            </form>
            <Typography variant="h2" className={classes.desc}>Find your Favourite food recipes here</Typography>
        </div>



    )
}

export default Input;