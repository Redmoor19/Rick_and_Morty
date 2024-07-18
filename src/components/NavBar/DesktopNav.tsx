import { NavLinkType } from "@/types/navLink";
import NavLink from "./NavLink";

type DesktopNavProps = {
  links: NavLinkType[];
};

const DesktopNav = ({ links }: DesktopNavProps) => {
  return (
    <nav className="py-3 flex justify-center items-center">
      <ul className="px-7 py-3 rounded-lg mx-auto flex gap-16 bg-zinc-800 justify-between shadow-md shadow-green-700">
        {links.map((link) => (
          <NavLink key={link.url} {...link} />
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
