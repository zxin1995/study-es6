{
    /* 函数默认值  没有y 默认world*/
    function test(x, y = "world"){
        console.log('默认值',x, y)
    }
    test('hello') //hello world
    test('hello','zhuxin'); // hello zhuxin
}

// {
//     /* 函数默认值  没有y 默认world*/
//     /* 错误的 默认值后面 不能有参数了 有参数就要有默认值 */
//     function test(x, y = "world",c){
//         console.log('默认值',x, y)
//     }
//     test('hello') //hello world
//     test('hello','Zhuxin'); // hello zhuxin
// }

{
    let x = 'test';
    function test2(x,y=x){
        console.log('作用域',x, y) //kill kill
    }
    test2('kill')
}

{
    let x = 'test';
    /* 使用的外层x 'test' */
    function test2(c,y=x){
        console.log('作用域',c, y) //kill test
    }
    test2('kill')
}

{
    /* 转换成了数组  不能有其他参数了*/
    /* 没有argume[0]的问题不是很懂 */
    function test3(...arg){
        for(let val of arg){
            console.log('rest',val);
        }
    }
    test3(1, 2, 3, 4, 'a');
}

{
    console.log(...[1,2,4]);
    console.log('a',...[1,2,4]);
   
}

{
    /*  es5this 被调用 */
    /* !!!!!!!!!!!!! */
    
    /* es6 箭头函数 this 指代函数定义的地方 */
    /* 需要灵活使用 */
    /*arrow函数名  v 是参数  函数返回值v*2返回值 */
    let arrow = v => v*2;

    console.log("arrow",arrow(3)); //6 居然 return 了

    /* 没有参数用圆括号  */
    
    let arrow2 = () => 5;

    console.log(arrow2());
}

{
    function tail(x){
        console.log('tail',x);
    }

    function fx(x){
        return tail(x);
    }

    /* 伪调用 */ 
    /* 一个函数 依赖另一个 */
    /* 提升性能 递归 函数套函数 */
    fx(123);
} 