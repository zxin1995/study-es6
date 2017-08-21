/* set 不能重复 */

{
    let list = new Set();
    /* 增加元素用add */
    list.add(5);
    list.add(7);
    /* 长度 */
    console.log(list);
    console.log('size',list.size)//2
}

{
    /* 初始化  */
    let arr = [1,2,3,4,5,6,8];
    let list =new Set(arr);
    
    console.log('size',list.size);
}

{
    let list = new Set();
    list.add(1);
    list.add(2);    
    list.add(1);
    /* 去重了不能重复 */
    console.log('list',list);

    /* 2 ‘2’还是在的 类型不同滴 */
    let arr =[1,2,3,1,"2"];
    let list2 = new Set(arr);
    console.log('uniqee',list2);

        /*是否有方法直接将 set 变为数组   */
    let arr3 =new Array(list2);
    console.log('arr3',arr3); //数组里包含一个set 类型古怪


}

{
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);
    console.log('has',list.has('add')); //是否 含有
    console.log('delete',list.delete('add'),list); //删除 返回 true 了
    list.clear()
    console.log(list) //空了
}

{  
        let arr = ['add','delete','clear','has'];
        let list = new Set(arr);
        /* 返回的都是一样的没有区别 */
        for(let key of list.keys()){
            console.log('keys',key);
        }

        for(let values of list.values()){
            console.log('values',values);
        }

        for(let values of list){
            console.log('values',values);
        }
        for(let [key,values] of list.entries()){
            console.log('entries',key,values);
        }

        list.forEach(function(item,index,array){
            console.log(item)
        })
}

{
    /* 只能是对象  弱引用 不是值都拷贝过来 是地址的引用 垃圾回收也不考虑*/
    let weakList = new WeakSet();    
    let arg = {};

    weakList.add(arg);
    // weakList.add(2);  报错
    console.log('weakList',weakList)

}

/* map */

{
    let map = new Map();
    let arr = ['123'];
    
    // 添加元素
    map.set(arr,456);
    console.log('map',map,map.get(arr));//获取值


}


{
    let map = new Map([['a',123],['b',456]]);
    console.log(map);
    console.log('size',map.size);//2
    console.log('delete',map.delete('a'),map);//删除a 还剩b
    console.log('clear',map.clear(),map);// 清空
}

{
    /* 只能放k 为对象 不能遍历 */
    let weakmap = new WeakMap();

    let o ={};
    weakmap.set(o,123);
    // 获得value
    console.log(weakmap.get(o)); //123
}