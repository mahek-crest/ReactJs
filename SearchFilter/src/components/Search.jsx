const Search = ({ handleSearchChange, searchItem }) => {
  return (
    <>
      <input
        type="text "
        value={searchItem}
        onChange={handleSearchChange}
        placeholder="Search Item"
      />
    </>
  );
};

export default Search;
