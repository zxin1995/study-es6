
/* 12
基本语法  
类的继承 
静态方法
静态属性
getter
setter
*/

{
    /* 基本定义 */

    class Parent{
        constructor(name='zhuxin'){
            this.name = name;

        }
    }
    let v_parent = new Parent('v');
    console.log(v_parent);    

}

{
    // 继承
    class Parent{
        constructor(name='zhuxin'){
            this.name = name;
        }
    }
    // 继承父类
    // 子类如何覆盖父类
    //如果修改自己 的参数给父类
    class Child extends Parent{
         
    }
    console.log(" 继承" ,new Child());
}

{
       // 继承
       class Parent{
        constructor(name='zhuxin'){
            this.name = name;
        }
    }
    // 继承父类
    // 子类如何覆盖父类
    //如果修改自己 的参数给父类
    class Child extends Parent{
        constructor(name='child'){
            // 列表为父类参数列表
            super(name);
            //必须  调用this 需要在 super之后 super 需要第一行
            this.type = 'child';

        }
    }
    console.log(" 继承" ,new Child('hello'));
}

{
    /* getter setter */

    class Parent{
        constructor(name='zhuxin'){
            this.name = name;
        }
        // 属性 不是方法
        get longName(){
            return 'mk' +this.name;
        }
        set longName(value){
            this.name = value;
        }
    }
        let v = new Parent();
        console.log('getter',v.longName);
        v.longName ='hello';
        console.log('setter',v.longName);
}


{
    /* 静态方法 */
    class Parent{
        constructor(name='zhuxin'){
            this.name = name;
        }
        static tell(){
            console.log('tell');   
        }
    }
    /* 通过类调用不是实例调用 */
        Parent.tell();
}


{
    /* 静态属性 */
    class Parent{
        constructor(name='zhuxin'){
            this.name = name;
        }
        static tell(){
            console.log('tell');   
        }
    }
    /* 静态属性 */
    Parent.type='test';
    console.log('静态属性',Parent.type);
}