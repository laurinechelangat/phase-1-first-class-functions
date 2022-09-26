const receivesAFunction =(callbbckFunc) => {
    return callbbckFunc();
}
const returnsANamedFunction = () => {
    function AFunc() {
// Your code here

    }
    return AFunc;
}
const returnsAnAnonymousFunction =() => {

    return () =>{}
}