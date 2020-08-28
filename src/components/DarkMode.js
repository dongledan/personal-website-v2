import React from "react";

import useDarkMode from "use-dark-mode";

const DarkMode = () => {
    const darkMode = useDarkMode(false);

    return (
        <span>
            <span className="toggle-container" onClick={darkMode.toggle}>
                {darkMode.value ? (
                    <span className="sun">☀</span>
                ) : (
                    <span className="moon">☾</span>
                )}
            </span>
        </span>
    );
};

export default DarkMode;
