import "../scss/index";
import "../scss/about";

;(function() {
    let a = 1;
    const b = 2;
    console.log(a);
    console.log(b);

    const set = new WeakSet();
    set.add(11);

    console.log(set);

    var p1 = new Promise(function(resolve, rejected) {
        setTimeout(() => {
            console.log(123);
        }, 2000);
    });
})();