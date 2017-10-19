// import _ from 'lodash';
//     function component() {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//         return element;
//     }
//
// document.body.appendChild(component());

async function getComponent() {
    // return import(/* webpackChunkName: "lodash" */ "lodash").then(_ => {
    //     var element = document.createElement("div");
    //
    //     element.innerHTML = _.join(["Hello", "webpack"], " ");
    //
    //     return element;
    // }).catch(error => "An error occured while loading the component");
    var element = document.createElement("div");
    const _ = await import("lodash");
    element.innerHTML = _.join(["Hello", "webpack"], " ");

    return element;
}

getComponent().then(component => {
    document.body.appendChild(component);
});