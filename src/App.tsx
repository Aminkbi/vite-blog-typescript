import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutUs from './pages/Aboutus/Aboutus';
import NotfoundPage from './pages/NotFound/NotfoundPage';
import PostPage from './pages/PostPage/PostPage';

function App() {
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
