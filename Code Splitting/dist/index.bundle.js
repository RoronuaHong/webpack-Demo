webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

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
    const _ = await __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 1));
    element.innerHTML = _.join(["Hello", "webpack"], " ");

    return element;
}

getComponent().then(component => {
    document.body.appendChild(component);
});

/***/ })
],[0]);