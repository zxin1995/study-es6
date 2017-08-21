/* Object  */
/* 不是 指类 */

{
    let o = 1;
    let k = 2;
    
    let es5 = {
        o:o,
        k:k
    };
    /* 简洁表示法  */

    let es6 ={
        o,
        k 
    };
    console.log(es5,es6);

    let es5_method = {
        hello:function(){
            console.log('hello');
        }
    };

    /* 简洁表示法  */

    let es6_method = {
        hello(){
            console.log('hello');
        }
    };
    console.log(es5_method,es6_method);
}

{
    /* 属性表达式 */
    let a = 'b';
    let es5_obj ={
        a:'c',
        b:'c'
    };

    let es6_obj ={
        /* 就是一个表达式 a是一个变量*/
        [a]:'c'
    }

    console.log(es5_obj,es6_obj)
}


{
    /* 新增API  判断相等*/
    console.log('字符串',Object.is('abc','abc'),'abc'==='abc'); //true


    /* 引用不同的地址 */
    console.log(' 数组',Object.is([],[]),[]===[]);//false
    
    /* 浅拷贝引用地址 不是值 自身 不拷贝 继承 不可枚举 */
    console.log('拷贝',Object.assign({a:'a'},{b:'b'}));
    let test = {k:1234,o:5678}
    /* 遍历 */
    for(let [key,value] of Object.entries (test)){
        console.log([key,value]); //[k,123] [o,5678]
    }
}

{
    /* 扩展运算符 */
    /* 支持不好 */
    let {a,b,...c} = {a:'test',b:'kill',c:'cccc',d:'ddddd'};
    // c={
    //     c:'cccc',
    //     d:'ddddd'
    // }
}