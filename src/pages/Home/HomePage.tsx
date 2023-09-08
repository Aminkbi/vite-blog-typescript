import LatestNews from '../../components/LatestNews/LatestNews';
import Navbar from '../../components/Navbar/Navbar';

const HomePage = () => {
  return (
    <div className="m-auto flex min-h-screen min-w-[300px] flex-col items-center bg-gray-900 bg-opacity-30 bg-gradient-to-r from-gray-500 backdrop-blur-xl backdrop-saturate-150">
      <Navbar />
      <LatestNews />
    </div>
  );
};

export default HomePage;
