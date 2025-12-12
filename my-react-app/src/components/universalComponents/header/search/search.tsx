import search from "../../../../images/svg/search.svg"

const SearchInput: React.FC = () => {
  return (
    <div className="searchInput">
    <img src={search} alt="search icon"/>
    <input
      className="searchPlaceholder"
      type="text"
      size={40}
      name="one-line"
      placeholder="Search lessons, topics or features..."
    />
    </div>
  );
};

export default SearchInput;