function receivesAFunction(callback) {
    return callback();
}

receivesAFunction(function () { return 'spy' })

function returnsANamedFunction() {
    return function named() {}
}

function returnsAnAnonymousFunction() {
    return function () {}
}