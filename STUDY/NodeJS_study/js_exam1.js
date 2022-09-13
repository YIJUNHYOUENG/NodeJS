function sum(a,b) {
    if (typeof a !== 'number' || typeof y !== 'number') {
        throw 'type of arguments must be number type';
    }
}
function f2() {
    console.log('this is f2 start');
    throw new Error('오류');
    console.log('this is f2 end');
}

function f1() {
    console.log('this is f1 start')
    try {
        f2();
    } catch (e) {
        console.log(e);
    }

    console.log('this is f1 end');
}

f1();
