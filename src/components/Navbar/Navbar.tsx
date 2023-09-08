import Navbarbutton from './Navbarbutton';

const Navbar = () => {
  return (
    <div className="navbar-center w-full max-w-7xl p-4">
      <Navbarbutton text="Latest News" link="/" />
      <Navbarbutton text="About us" link="/about" />
    </div>
  );
};

export default Navbar;
