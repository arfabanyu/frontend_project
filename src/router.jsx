import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing_page from "./pages/landing_page";
import Sign_in from "./pages/sign_in";
import Sign_up from "./pages/sign_up";
import Request_reset from "./pages/request_reset";
import Change_password from "./pages/change_password";
import GoogleCallback from "./pages/google_callback/GoogleCallback";
import Dashboard from "./pages/dashboard";
import Setting from "./pages/setting";
import Transactions from "./pages/transactions";
import Category from "./pages/category";


function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="/sign-in" element={<Sign_in />} />
        <Route path="/sign-up" element={<Sign_up />} />
        <Route path="/google-callback" element={<GoogleCallback />} />
        <Route path="/request-password-reset" element={<Request_reset />} />
        <Route path="/change-password" element={<Change_password />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
