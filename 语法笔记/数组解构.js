{
    /* 数组解构赋值 */
    let a, b, rest;
    [a, b]  = [1, 2];
   
    console.log(a, b);
}

{
    
    let a, b, rest;
    
    [a,b,...rest] = [1,2,3,4,5,6];

    console.log(a,b,rest); //a=1 b=2   rest=[3,4,5,6];
}

{
    let a, b;
    ({a, b}={a:1, b:2})
    console.log(a,b); //a=1 b=2
}

{
    /* 数组解构赋值 */
    let a, b, c, rest;
    [a, b, c=3]  = [1, 2];
   
    console.log(a, b, c); //a 1, b 2, c 3
}

{
    /* 数组解构赋值 */
    let a, b, c, rest;
    [a, b, c]  = [1, 2];
   /* 在结构上没有配对 就为undefined */
    console.log(a, b, c); //a 1, b 2, c undefined
}

{
    /* 结构赋值 适用变量交换 */
    let a = 1;
    let b = 2;
    [a,b] = [b,a];
    console.log(a,b);//2 1
}

{
    function f(){
        return [1,2];
    }
    
    let a, b;
    [a, b]=f();
    console.log(a, b);//1,2
}

{
    function f(){
        return [1,2,3,4,5];
    }

    let a, b, c;
    [a,,,b]=f();
    console.log(a,b);//选择接受变量
}

{
         function f(){
            return [1,2,3,4,5];
        }

        let a, b, c;
        [a,...b]=f();
        console.log(a,b);// 只关心一个 别的不关心
 }
 {
    function f(){
       return [1,2,3,4,5];
    }

      let a, b, c;
      [a,,,...b]=f();
      console.log(a,b);// 只关心一个 别的不关心
}