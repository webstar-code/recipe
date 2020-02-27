import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { ListSubheader, ListItem } from '@material-ui/core'
import List from '@material-ui/core/List'

const useStyles = makeStyles(theme =>({
    container: {
        width:'90%',
        margin: 'auto',
        boxShadow: '1px 1px 3px black',
        marginBottom: '10px'
    },
    div: {
        padding:'20px'
    },
    text: {
        fontSize: '32px',
        lineHeight: '36px',
        margin: '20px 0px 10px 0px'
    },
    grid: {
        fontSize: '18px',
    }



}))

function Content() {
    const classes = useStyles();

    return(
        <section>
            <div className={classes.container}>
                <div className={classes.div}>
                    <Typography variant="h2" className={classes.text}>Banana Ice Cream</Typography>
                    <Grid container className={classes.grid}>
                        <Grid xs item>
                            <List subheader={
                                <ListSubheader component="div" id="nested-list-subheader">Information</ListSubheader>
                            }>
                                <ListItem>calories: 225</ListItem>
                                <ListItem>calories: 225</ListItem>
                                <ListItem>calories: 225</ListItem>
                                <ListItem>calories: 225</ListItem>
                                <ListItem>calories: 225</ListItem>

                            </List>
                        </Grid>
                        <Grid xs={6} item>
                        <List subheader={
                                <ListSubheader component="div" id="nested-list-subheader">Ingrdients</ListSubheader>
                            }>
                                <ListItem>1 cup icecream</ListItem>
                                <ListItem>tow bananas</ListItem>
                                <ListItem>tow bananas</ListItem>
                                <ListItem>two sppon olive oil</ListItem>
                                <ListItem>half glass water</ListItem>
                                <ListItem>faily pack ice cream</ListItem>
                                <ListItem>mix everthing </ListItem>
                                <ListItem>stir for hour </ListItem>
                                <ListItem>calories: 225</ListItem>
                                

                            </List>
                        </Grid>
                        <Grid xs item>
                                iamages
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>


    )
}

export default Content;