import React, { createContext, useReducer } from "react";
import Home from "./pages/Home";
import Cultivation from "./pages/Cultivation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import FirstHeader from "./components/FirstHeader";
import Footer from "./components/Footer";
import Serv from "./pages/Serv";
import CornDetection from "./components/CornDetection";
import CottonDetection from "./components/CottonDetection";
import RiceDetection from "./components/RiceDetection";
import SugarcaneDetection from "./components/SugarcaneDetection";
import WheatDetection from "./components/WheatDetection";
import FloatingButton from "./components/FloatingButton";
import CulCorn from "./components/CulCorn";
import CulCotton from "./components/CulCotton";
import CulRice from "./components/CulRice";
import CulSugarcane from "./components/CulSugarcane";
import CulWheat from "./components/CulWheat";
import Register from "./pages/Register";
import Username from "./pages/Username";
import Password from "./pages/Password";
import Recovery from "./pages/Recovery";
import Reset from "./pages/Reset";
import Profile from "./pages/Profile";
import Forget from "./pages/Forget";
import BlightPrecautions from "./components/BlightPrecautions";
import RustPrecautions from "./components/RustPrecautions";
import GrayLeafSpotPrecautions from "./components/GrayLeafSpotPrecautions";
import CornHealthPrecautions from "./components/CornHealthPrecautions";
import AphidsPrecautions from "./components/AphidsPrecautions";
import ArmyWormPrecautions from "./components/ArmyWormPrecautions";
import BacterialPrecautions from "./components/BacterialPrecautions";
import TargetSpotPrecautions from "./components/TargetSpotPrecautions";
import PowderyMeldyPrecautions from "./components/PowderyMeldyPrecautions";
import CottonHealthPrecautions from "./components/CottonHealthPrecautions";
import SBacterialBlightPrecautions from "./components/SBacterialBlightPrecautions";
import RedRustPrecautions from "./components/RedRustPrecautions";
import RedRotPrecautions from "./components/RedRotPrecautions";
import SugarcaneHealthPrecautions from "./components/SugarcaneHealthPrecautions";
// import AboveFooter from "./components/AboveFooter";

import BacterialLeafBlightPrecautions from "./components/BacterialLeafBlightPrecautions";
import HispaPrecautions from "./components/HispaPrecautions";
import LeafBlastPrecautions from "./components/LeafBlastPrecautions";
import TungroPrecautions from "./components/TungroPrecautions";
import BrownSpotPrecautions from "./components/BrownSpotPrecautions";
import RiceHealthPrecautions from "./components/RiceHealthPrecautions";
import CropRecomendation from "./components/CropRecomendation";
import { initialState, reducer } from "./reducer/UseReducer";
import WSeptoriaPrecautions from "./components/WSeptoriaPrecautions";
import WYellowRustPrecautions from "./components/WYellowRustPrecautions";
import WheatHealthPrecautions from "./components/WheatHealthPrecautions";
import WBrownRustPrecautions from "./components/WBrownRustPrecautions";

export const UserContext = createContext();

export default function App() {
  const theme = {
    colors: {
      background: "#6d8c54",
      darkgreen: "#2B3821",
      text: "rgb(24 24 29)",
      white: "white",
      heading: "rgb(24 24 29)",
      black: "rgb(24 24 29)",
      lightblack: "#6e7673;",
      lightgray: "#f6f4ec",
      gray: "#eceae0",
      btn: "#008080",
      yellow: "#f1cf69",
      darkgray: "#687469",
      red: "#ff5a5f",
      darkred: "#ed4347",
    },

    media: {
      mobile: "768px",  
      tab: "998px",
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Username />} />
              <Route
                path="/"
                element={
                  <>
                    <FirstHeader />
                    <Header />
                    <Home />
                    <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/cultivation"
                element={
                  <>
                    <FirstHeader />
                    <Header />
                    <Cultivation />
                    <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/service"
                element={
                  <>
                    <FirstHeader />
                    <Header />
                    <Serv />
                    <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <FirstHeader />
                    <Header />
                    <About />
                    <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/contact"
                element={
                  <>
                    <FirstHeader />
                    <Header />
                    <Contact />
                    <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/corn"
                element={
                  <>
                    <FirstHeader />
                    <Header />
                    <CornDetection />
                    <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/cotton"
                element={
                  <>
                    <FirstHeader />
                    <Header />
                    <CottonDetection />
                    <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/rice"
                element={
                  <>
                    <FirstHeader />
                    <Header />
                    <RiceDetection />
                    <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/sugarcane"
                element={
                  <>
                    <FirstHeader />
                    <Header />
                    <SugarcaneDetection />
                    <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/Wheat"
                element={
                  <>
                    <FirstHeader />
                    <Header />
                    <WheatDetection />
                    <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/culcorn"
                element={
                  <>
                    <FirstHeader />
                    <Header />
                    <CulCorn />
                    <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/culcotton"
                element={
                  <>
                    <FirstHeader />
                    <Header /> <CulCotton /> <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/culrice"
                element={
                  <>
                    <FirstHeader />
                    <Header />
                    <CulRice />
                    <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/culsugarcane"
                element={
                  <>
                    <FirstHeader />
                    <Header />
                    <CulSugarcane />
                    <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/culwheat"
                element={
                  <>
                    <FirstHeader />
                    <Header />
                    <CulWheat />
                    <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route path="/register" element={<Register />} />

              <Route path="/password" element={<Password />} />
              <Route path="/recovery" element={<Recovery />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/forget" element={<Forget />} />
              <Route path="/register" element={<Register />} />
              <Route path="/blight" element={<BlightPrecautions />} />
              <Route path="/commonrust" element={<RustPrecautions />} />
              <Route
                path="/grayleafspot"
                element={<GrayLeafSpotPrecautions />}
              />
              <Route path="/cornhealth" element={<CornHealthPrecautions />} />
              <Route path="/aphids" element={<AphidsPrecautions />} />
              <Route path="/armyworm" element={<ArmyWormPrecautions />} />
              <Route path="/bacterial" element={<BacterialPrecautions />} />
              <Route path="/powdery" element={<PowderyMeldyPrecautions />} />
              <Route path="/targetspot" element={<TargetSpotPrecautions />} />
              <Route
                path="/cottonhealth"
                element={<CottonHealthPrecautions />}
              />
              <Route
                path="/sbacterialblight"
                element={<SBacterialBlightPrecautions />}
              />
              <Route path="/redrust" element={<RedRustPrecautions />} />
              <Route path="/redrot" element={<RedRotPrecautions />} />
              <Route
                path="/sugarcanehealth"
                element={<SugarcaneHealthPrecautions />}
              />

              <Route
                path="/rblight"
                element={<BacterialLeafBlightPrecautions />}
              />
              <Route path="/brownspot" element={<BrownSpotPrecautions />} />
              <Route path="/hispa" element={<HispaPrecautions />} />
              <Route path="/leafblast" element={<LeafBlastPrecautions />} />
              <Route path="/tungro" element={<TungroPrecautions />} />
              <Route path="/ricehealth" element={<RiceHealthPrecautions />} />
              <Route
                path="/croprecomendation"
                element={
                  <>
                    <FirstHeader />
                    <Header />
                    <CropRecomendation />
                    <FloatingButton />
                    <Footer />
                  </>
                }
              />
              <Route path="/wbrownrust" element={<WBrownRustPrecautions />} />
              <Route path="/wseptoria" element={<WSeptoriaPrecautions />} />
              <Route path="/wyellowrust" element={<WYellowRustPrecautions />} />
              <Route path="/wheathealth" element={<WheatHealthPrecautions />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </UserContext.Provider>
    </>
  );
}
