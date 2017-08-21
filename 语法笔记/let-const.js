// es5 严格作用域 'use strict';
//es 强制开启'use strict'
function test(){


    /*  for(let i = 1; i<3; i++){ //let 块作用域 就是一个花括号
        //只在自己的块作用域 有用
        console.log(i); 
    
      }
     
        console.log(i);// i is not defined;  
   */  

    /* let a = 1;
        let a = 2;
        不能重复定义 
     */

}
test();

function last (){
    /* 常量不能修改  const 也是有块作用*/
   
    const PI = 3.1415926;
 
    console.log(PI);

    /* 声明必须赋值 
    const NUMBER;
    NUMBER=8 
        console.log(NUMBER)// read only 只读
    */

    /* 对象引用类型 k 指向对象指针 指针不变 对象本身是可以变得 可以修改属性 */
    const k = {
        a :1 
    }
    k.b =3;
    console.log(k);

}

last();