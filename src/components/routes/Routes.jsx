import React from "react";
import { Routes, Route } from "react-router-dom";
import UserManagement from "../../pages/UserManagement";
import Cookies from "../../pages/Cookies";
import Notifications from "../../pages/Notifications";
import GeneralPolicies from "../../pages/GeneralPolicies";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserManagement />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/general-policies" element={<GeneralPolicies />} />
    </Routes>
  );
};

export default AppRoutes;
