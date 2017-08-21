/* Symbol 提供独一无二的值 */
{
    /* 不是new 直接调用 */
    let a1 = Symbol() 
    let a2 = Symbol() 
   
    console.log(a1===a2); //false
    
    /* 
    'a3' key值 是否注册过 注册过就返回a3
    如果没有就注册 a3
    */
    let a3 =Symbol.for('a3');
    let a4 =Symbol.for('a3');
    console.log(a3===a4); //true;
    
}


{
    /* 什么场景使用 */
    let a1=Symbol.for('abc');
    let obj ={
        [a1]:'123',
        'abc':345,
        "c":456
    };
    console.log('obj',obj);

    // for(let [key,value] of Object.entries(obj)){
    //     console.log('let of',key,value);
    // } //[a1] 遍历不出来 Symbol for in 也遍历不出来


    Object.getOwnPropertySymbols(obj).forEach(function(item,index,array){
        console.log(obj[item]);
    }); //把123 弄出来了

    /* reflect */
    Reflect.ownKeys(obj).forEach(function(item,index,array){
        console.log('ownkeys',item,obj[item]);
    }) //包含Symbol 和不包含都返回  成数组

}