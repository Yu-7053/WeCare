import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Landingpage/Header/Header";
import ImageSlogan from "./Components/Landingpage/Imageslogan/Imageslogan";
import OurMission from "./Components/Landingpage/OurMission/OurMission";
import Sponsornow from "./Components/Landingpage/Sponsornow/Sponsornow";
import OurImpact from "./Components/Landingpage/OurImpact/OurImpact";
import WriteLetter from "./Components/Landingpage/writeLetter/WriteLetter";
import HowHelp from "./Components/Landingpage/HowHelp/HowHelp";
import OurBlog from "./Components/Landingpage/OurBlog/OurBlog";
import Footercontent from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlogan />
      <OurMission />
      <Sponsornow />
      <OurImpact />
      <WriteLetter />
      <HowHelp />
      <OurBlog />
      <Footercontent />
    </div>
  );
}

export default App;
