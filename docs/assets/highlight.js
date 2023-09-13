document.querySelectorAll(".codeblock").forEach(b => {
    new SyntaxHighlight(b).highlight(b.getAttribute("data-lang"))
})