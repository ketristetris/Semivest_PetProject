import Links from "./links/links";
import Logo from "./logo/logo";
import "./menu.scss";

const Menu = () => {
  return(
    <div className="menuContainer">
        <div className="menu">
            <Logo/>
            <Links/>
        </div>
    </div>
  )
};

export default Menu;