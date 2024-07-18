import { Character } from "@/types/character";
import { getLocationUrl } from "@/utils/getLocationUrl";
import { Link } from "react-router-dom";

const CharacterCard = ({
  name,
  gender,
  image,
  status,
  species,
  location,
}: Character) => {
  const isDead = status === "Dead";
  const { name: locName, url: locUrl } = location;
  const locationUrl = getLocationUrl(locName, locUrl);

  return (
    <article className="rounded-lg overflow-hidden bg-zinc-700 text-green-500 font-petch font-semibold tracking-wide drop-shadow-xl shadow-green-300">
      <div className="relative">
        {isDead && (
          <img
            src="/red_cross.png"
            alt="Dead cross"
            className="absolute top-0 left-0 w-full h-full z-10"
          />
        )}
        <img
          src={image}
          alt={`${name} image`}
          className={`${isDead && "grayscale"} h-60 w-full object-cover`}
        />
      </div>
      <div className="py-3 px-5">
        <div className="flex justify-between items-center text-base">
          <p>{gender}</p>
          <p>{species}</p>
        </div>
        <h2 className="text-2xl font-bold leading-10 whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </h2>
        <Link
          className="text-sm underline underline-offset-2"
          to={locationUrl ? locationUrl : ""}
        >
          {location.name}
        </Link>
      </div>
    </article>
  );
};

export default CharacterCard;
