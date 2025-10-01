import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/">
        <img src="/logo.png" alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
