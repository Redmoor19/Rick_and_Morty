import { useGetAllCharactersQuery } from "@/services/rickAndMortyApi";
import { Character } from "@/types/character";
import GridDisplay from "../GridDisplay";
import CharacterCard from "./CharacterCard";
import Loader from "../Loader";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Pagination";

const Characters = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const { data, isFetching, isSuccess } = useGetAllCharactersQuery(
    page ?? undefined
  );
  if (isFetching) return <Loader />;
  if (isSuccess)
    return (
      <div className="h-full flex flex-col justify-between py-3 gap-3">
        <Pagination total={data.info.pages} />
        <div className="overflow-y-auto flex-1">
          <GridDisplay<Character>
            items={data.results}
            render={(item) => <CharacterCard key={item.id} {...item} />}
          />
        </div>
      </div>
    );
};

export default Characters;
