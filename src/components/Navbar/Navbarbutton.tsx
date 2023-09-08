import { Link } from 'react-router-dom';

interface NabvarbuttonProps {
  text: string;
  link: string;
}

const Navbarbutton = ({ text, link }: NabvarbuttonProps) => {
  return (
    <Link to={link}>
      <button className="btn btn-ghost font-roboto text-white sm:text-lg">
        {text}
      </button>
    </Link>
  );
};

export default Navbarbutton;
