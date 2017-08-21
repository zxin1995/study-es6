/* 模块化 */

/* 引入 */




/* 导出 */
export let A=123;
export function test(){
    console.log('test');

}
export class Hello{
    test(){
        console.log('class');
    }
}

/* 引入 */
import {A,test,Hello} from './class/lesson17'
console.log(A,test,Hello);





/* 导出 */

let A = 123;
let test = function(){
    console.log('test');
}
class Hello{
    test(){
    console.log('test');    
    }
}

export default {
    A,test,Hello
}

import lesson17 from './class/lesson17';
console.log(lesson.A);
console.log(lesson.test);
console.log(lesson.Hello);



/* 导出上百个 */

// 全部导出
import * as lesson from './class/lesson17';
console(lesson.A,lesson.test);
