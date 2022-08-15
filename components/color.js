import React from "react";
import styled from '@emotion/styled';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles';
import Box from '@mui/material/Box';


const Space = styled('div')`
align-items: center;
justify-content: space-between;
width: 100%;
margin: 0 auto;
padding: 0 30px;
height: 64px;
max-width: 1024px;
`;

export default function color(props){
    const useStyles = makeStyles(() => ({
    color: {
      backgroundColor: props.colorvalue

    }
}))
const classes = useStyles();
   console.log(props.colorvalue)
  return (
        
        <Space>        

            <Box
            sx={{
                width: 200,
                height: 50,
                borderRadius: '12px'
              }}
              className={classes.color}
            >
              </Box>
        
        </Space>               

  );
}