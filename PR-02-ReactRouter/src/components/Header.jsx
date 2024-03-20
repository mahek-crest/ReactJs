import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-20  bg-slate-300 ">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>about</Link>
      <Link to={"/design"}>design</Link>
    </div>
  );
};

export default Header;
