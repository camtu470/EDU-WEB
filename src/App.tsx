// import "./App.css";
// import Footer from "./layouts/footer";
// import Navbar from "./layouts/navbar";
// import Home from "./pages/home";

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main>
//         <Home />
//       </main>
//       <Footer />
//     </div>
//   );
// }
// export default App;

import "./App.css";
import Footer from "./layouts/footer";
import Navbar from "./layouts/navbar";
import Home from "./pages/home";
import CoursePage from "./pages/courses";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import FavoritesPage from "./pages/favorites";
import ViewedCoursesPage from "./pages/viewed";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-[50px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/views" element={<ViewedCoursesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
