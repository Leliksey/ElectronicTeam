import React from "react";
import "./App.css";
import "./fonts/fonts.css"
import "./media.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Infoblock from "./Infoblock.js";
import InfoSection from "./InfoSection.js";
import InfoblockSecond from "./InfoblockSecond.js";
import InfoSectionSecond from "./InfoSectionSecond.js";
import Comment from "./Comment.js";
import Footer from "./Footer.js";
import "./script.js"


function App() {
  return (
    <div className="App">
      <Header /> 
      <Main /> 
      <Infoblock /> 
      <InfoSection /> 
      <InfoblockSecond />
      <InfoSectionSecond />
      <Comment />
      <Footer />
    </div>
  );
}

export default App;
