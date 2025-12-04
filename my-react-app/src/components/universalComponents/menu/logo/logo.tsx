import logo from "./../../../../images/logo.png"
import React from "react"

const Logo: React.FC = () => {
    return(
        <div className="logo">
            <img src={logo} alt="Semivest Logo" />
            <div className="logoName">
                <div className="companyName">Semivest</div>
                <div className="accountVersion">Demo account</div>
            </div>
        </div>
    )
}

export default Logo;