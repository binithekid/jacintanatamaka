import React from "react";
//CSS
import "./information.css";
//Material-UI
import { Grid, Button } from "@mui/material";
//Icons
import YouTubeIcon from "@mui/icons-material/YouTube";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Information = () => {
  return (
    <div>
      <div>
        <hr className='style-two' />
        <h5 className='infoTitle'>Funeral Information</h5>
      </div>
      <Grid container spacing='3'>
        <Grid item xs={12} sm={4} className='gridItem'>
          <YouTubeIcon className='gridIcon' fontSize='large' />
          <h4 className='gridTitle'>Funeral Service</h4>
          <Button variant='outlined' className='gridButton'>
            View on Youtube
          </Button>
        </Grid>
        <Grid item xs={12} sm={4} className='gridItem'>
          <LibraryBooksIcon className='gridIcon' fontSize='large' />
          <h4 className='gridTitle'>Order of Service</h4>
          <Button variant='outlined' className='gridButton'>
            View PDF
          </Button>
        </Grid>
        <Grid item xs={12} sm={4} className='gridItem'>
          <MenuBookIcon className='gridIcon' fontSize='large' />
          <h4 className='gridTitle'>Brochure</h4>
          <Button variant='outlined' className='gridButton'>
            Download Brochure
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Information;
