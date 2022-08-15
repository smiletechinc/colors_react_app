import * as React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Color from './color';

const useStyles = makeStyles(() => ({
	space: {
		width: 300,
    height: 600,
    justifyContent: 'center',
  	},
}))

const Space = styled('div')`
align-items: center;
justify-content: space-between;
width: 100%;
margin: 0 auto;
padding: 0 16px;
height: 64px;
max-width: 1024px;
`;

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
        Real Time Color Card
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Submit</Button>
    </CardActions> */}      
    

  </React.Fragment>
);


const red = createMuiTheme({
  overrides:{
    MuiSlider: {
      thumb:{
      color: "red",
      },
      track: {
        color: 'red'
      },
      rail: {
        color: 'black'
      }
    }
}
});

const green = createMuiTheme({
  overrides:{
    MuiSlider: {
      thumb:{
      color: "green",
      },
      track: {
        color: 'green'
      },
      rail: {
        color: 'black'
      }
    }
}
});

const blue = createMuiTheme({
  overrides:{
    MuiSlider: {
      thumb:{
      color: "blue",
      },
      track: {
        color: 'blue'
      },
      rail: {
        color: 'black'
      }
    }
}
});


export default function OutlinedCard() {
  const classes = useStyles();
  const [text1, setText1] = useState(""); 
  const [text2, setText2] = useState(""); 
  const [text3, setText3] = useState(""); 
  const [text4, setText4] = useState(""); 


      function handleChange1(e) {
        setText1(e.target.value);
      }
      function handleChange2(e) {
        setText2(e.target.value);
      }
      function handleChange3(e) {
        setText3(e.target.value);
      }
      function handleChange4(e) {
        setText4(e.target.value);
      }
    function handleSubmit(e) {
    e.preventDefault();
    console.log(text1);

  }
  let red2 = ((document.getElementById("red")||{}).value)||"";
  let green2 = ((document.getElementById("green")||{}).value)||"";
  let blue2 = ((document.getElementById("blue")||{}).value)||"";

  var r = Number(red2);
  var g = Number(green2);
  var b = Number(blue2)


  const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
  
  let colorhex = rgbToHex(r,g,b);
  var colorname= ((document.getElementById("name")||{}).value)||"";
  console.log(colorname);


  return (
    
    <Container className={classes.space}>
    <Box sx={{ borderRadius: '50px' }}>
      <Card className={classes.space} variant="outlined" sx={{ maxWidth: 600 }} >
        {card}
      <Space>
        <div>
        <Color colorvalue = {rgbToHex(r,g,b)}/>
      </div>
        <ThemeProvider theme={red}>
          
          <Slider 
            defaultValue={50} 
            aria-label="Default" 
            valueLabelDisplay="auto" 
            color='primary'
          />
        </ThemeProvider>
        
        <ThemeProvider theme={green}>
          <Slider 

            defaultValue={50} 
            aria-label="Default" 
            valueLabelDisplay="auto" 
            color='primary'
            />
        </ThemeProvider>
        
        <ThemeProvider theme={blue}>
           <Slider 
            defaultValue={50} 
            aria-label="Default" 
            valueLabelDisplay="auto" 
            color='primary'
            />
        </ThemeProvider>
        <p> R,G,B: ({red2}, {green2}, {blue2})</p>
        <p> Hex: {colorhex}</p>
      <div>

      <form onSubmit={handleSubmit}>
        {/* <input type="text" value={text} placeholder='Enter value for Red' onChange={handleChange} variant="standard" /> */}
        <TextField id="red" value={text1} label="Enter value for Red" onChange={handleChange1} variant="standard" />
        <TextField id="green" value={text2} label="Enter value for Green" onChange={handleChange2} variant="standard" />
        <TextField id="blue" value={text3} label="Enter value for Blue" onChange={handleChange3} variant="standard" />
        <TextField id="name" value={text4} label="Color Name" onChange={handleChange4} variant="standard" />

      </form>
      
      </div>
       

      </Space>
      </Card>
    </Box>
    </Container>
    
  );
  
}
   

