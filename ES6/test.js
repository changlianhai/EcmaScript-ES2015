//1. 函数参数默认值







//2.rest参数




//3.箭头函数
function a() {
    return {};
}

let a = () => ({});




function fn(a) {
    return function(b) {
        return a + b;
    }
}
fn(1, 2);
let fn = a => {
    return b => {
        a + b;
    }
};

let fn = a =>b => a + b;

// 箭头函数特点:   没有function关键字， 没有this指向，没有arguments，不能使用new
// 谁调用的this就是谁，箭头函数中没有this，就会向上找，找到后返回，如果没有还进行向上找，一直找到window

let name = 2;  // ==>> var name = 2;
let obj = {
    name: 1,
    fn: function() {
        setTimeout(() =>{
            console.log(this);
        });
    }
};

let f = obj.fn();
f();
obj.fn();


let name = 1;
let obj = {
    name: 2,
    fn() {

    }
}


let obj1 = {
    fn() {

    },
     fn: function() {

     }, 
     fn: () => {
         
     }
}