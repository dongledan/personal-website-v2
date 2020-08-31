import React from "react";
import useDarkMode from "use-dark-mode";

import { FaMoon, FaSun } from 'react-icons/fa';

const DarkMode = () => {
    const darkMode = useDarkMode(false);

    return (
        <span>
            <span className="toggle-container" onClick={darkMode.toggle}>
                {darkMode.value ? (
                    <span className="sun"><FaSun/></span>
                ) : (
                    <span className="moon"><FaMoon/></span>
                )}
            </span>
        </span>
    );
};

export default DarkMode;
