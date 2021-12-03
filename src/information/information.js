import React from "react";
//CSS
import "./information.css";
//Material-UI
import { Grid, Button } from "@mui/material";
//Icons
import YouTubeIcon from "@mui/icons-material/YouTube";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
//PDF
import OrderOfService from "../links/order-of-service.pdf";

const Information = () => {
  return (
    <div>
      <div>
        <hr className='style-two' />
        <h5 className='infoTitle'>Funeral Information</h5>
      </div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} className='gridItem'>
          <YouTubeIcon
            className='gridIcon'
            fontSize='large'
            style={{ color: "gray" }}
          />
          <h4 className='gridTitle'>Funeral Service</h4>
          <a
            href='https://www.youtube.com/watch?v=Smm0BLvGpuc'
            target='_blank'
            without
            rel='noreferrer'
            style={{ textDecoration: "none" }}>
            <Button variant='contained' className='gridButton'>
              View on Youtube
            </Button>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} className='gridItem'>
          <LibraryBooksIcon
            className='gridIcon'
            fontSize='large'
            style={{ color: "gray" }}
          />
          <h4 className='gridTitle'>Order of Service</h4>
          <a
            href={OrderOfService}
            target='_blank'
            without
            rel='noreferrer'
            style={{ textDecoration: "none" }}>
            <Button variant='contained' className='gridButton'>
              View PDF
            </Button>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Information;
