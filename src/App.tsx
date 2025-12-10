import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Products from "./pages/ingrediant/ingrediant";
import ComingSoon from "./components/initailUI";
import AddIngrediants from "./pages/ingrediant/addIngrediant";
import AffiliateDashboard from "./pages/affiliate/dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route  element={<Layout />}>

          <Route path="/" element={<ComingSoon/>} />
          <Route path="doctors" element={<ComingSoon />} />
          <Route path="patients" element={<ComingSoon />} />
          <Route path="appointments" element={<ComingSoon />} />
          <Route path="specialties" element={<ComingSoon />} />

          <Route path="ingredients" element={<ComingSoon />} />
          <Route path="ingredients/list" element={<Products />} />
          <Route path="ingredients/add" element={<AddIngrediants/>} />

          <Route path="coupons" element={<ComingSoon />} />
          <Route path="concerns" element={<ComingSoon />} />
          <Route path="referral" element={<ComingSoon />} />
          <Route path="customization" element={<ComingSoon />} />
          <Route path="wallet" element={<ComingSoon />} />
          <Route path="refund" element={<ComingSoon />} />
          <Route path="affiliate-dashboard" element={<AffiliateDashboard/>} />

          {/* Catch All */}
          <Route path="*" element={<ComingSoon />} />

        </Route>
      </Routes>
    </>
  );
};

export default App;
