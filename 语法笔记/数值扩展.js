
/* 移植到了number对象上 */
{
    /* 2进制 */
    console.log('b', 0b111110111); //503
    /* 8进制 */
    console.log('0o',0o767); //503
}


{
    /* 判断有效数值 */
    console.log('15',Number.isFinite(15));//15
    console.log('NaN',Number.isFinite(NaN));//false
    console.log('1/0',Number.isFinite(1/0));//false
   
    console.log('NaN',Number.isNaN(NaN));//true
    console.log('0',Number.isNaN(0));//false    
}

{
    /* 判断整数 */
    console.log('25',Number.isInteger(25)); //true
    console.log('25.0',Number.isInteger(25.0)); //true

    console.log('25.1',Number.isInteger(25.1)); //false
    console.log('25.1',Number.isInteger('25.1')); //false
    /* 必须需要是number */
    console.log('25',Number.isInteger('25')); //false
    
}

{
    /* 最大 最小 */
 console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
 console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991
 
 /* 安全数 */
  console.log('10',Number.isSafeInteger(10))   
  console.log('a',Number.isSafeInteger("a"))   
 /* 必须是数 */
  console.log('10',Number.isSafeInteger("10"))   
  
}

{

            /* 返回整数 */
        console.log(4.1,Math.trunc(4.1));
        console.log(4.9,Math.trunc(4.9));
     
}



{
    /* 判断 正数 负数 0 */
    console.log('-5',Math.sign(-5)); // -1
    console.log('0',Math.sign(0));   //   0
    console.log('5',Math.sign(5));   //  1
    console.log('5',Math.sign("5")); //NaN
    
}

{
       /*立方根 */ 
    console.log(Math.cbrt(-1))    ; //-1
    console.log(Math.cbrt(-8))    ; //2
   
}
 
 {
     
    '三角函数,对数方法';

 }