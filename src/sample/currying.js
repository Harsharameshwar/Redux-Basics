function add(a){
    return function(b){
        return a+b;
    };
}

const result=add(1)(5);
console.log(result)

const add2 = a=>b=>a+b;
