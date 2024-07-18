import { NavLinkType } from "@/types/navLink";
import DesktopNav from "./DesktopNav";

const links: NavLinkType[] = [
  {
    url: "/characters",
    iconPath: "/rick_icon.svg",
    title: "Characters",
  },
  {
    url: "/locations",
    iconPath: "/citadel_icon.svg",
    title: "Locations",
  },
  {
    url: "/episodes",
    iconPath: "/episode_icon.svg",
    title: "Episodes",
  },
];

const Nav = () => {
  return (
    <header className="font-patrik uppercase text-green-500">
      <DesktopNav links={links} />
    </header>
  );
};

export default Nav;
