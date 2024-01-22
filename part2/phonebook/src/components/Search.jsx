const Search = ({ searchTerm, setSearchTerm }) => {
    return (
      <div>
        Search:
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    );
  };

  export default Search;
