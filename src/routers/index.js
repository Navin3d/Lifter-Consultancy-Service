import { Route, BrowserRouter, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CourseList from "../pages/CourseList";
import CourseDetail from "../pages/CourseDetail";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import PageNotFound from "../pages/PageNotFound";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<HomePage />} exact={true} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/course/:cid" element={<CourseDetail />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
