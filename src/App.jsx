import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { SharedLayout } from "./pages/sharedLayout";
import { BespokePayment } from "./pages/bespokePayment";
import { InfrastuctureSolutions } from "./pages/infrastuctureSolutions";
import { SchemeReportingAndCompliance } from "./pages/schemeReportingAndCompliance";
import { PaymentExperiencePlatform } from "./pages/PaymentExperiencePlatform";
import { IssuingAsAServicePlatform } from "./pages/IssuingAsAServicePlatform";
import { CoporateDisbursement } from "./pages/coporateDisbursement";
import { CardAndPinSolution } from "./pages/cardAndPinSolution";
import { FraudMonitoring } from "./pages/fraudMonitoring";
import { PinDelivery } from "./pages/pinDelivery";
import { InstantCardSolution } from "./pages/instantCardSolution";
import { AboutUs } from "./pages/aboutUs";
import { ContactUs } from "./pages/contactUs";
import { PrepaidCardManagementSystem } from "./pages/prepaidCardManagementSystem";
import { PosMonitoringSolution } from "./pages/posMonitoringSolution";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/bespoke-payment-software"
              element={<BespokePayment />}
            />
            <Route
              path="/infrastructure-solutions"
              element={<InfrastuctureSolutions />}
            />
            <Route
              path="/corporate-disbursement-platform"
              element={<CoporateDisbursement />}
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
            <Route path="/fraud-monitoring" element={<FraudMonitoring />} />
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

            <Route path="/pin-delivery" element={<PinDelivery />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
