import { useState, useEffect } from "react";
import ResultList from "./ResultList";

// Import our search method
import { search, excludesProfaneWords } from "../utils/API";
import SearchForm from "./SearchForm";

const DisplayContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("kittens");

  // Method to get search results and set state
  const searchGiphy = async (query) => {
    const { data } = await search(query);
    setResults(data.data);
  };

  // We want to run this method when the component first loads so that we have images of kittens to display
  // The second argument is the dependency array. This means that this method will only run when the component first loads
  useEffect(() => {
    if (searchValue.length > 3) {
      if (excludesProfaneWords(searchValue)) {
        searchGiphy(searchValue);
      } else {
        alert("word includes a bad word, please change");
        setResults([]);
      }
    }
  }, [searchValue]);

  return (
    <div>
      {/* Pass our results to the ResultsList component to map over */}
      <h1>Searching for &quot;{searchValue}&quot;</h1>
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      <ResultList results={results} />
    </div>
  );
};

export default DisplayContainer;
