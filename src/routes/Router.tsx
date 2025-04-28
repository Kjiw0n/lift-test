import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import OAuthSuccessPage from "../pages/OAuthSuccessPage";
import UserListPage from "../pages/UserListPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/oauth-success" element={<OAuthSuccessPage />} />
        <Route path="/users" element={<UserListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
