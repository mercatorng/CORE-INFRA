import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { SharedLayout } from "./pages/sharedLayout";
import { SchemeReportingAndCompliance } from "./pages/schemeReportingAndCompliance";
import { PaymentExperiencePlatform } from "./pages/PaymentExperiencePlatform";
import { IssuingAsAServicePlatform } from "./pages/IssuingAsAServicePlatform";
import { CardAndPinSolution } from "./pages/cardAndPinSolution";
import { InstantCardSolution } from "./pages/instantCardSolution";
import { AboutUs } from "./pages/aboutUs";
import { ContactUs } from "./pages/contactUs";
import { PrepaidCardManagementSystem } from "./pages/prepaidCardManagementSystem";
import { PosMonitoringSolution } from "./pages/posMonitoringSolution";
import { DigitalBankingSolutions } from "./pages/digitalBankingSolutions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/digital-banking-solutions"
              element={<DigitalBankingSolutions />}
            />
            <Route
              path="/card-and-pin-solution"
              element={<CardAndPinSolution />}
            />
            <Route
              path="/payment-experience-platform"
              element={<PaymentExperiencePlatform />}
            />
            <Route
              path="/scheme-reporting-and-compliance"
              element={<SchemeReportingAndCompliance />}
            />
            <Route
              path="/issuing-as-a-service-platform"
              element={<IssuingAsAServicePlatform />}
            />
            <Route
              path="/instant-card-solution"
              element={<InstantCardSolution />}
            />
            <Route
              path="/prepaid-card-management-system"
              element={<PrepaidCardManagementSystem />}
            />
            <Route
              path="/pos-monitoring-solution"
              element={<PosMonitoringSolution />}
            />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
