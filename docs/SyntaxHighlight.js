/**
 * SyntaxHighlight.JS
 * Copyright (c) Elijah Bantugan 2023
 * MIT License
 * @github https://github.com/a-riceeater/SyntaxHiglight.JS
 * @contributors TBD CONTRIBUTORS GITHUB LINK
 */


const SupportedHighlightLanguages = [
    "js",
    "javascript",
    "html",
    "css",
    "python",
    "py",
    "java"
]

/**
 * The class that provides functions to syntax highlight an element.
 * @param {HTMLElement} Element The element to syntax highlight.
 */

class SyntaxHighlight {
    constructor(element) {

        return {

            /**
             * Syntax highlight the elements text content
             * @param {String} Language The programing language contained in the element, which will be used to determine the syntax highlighting.
             * 
             * If there is a language provided that is not supported, an error will be thrown. Supported languages will be showed on the github repository.
             */

            highlight: function (language = "") {
                if (!SupportedHighlightLanguages.includes(language)) throw "Language \"" + language + "\" is not supported."

                const text = element.innerText;
                const lines = text.split("\n");

                let final = "";

                for (let a = 0; a < lines.length; a++) {
                    const line = lines[a];
                    if (line.trim() == "") continue;

                    const words = line.split(" ");

                    for (let b = 0; b < words.length; b++) {
                        const word = words[b].trim();
                        if (word == "") continue;

                        if (word.includes("\"")) {

                        } else if (word.includes("\'")) {

                        } else if (word.includes("(")) {

                        } else if (word.includes(")")) {

                        } else {
                            switch (word) {
                                case "function":
                                    final += `<span class="token-function">function</span> `
                            }
                        }
                    }
                }

                console.log(final);
                element.innerHTML = final;
            }
        }
    }
}

// Test

const element = new SyntaxHighlight(document.getElementById("code"));
element.highlight("javascript");