import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { ListSubheader, ListItem, Card, Icon } from '@material-ui/core'
import List from '@material-ui/core/List'
import b1 from './images/b1.jpg'


const useStyles = makeStyles(theme => ({
    container: {
        width: '90%',
        margin: 'auto',
        boxShadow: '1px 1px 3px black',
        marginBottom: '10px'
    },
    div: {
        padding: '20px'
    },
    text: {
        fontSize: '32px',
        lineHeight: '36px',
        margin: '20px 0px 10px 0px'
    },
    grid: {
        fontSize: '18px',
    },
    card: {
        maxWidth: '300px',
        backgroundColor: "red",
        margin: '0 auto',
    },
    cardwrapper: {
        display: 'flex'

    },
    img: {
        maxWidth: '300px',
        maxHeight: '300px',
    },

}))

function Content(props) {
    const classes = useStyles();

    const { title, image, calories, ingredients, servings, healthLabels, nutrients } = props;
    const ENER_KACL = (nutrients.ENERC_KCAL)
    const FAT = (nutrients.FAT);
    const PROCNT = (nutrients.PROCNT);
    const CHOLE = (nutrients.CHOLE);

    return (
        <section>
            <div className={classes.container}>
                <div className={classes.div}>
                    <Typography variant="h2" className={classes.text}>{title}</Typography>
                    <Grid container className={classes.grid}>
                        <Grid xs item>
                            <List subheader={
                                <ListSubheader component="div" id="nested-list-subheader">Information</ListSubheader>
                            }>
                                <ListItem>Calories:{calories}</ListItem>
                                <ListItem>Servings:{servings}</ListItem>
                                <List subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">HealthLables:</ListSubheader>
                                }>
                                    {healthLabels.map(el => (
                                        <ListItem>{el}</ListItem>
                                    ))}
                                </List>
                                <List subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">nutrients:</ListSubheader>
                                }>
                                    <ListItem>{ENER_KACL.label}: {Math.floor(ENER_KACL.quantity * 100) / 100} {ENER_KACL.unit}</ListItem>
                                    <ListItem>{FAT.label}: {Math.floor(FAT.quantity * 100) / 100} {FAT.unit}</ListItem>
                                    <ListItem>{PROCNT.label}: {Math.floor(PROCNT.quantity * 100) / 100} {PROCNT.unit}</ListItem>
                                    {/* <ListItem>{CHOLE.label}: {Math.floor(CHOLE.quantity * 100) / 100} {CHOLE.unit}</ListItem> */}


                                </List>
                                <ListItem>calories: 225</ListItem>
                                <ListItem>calories: 225</ListItem>

                            </List>
                        </Grid>
                        <Grid xs item>
                            <List subheader={
                                <ListSubheader component="div" id="nested-list-subheader">Ingrdients</ListSubheader>
                            }>
                                {ingredients.map((i, index) => (
                                    <ListItem key={index}>{i.text}</ListItem>
                                ))}
                                {/* <ListItem>1 cup icecream</ListItem>
                                <ListItem>tow bananas</ListItem>
                                <ListItem>tow bananas</ListItem>
                                <ListItem>two sppon olive oil</ListItem>
                                <ListItem>half glass water</ListItem>
                                <ListItem>faily pack ice cream</ListItem>
                                <ListItem>mix everthing </ListItem>
                                <ListItem>stir for hour </ListItem>
                                <ListItem>calories: 225</ListItem> */}


                            </List>
                        </Grid>
                        <Grid xs item>
                            <div className={classes.card}>
                                <div className={classes.cardwrapper}>
                                    <img src={image} alt="some text" className={classes.img}></img>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>


    )
}

export default Content;