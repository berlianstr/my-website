import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@components/Navbar/Navbar";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "@components/Footer/Footer";
// import ContactSection from "@pages/LandingPage/ContactSection";

function App() {
  return (
    <BrowserRouter>
      <div className="flex  flex-col ">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
