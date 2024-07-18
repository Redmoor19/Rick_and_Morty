import { useGetAllCharactersQuery } from "@/services/rickAndMortyApi";
import { Character } from "@/types/character";
import GridDisplay from "../GridDisplay";
import CharacterCard from "./CharacterCard";
import Loader from "../Loader";

const Characters = () => {
  const { data, isFetching, isSuccess } = useGetAllCharactersQuery();
  if (!data) return;

  if (isFetching) return <Loader />;
  if (isSuccess)
    return (
      <GridDisplay<Character>
        items={data.results}
        render={(item) => <CharacterCard key={item.id} {...item} />}
      />
    );
};

export default Characters;
