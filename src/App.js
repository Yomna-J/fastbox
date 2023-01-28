import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { theme } from "./theme";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
