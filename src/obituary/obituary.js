import React from "react";
//Components
import NavBar from "../navbar/navbar";
import Slider from "../slider/slider";
import Footer from "../footer/footer";
//Material-UI
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
//CSS
import "./obituary.css";

const Obituary = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <Container>
        <br />
        <br />
        <Paper>
          <h3 className='obituaryTitle'>Obituary</h3>
          <p className='obituaryPara'>
            A beloved daughter, sister, aunt, wife and friend - Jacinta
            Namataka’s love for life transcends her untimely passing. Jacinta
            left this world suddenly on November 6, 2021 at the age of 30,
            surrounded by loved ones who will continue to honour her legacy by
            living as she did, fully and leading with love. Born to Jeremiah
            Nambale and Jennifer Kayegi on 27 February 1991, Jacinta brought an
            undeniable light into this world and touched the hearts of everyone
            she met.
          </p>
          <p className='obituaryPara'>
            An accomplished young woman with a Bachelor's degree in Psychology
            from Royal Holloway University, Jacinta was forever exploring
            different career avenues from finance to marketing and advertising,
            with her most recent creative endeavour into voice acting -
            something she was naturally adept at. Jacinta was a born high
            achiever and could do anything she set her mind to - enjoying many
            successful years excelling in her professional life. As well as her
            professional brilliance, her contributions to the lives of many are
            endless. Jacinta is famous for her generous heart and infectious
            joy; to know her is to truly love her. Much as she loved and gave to
            all those around her, her generous spirit extended to those less
            fortunate through her sponsoring of a child in Malawi and
            contributions to ending child poverty in Uganda - another testament
            to her never ending compassion and love.
          </p>
          <p className='obituaryPara'>
            Loving, kind and courageous, Jacinta was the heart of every
            celebration with her bubbly personality, elegance and radiant smile
            that could light up your soul. Everyone’s biggest supporter, she had
            an uncanny ability to find happiness in the simplest of places, but
            always sought out life’s true wonders through travelling the world
            with her beloved Jeffrey, all whilst sprinkling a bit of Jass
            everywhere she went.
          </p>
          <p className='obituaryPara'>
            Jacinta is survived by her parents; Jeremiah and Jennifer, husband;
            Jeffrey, brother & two sisters; Joanitta, Joel and Jade, and niece &
            nephew; Sophia-Grace and Joshua. Jacinta’s legacy will be in the
            hearts and minds of everyone she interacted with as well as those
            she reached but never met. She will be sorely missed. Although her
            loss is felt deeply, her spirit will always remain with us.
          </p>
          <br />
          <br />
        </Paper>
        <br />
      </Container>
      <Footer />
    </div>
  );
};

export default Obituary;
