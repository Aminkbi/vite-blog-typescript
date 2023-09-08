import { Link } from 'react-router-dom';

const NotfoundPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-4 py-16">
      <div className="max-w-lg text-center">
        <h1 className="text-6xl font-bold text-purple-600 md:text-8xl">404</h1>

        <p className="mt-4 text-sm font-bold uppercase text-gray-800 md:text-base">
          Page Not Found
        </p>

        <p className="mt-4 text-gray-500">
          The page you are looking for could not be found.
        </p>
        <Link to={'/'}>
          <button className="mt-6 inline-block rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white md:text-base">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotfoundPage;
