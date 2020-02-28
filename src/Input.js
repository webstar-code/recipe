import React, { useEffect } from 'react'
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

function Input(props) {

    const classes = useStyles();
    const {GetRecipes} = props;
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect({

    },[query])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    console.log(search);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search)
    console.log(query);
  }

    return(
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit}>
        <input type="text" name="text" value={search} onChange={handleSearch} className={classes.textfield}></input>
        <button type="submit" className="search-btn" >Search</button>
                
                {/* <TextField id="outlined-secondary"
                // label="Search"
                placeholder="Search"
                variant="outlined"
                color="secondary"
                className={classes.textfield}
                value={search}
                onChange={handleSearch}
                >
                </TextField> */}
                {/* <Button type="submit" variant="contained" className={classes.button}>Search</Button> */}
                
            </form>
            <Typography variant="h2" className={classes.desc}>Find your Favourite food recipes here</Typography>
        </div>



    )
}

export default Input;