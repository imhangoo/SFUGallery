// serves the purpose of adding many functions to window.onload
function addOnloadEvent(func) {
    if(typeof window.onload != "function"){
        window.onload = func;
        return;
    }
    window.onload = function () {
        window.onload();
        func();

    }
}
