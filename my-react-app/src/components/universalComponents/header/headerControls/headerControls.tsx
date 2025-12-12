import bell from "../../../../images/svg/bell.svg"
import info from "../../../../images/svg/Info.svg"
import profilePic from "../../../../images/profilePhoto.jpg"
import arrow from "../../../../images/svg/carpetDown.svg"

const HeaderControlsButtons = () => {
    let notificationCount = 5;
    return(
        <div className="headerControlsButtons">
            <div className="headerButton">
                <img src={bell} alt="notification"/>
                <div className="notificationCount">{notificationCount}</div>
            </div>
            <div className="headerButton">
                <img src={info} alt="more information"/>
            </div>
        </div>
    )
}


const MiniProfile = () => {
    return(
        <div className="miniProfile">
            <img className="profilePhoto" src={profilePic} alt="profile photo"/>
            <div className="miniProfileInfo">
                <div className="profileName">
                    Max Kim
                </div>
                <div className="profileEmail">
                    maxk@gmail.com
                </div>
            </div>
            <div className="arrowDrop">
                <img src={arrow} alt="mini profile menu"/>
            </div>
        </div>
    )
}

const HeaderControls = () => {
    return(
        <div className="headerControls">
            <HeaderControlsButtons/>
            <MiniProfile/>
        </div>
    )
}

export default HeaderControls;