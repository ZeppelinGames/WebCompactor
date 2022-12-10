const input = document.getElementById('input');
const output = document.getElementById('output');

const compact = () => {
    let html = input.value;

    // Remove all HTML and JavaScript comments using regular expressions
    html = html.replace(/<!--[\s\S]*?-->/g, '');
    html = html.replace(/\/\/[^\n]*/g, '');

    // Minify and slash-escape all strings in the HTML
    html = html.replace(/"[^"]*"/g, function (match) {
        return match.replace(/\s+/g, '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    });

    // Minify the HTML by removing unnecessary whitespace
    html = html.replace(/>\s+</g, '><') // remove whitespace between tags
        .replace(/\s+/g, ' ') // collapse multiple whitespace characters
        .replace(/^\s+|\s+$/g, ''); // remove leading and trailing whitespace

    output.value = html;
};

input.addEventListener('input', compact);