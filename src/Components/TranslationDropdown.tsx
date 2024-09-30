import React, { useEffect } from "react";
import "./TranslateDropdown.css";

declare global {
    interface Window {
        googleTranslateElementInit: () => void;
        google: any;
    }
}

const Translate: React.FC = () => {
    useEffect(() => {
        const addGoogleTranslateScript = () => {
            // Check if the script is already added
            if (!document.getElementById("google-translate-script")) {
                const script = document.createElement("script");
                script.id = "google-translate-script"; // Add an ID for checking
                script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
                script.async = true;
                document.body.appendChild(script);
            }

            // Define the initialization function
            window.googleTranslateElementInit = () => {
                const translateElement = document.getElementById("google_translate_element");
                if (translateElement && !translateElement.firstChild) {
                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: "en",
                            includedLanguages: "en, es,fr,de,zh,ja",
                            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        },
                        "google_translate_element"
                    );
                }
            };
        };

        addGoogleTranslateScript();
    }, []);

    return (
        <div id="google_translate_element"></div>
    );
};

export default Translate;
