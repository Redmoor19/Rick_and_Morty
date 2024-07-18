import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import {
  CharactersPage,
  EpisodesPage,
  LocationsPage,
  PageNotFound,
  SingleCharacterPage,
  SingleEpisodePage,
  SingleLocationPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route index path="/" element={<Navigate to="/characters" />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route
            path="/characters/:characterId"
            element={<SingleCharacterPage />}
          />
          <Route path="/locations" element={<LocationsPage />} />
          <Route
            path="/locations/:locationId"
            element={<SingleLocationPage />}
          />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/episodes/:episodeId" element={<SingleEpisodePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
