import { NavLinkType } from "@/types/navLink";
import { NavLink as Link } from "react-router-dom";

type NavLinkProps = NavLinkType;

const NavLink = ({ title, iconPath, url }: NavLinkProps) => {
  return (
    <li className="flex-1">
      <Link
        className={({ isActive }) =>
          `${isActive && "font-bold"} flex items-center gap-3 hover:scale-110`
        }
        to={url}
      >
        <img className="h-12 w-12" src={iconPath} alt={`${title} icon`} />
        <h3 className="text-3xl">{title}</h3>
      </Link>
    </li>
  );
};

export default NavLink;
