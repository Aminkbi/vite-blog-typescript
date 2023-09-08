import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutUs from './pages/Aboutus/Aboutus';
import NotfoundPage from './pages/NotFound/NotfoundPage';
import PostPage from './pages/PostPage/PostPage';
import { lazy } from 'react';

function App() {
  lazy(() => import('./components/LatestNews/PostCard'));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
