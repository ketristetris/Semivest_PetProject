import "./header.scss";
import HeaderControls from "./headerControls/headerControls";
import SearchInput from "./search/search";

const Header = () => {
  return (
    <div className="header">
      <SearchInput/>
      <HeaderControls/>
    </div>
  );
};

export default Header;