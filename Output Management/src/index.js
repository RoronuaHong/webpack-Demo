// import _ from "lodash";
import { cube } from "./math.js";
import printMe from "./print.js";
// import Index from "./index.css";
// import Indexs from "./newsass.scss";
import "./styles.css";

function component() {
    // var element = document.createElement("div");
    var element = document.createElement("pre");

    // var btn = document.createElement("button");

    // element.innerHTML = _.join(["Hello", "webpack"], " ");
    element.innerHTML = [
        "Hello webpack!",
        "5 cubed is equal to" + cube(5)
    ].join("\n\n");

    // btn.innerHTML = "Click me and check the console!";
    // btn.onclick = printMe;
    //
    // element.appendChild(btn);

    return element;
}

// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if(module.hot) {
    module.hot.accept("./print.js", function() {
        console.log("Accepting the update printMe module!");
        // printMe();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    });
}