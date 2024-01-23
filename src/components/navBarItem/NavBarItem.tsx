import { Link } from "react-router-dom";
import style from "./NavBarItem.module.scss";

interface NavBarItemProps {
  children: React.ReactNode;
  to: string;
}

const NavBarItem = ({ children, to }: NavBarItemProps) => {
  return (
    <Link to={to} className={style.link}>
      {children}
    </Link>
  );
};

export default NavBarItem;
