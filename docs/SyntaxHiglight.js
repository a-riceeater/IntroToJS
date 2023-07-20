/**
 * SyntaxHighlight.JS
 * Copyright (c) Elijah Bantugan 2023
 * MIT License
 * @github https://github.com/a-riceeater/SyntaxHiglight.JS
 * @contributors TBD CONTRIBUTORS GITHUB LINK
 */


/**
 * The class that provides functions to syntax highlight an element.
 * @param {HTMLElement} Element The element to syntax highlight.
 */

class ColorCodeElement {
    constructor(element) {
        
        return {

            /**
             * Syntax highlight the elements text content
             * @param {string} Language The programing language contained in the element, which will be used to determine the syntax highlighting 
             * 
             * If there is a language provided that is not supported, an error will be thrown. Supported languages will be showed on the github repository.
             */

            highlight: function (language) {

            }
        }
    }
}

// Test

const element = new ColorCodeElement(document.getElementById("code"));
