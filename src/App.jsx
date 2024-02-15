import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { SharedLayout } from "./pages/sharedLayout";
import { BespokePayment } from "./pages/bespokePayment";
import { InfrastuctureSolutions } from "./pages/infrastuctureSolutions";
import { SchemeComply360 } from "./pages/schemeComply360";
import { EngageNotify360 } from "./pages/engageNotify360";
import { FintechInaBox } from "./pages/fintechInaBox";
import { CoporateDisbursement } from "./pages/coporateDisbursement";
import { CardAndPinMgt } from "./pages/cardAndPinMgt";
import { FraudMonitoring } from "./pages/FraudMonitoring";
import { InstantCardIssuance } from "./pages/InstantCardIssuance";
import { PinDelivery } from "./pages/pinDelivery";

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
              path="/card-and-pin-management-solutions"
              element={<CardAndPinMgt />}
            />
            <Route path="/EngageNotify360" element={<EngageNotify360 />} />
            <Route path="/SchemeComply360" element={<SchemeComply360 />} />
            <Route path="/fintech-in-a-box" element={<FintechInaBox />} />
            <Route path="/fraud-monitoring" element={<FraudMonitoring />} />
            <Route
              path="/instant-card-issuance"
              element={<InstantCardIssuance />}
            />
            <Route path="/pin-delivery" element={<PinDelivery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
