/* proxy 代理 */
/* 反射 obj */
/* 对象层 */
//11
{
    /* 代理 */
    /* 供应商原始对象 */
    let obj = {
        time:'2017-04-11',
        name:'net',
        _r:123
    };
    
    let monitor = new Proxy(obj,{
        /* 拦截对象属性的读取 */
        get(target,key){
            return target[key].replace('2017','2018');
        },
        /* 拦截对象设置属性 */
        /*  */
        set(target,key,value){
            if(key === 'name'){
                return target[key] = value;
            }else{
                return target[key];
            }
        },
        /* 拦截 key in object 操作 */
        has(target,key){
            if(key === 'name'){
                return target[key];
            }else{
                return false;
            }
        },
        /* 拦截 delet*/
        deleteProperty(target,key){
            if(key.indexOf("_")>-1){
                delete target[key];
                return true;
            }else{
                return target[key];
            }
        },
        /* 拦截 */
/*         Object.keys
        Object.getOwnProperySymbols
        Object.getOwnProperyNames    */
        ownKeys(target){
            /* time 被保护 */
            return Object.keys(target).filter(item=>item!='time');
        }
    });

    // 读取属性 需要经过代理
    console.log('get',monitor.time);
    monitor.time='2018';
    monitor.name='zhuxin';

    console.log('set',monitor.time,monitor);
    console.log('has','name' in monitor,'time' in monitor); // true false
    // /* 删除 */
    // delete monitor.time;
    // console.log('delete',monitor);
    // delete monitor._r;
    // console.log('delete',monitor);
    
    console.log('ownKeys',Object.keys(monitor));

}

{

    let obj = {
        time:'2017-04-11',
        name:'net',
        _r:123
    };

    /* get */
    console.log('re get'+Reflect.get(obj,'time'));
    /* 设置 */
    Reflect.set(obj,'name','mukewang');

    console.log(obj);
   /*  是否含有 */
    console.log('has',Reflect.has(obj,'name'));//true

}

{
        function validator(target,validator){
            return new Proxy(target,{
                _validator:validator,
                set(target,key,value,proxy){
                    if(target.hasOwnProperty(key)){
                        let va =tthis._validator[key];
                        if(!!va(value)){
                            return Reflect.set(target,key,value,proxy)
                        }else{
                            throw Error(`不能设置${key}到${value}`);
                        }
                    }else{
                        throw Error(`${key} v不存在`);
                    }
                }
            })
        }

        const personValidators = {
            name(val){
                return typeof val =='string'
            },
            age(val){
                return typeof val === 'number' && val>18
            }
             ,
            moblie(val){

            }
        }
        
        class Person{
            constructor(name,age){
                this.name =name;
                this.age =age;
                // 后期加上
             /* 代码更加健壮 */
                this.moblie = '1111';

                /* 返回的是this的代理 */
                return validator(this,personValidators)
            }                    
        }
            
        const person = new Person('lilei',30);
        
        console.info(Person);

        person.name ="zhu xin";

        console.info(Person);        
}