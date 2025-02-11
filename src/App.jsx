import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { SharedLayout } from "./pages/sharedLayout";
import { AboutUs } from "./pages/aboutUs";
import { ContactUs } from "./pages/contactUs";
import { NotFound } from "./pages/notFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
