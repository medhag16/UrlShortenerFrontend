import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import { FontDownloadSharp } from '@material-ui/icons';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function FormComponent() {
    const paperStyle={padding:'50px 20px', width:600,margin:"10px auto"}
    const[url,setOriginalUrl]=useState('')
    const[expirydate,setExpiryDate]=useState('')
    const[urls,setUrls]=useState('')
    const classes = useStyles();

    const handleClick =async(e)=>{
        e.preventDefault()
        const urlobject={url}
        console.log(urlobject)
        axios.post('http://localhost:8080/generate',urlobject).then(response=>
        {console.log(response.data.shortLink,setUrls(response.data.shortLink))}).catch(error=>{
            console.log(error)
        })
        
    }

  return (
    <Container>
        <h1 style={{fontFamily:FontDownloadSharp}}><u>Enter Original URL</u></h1>
        <Paper elevation={3} style={paperStyle}>
        <form className={classes.root} noValidate autoComplete="off">

            <TextField id="outlined-basic" label="Original Url" variant="outlined" fullWidth 
            value={url}
            onChange={(e)=>setOriginalUrl(e.target.value)}
            />

            <TextField id="outlined-basic" label="Expiry Date" variant="outlined" fullWidth
            value={expirydate}
            onChange={(e)=>setExpiryDate(e.target.value)}
            />

            <Button variant="contained" color="secondary" onClick={handleClick}>
              Submit
            </Button>

        </form>
</Paper>
  {("http://localhost:8080/").concat(urls)}
</Container>) 
}
