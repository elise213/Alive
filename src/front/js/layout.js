import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Resource from "./pages/Resource";
import UserProfile from "./pages/UserProfile";
import CreateResource from "./pages/CreateResource";
import Home from "./pages/home";
import { Search } from "./pages/Search";
import Offerings from "./pages/Offerings";
import OfferingPost from "./pages/OfferingPost";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Search />} path="/search/:resourceType" />
            <Route element={<Offerings />} path="/offerings" />
            <Route element={<Resource />} path="/resource/:name" />
            {/* User Pages */}
            <Route element={<UserProfile />} path="/userProfile" />
            <Route element={<OfferingPost />} path="/offeringPost" />
            {/* Organization Pages */}
            <Route element={<CreateResource />} path="/createResource" />
            {/* Can we delete these? */}
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Demo />} path="/demo" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
