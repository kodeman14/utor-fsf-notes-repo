function SearchForm(props) {
  const handleInputChange = (e) => {
    const { value } = e.target;
    return props.setSearchValue(value);
  };

  return (
    <div className="container text-center">
      <form className="form">
        <input
          value={props.searchValue}
          name="searchValue"
          onChange={handleInputChange}
          type="text"
          placeholder="Search Term"
        />
        {/* <button type="submit">
          Submit
        </button> */}
      </form>
    </div>
  );
}

export default SearchForm;
