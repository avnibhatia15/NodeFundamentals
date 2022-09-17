const fun = delay =>{
    console.log('hello after ' + delay +'sec');
};

setTimeout(fun, 4000, 4 );

setTimeout(fun, 8000, 8);