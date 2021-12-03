import "../App.css";
//Components
import NavBar from "../navbar/navbar";
import Slider from "../slider/slider.js";
import Description from "../description/description";
import Information from "../information/information";
import Memories from "../memories/memories";
import Footer from "../footer/footer";

function Home() {
  return (
    <div>
      <NavBar />
      <Slider />
      <Description />
      <Information />
      <Memories />
      <Footer />
    </div>
  );
}

export default Home;
