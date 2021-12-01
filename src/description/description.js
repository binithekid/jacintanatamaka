import React from "react";
//Material-UI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//CSS
import "./description.css";

const Description = () => {
  return (
    <div>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h6 className='descriptionPara'>In Loving Memory of</h6>
            <h2 className='descriptionHTwo'>Jacinta Boadi (née Namataka)</h2>
            <h5
              className='descriptionHFive'
              style={{ fontStyle: "italic", fontSize: "1rem" }}>
              (known to close friends and family as Jass)
            </h5>
            <h3 className='descriptionHThree'>
              27 February 1991 - 6 November 2021
            </h3>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Description;
