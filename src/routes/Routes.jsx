import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { HomePage, UserHome, LoginPage, SignupPage, InvalidPage, BookmarksPage, SinglePost, ProfilePage } from "pages";
import PrivateRoutes from "./PrivateRoutes";

const SiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<InvalidPage />} />
      <Route path="/mockman" element={<Mockman />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/feed" element={<UserHome />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default SiteRoutes;
