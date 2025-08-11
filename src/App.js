import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
// If you have more pages like SearchResults, import them too
// import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPage />} />
        {/* Example additional route: */}
        {/* <Route path="/search" element={<SearchResults />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
