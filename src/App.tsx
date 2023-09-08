import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutUs from './pages/Aboutus/Aboutus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
