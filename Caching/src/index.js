import _ from "lodash";
// import Print from "./print";

function component() {
    var element = document.createElement("div");

    element.innerHTML = _.join(["Hello", "webpack"], " ");
    // element.innerHTML = Print.bind(null, "Hello Webpack!");


    return element;
}

document.body.appendChild(component());