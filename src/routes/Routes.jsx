import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {
  HomePage,
  UserHome
} from "pages";
// import PrivateRoutes from "./PrivateRoutes";

const SiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="*" element={<InvalidPage />} /> */}
      <Route path="/mockman" element={<Mockman />} />
      <Route path="/feed" element={<UserHome />} />

{/* 
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} /> */}
{/* 
      <Route element={<PrivateRoutes />}>
      </Route> */}
    </Routes>
  );
};

export default SiteRoutes;
