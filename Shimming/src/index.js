import "babel-polyfill";

function component() {
    var element = document.createElement("div");

    element.innerHTML = _.join(["Hello", "webpack"], " ");

    this.alert("Hmm, this probably isn\'t a idea...");

    return element;
}

document.body.appendChild(component());