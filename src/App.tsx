import { Suspense, lazy } from "react";
import { Navigate, Route, Routes} from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/FlightsPage/FlightsPage"));
const FlightsDetailsPage = lazy(
  () => import("./pages/FlightDetailsPage/FlightDetailsPage")
);
const Cart = lazy(() => import("./pages/Cart/Cart"));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/flights/:id" element={<FlightsDetailsPage />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}


