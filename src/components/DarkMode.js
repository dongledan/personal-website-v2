import React from "react";
import useDarkMode from "use-dark-mode";

import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode = () => {
    const darkMode = useDarkMode(false);

    return (
        <span className="navbar-link">
            <span className="toggle-container" onClick={darkMode.toggle}>
                {darkMode.value ? (
                    <span className="sun">
                        <FaSun className="sun" />
                    </span>
                ) : (
                    <span className="moon">
                        <FaMoon />
                    </span>
                )}
            </span>
        </span>
    );
};

export default DarkMode;
