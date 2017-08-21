/* lterator for...of循环 不断调用 lterator*/

{
    let arr = ['hello', 'world'];

    /* 调用接口 数组内部已经实现 */
    let map = arr[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next()); //undefined   done:true
}



{
    // 实现 Itreator 接口
    let obj = {
        start: [1, 3, 2],
        end: [7, 9, 8],
        /* 遍历 */
        // 声明接口
        [Symbol.iterator](){
        let self  = this;
        let index  = 0;
        let arr =self.start.concat(self.end);
        let len =arr.length;
            return {
                next(){
                    if(index<len){
                        return {
                            value:arr[index++],
                            done:false
                        }
                    }else{
                        return{
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
    }
};

    for(let key of obj){
        console.log(key);
    }
}



{
    /* 没有部署就需要手动部署for of */

    let arr = ['hello', 'world'];

    for(let value of arr){
        console.log('value',value);
    }
}







































































