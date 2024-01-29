import { Link } from 'react-router-dom';
import style from './NavBarItem.module.scss';

interface NavBarItemProps {
  children: React.ReactNode;
  to: string;
  tabindex?: number;
}

const NavBarItem = ({ children, to, tabindex }: NavBarItemProps) => {
  return (
    <Link to={to} className={style.link} tabIndex={tabindex}>
      {children}
    </Link>
  );
};

export default NavBarItem;
