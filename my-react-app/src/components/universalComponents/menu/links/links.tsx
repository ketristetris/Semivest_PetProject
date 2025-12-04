import React from 'react';

import charts from "../../../../images/svg/charts.svg"
import graduate from "../../../../images/svg/graduate.svg"
import home from "../../../../images/svg/home.svg"
import settings from "../../../../images/svg/settings.svg"
import target from "../../../../images/svg/target.svg"
import tradeUp from "../../../../images/svg/tradeUp.svg"

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
            <Link logo={home} linkName="Dashboard" />
            <Link logo={charts} linkName="Learning Analytics" />
            <Link logo={graduate} linkName="Lesson Library" />
            <Link logo={tradeUp} linkName="Practice Trading" />
            <Link logo={target} linkName="Tasks" />
            <Link logo={settings} linkName="Settings" />
        </div>
    )
}

export default Links;