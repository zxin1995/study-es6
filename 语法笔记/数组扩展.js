{
    let arr = Array.of(3, 4, 7, 8, 11);
    console.log('arr=',arr);//[3, 4, 7, 8, 11]

    let emptys= Array.of();
    console.log('emptys',emptys); //[]
}

//  {
//     /* 不是数组遍历不了 转换数组*/
//     let p    = document.querySelectorAll("p");
//     let pArr = Array.from(p); //集合转义为一数组

//     pArr.forEach(function(item,index,array){
//         console.log(item.textContent);//文本
//     });

//     /* map 一样的效果  */
//     console.log(Array.from([1, 3, 5]),function(item){
//         return item *2;
//     }); //2 6 10    
// } 
 

{
    /* 填充fill */
    console.log('fill-7',[1, 'a', undefined].fill(7));//[7, 7,  7]
    console.log('fill,pos',['a' , 'b' , 'c' ,'d', 'e' ,'f'].fill(7,1,3));//  下标1 到 3 不包括3
}


// {
//             /* 存在兼容 */
//     for(let index of ['1','c','ks'].keys()){
//         console.log('keys',index); // 0 ,1 ,2 //下标
//     }
// }


// {
//         /* 存在兼容 */
//     for(let values of ['1','c','ks'].values()){
//         console.log('values',values); // '1','c','ks'  //值
//     }
// }

{
    /* 不存在兼容 */
    // 看如果书写的[index,values ]
    for( let [index,values] of ['1','c','ks'].entries()){
        console.log('index',index,'values',values); // '1','c','ks'  //值
    }
}

{
    console.log([1,2,3,4,5].copyWithin(0,3,4))  //下标 3 到4不包括4
}

{
    [1,2,3,4,5].indexOf();
}

{
    console.log(   
         [1,2,3,4,5,6].find(function(item){
        return item>3
    })) //4 只找一 项
}

{
    console.log(   
         [1,2,3,4,5,6].findIndex(function(item){
        return item>3
    })) //3 只找一 项 下标 4
}

{
    /* NaN 不 报错 */
        console.log('number',[1,2,NaN].includes(1)); //true
        console.log('number',[1,2,NaN].includes(NaN)); //true
        
    }
