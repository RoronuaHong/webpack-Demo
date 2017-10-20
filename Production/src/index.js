function component() {
    var element = document.createElement("pre");

    element.innerHTML = [
        "Hello webpack!"
    ].join("\n\n");

    return element;
}

document.body.appendChild(component());