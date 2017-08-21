{
    /* 数据增删改查 */
    let map = new Map();
    let array = [];

    // 增
    map.set('t',1);
    array.push({t:1});
    console.info('map-array',map,array);

    // 查
    let map_exist = map.has('t'); //true
    let array_exist= array.find( item=>item.t); //返回对象
    console.log(map_exist,array_exist);

    // 改
    map.set('t',2);
    array.forEach(item=>item.t?item.t=2:'');
    // map 容易修改 forEach 也能做到
    console.info('map-array-modify',map,array);
    
    // 删除
    map.delete('t');

    // 数组删除
    let index = array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info('map-array-empty',map,array);
}

{
    let set = new Set();
    let array = [];

    // 增
    // let obj= {t:1};
    // set.add(obj);
    set.add({t:1,f:2});
    array.push({t:1});
    console.info('set-array',set,array);

    // 查
    let set_exist = set.has({t:1})//false 两个对象啊 肯定定要提取变量
    // let set_exist = set.has(obj)//true
    let array_exist= array.find(item=>item.t); //返回对象
    console.log(set_exist,array_exist);

    // 改
    set.forEach(item   => item.t ? item.t = 2 : '');
    array.forEach(item =>item.t ? item.t=2 : ''); 
    console.log('set-array-modify',set,array);

    // 删
    /* item.t删除不了 item能删除有疑问睡觉 */
    set.forEach(item=>item.t ? set.delete(item) : '');
    // set.forEach(item=>item.t ? set.delete(item.t) : '');
    
    let index = array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info('map-array-empty',set,array);
    
}

{
    /* map set object 对比 */
    let item = {t : 1};
    let map  = new Map();
    let set = new Set();
    let obj = {};
    
    // 增
    map.set('t',1);
    set.add(item);
    obj['t'] = 1;
    console.info('map-set-obj',map,set,obj);

    // 查
    console.info({'map_exist':map.has('t'),
                    'set_exist':set.has(item),
                    'obj_exist':'t' in obj
                    })
                    
            // 改 
            map.set('t',2);
            item.t = 2;
            obj['t'] =2;
            console.info('map-set-obj-modfiy',map,set,obj);

            // 删除
            map.delete('t');
            set.delete(item);
            delete obj['t'];
            console.info('map-set-obj-empty',map,set,obj);
            
        }


        /*  能使用map 不适用array*/
        /* 数据要求高set 放弃obj 放弃array */
