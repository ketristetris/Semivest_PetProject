import React from 'react';
import { MENU_LINKS} from "../../../data";

interface LinkProps {
    logo: string;
    linkName: string;
}

const Link: React.FC<LinkProps> = ({ logo, linkName }) => {
    return(
        <div className="singleLink">
            <img src={logo} alt={linkName} />
            <div className="link-txt">{linkName}</div>
        </div>
    )
}

const Links = () => {
    return(
        <div >
            {MENU_LINKS.map((link, index) => (
                <Link key={index} logo={link.logo} linkName={link.linkName} />
            ))}
        </div>
    )
}

export default Links;