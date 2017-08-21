{
    /* i 负略大小写 */
    let regex = new RegExp('xyz','i')
    
    let regex2 = new RegExp(/xyz/i);

    console.log(regex.test('xyz123'),regex2.test('xyz123'));   //true true

}

{
    /* es6 可以两个参数 */
    /* 第二个会覆盖 ig  */
    let regex3 = new RegExp(/xyz/ig,'i');
    console.log(regex3.flags); // 获取正则修饰符属性 flags  i
}


{
    let str = 'bbb_bb_b';
    let reg =  /b+/g;
    let reg2 = /b+/y; 
    /* g bbb */
    console.log("reg",reg.exec(str),'reg2',reg2.exec(str));
    /* g继续匹配bb   y null */    
    console.log("reg",reg.exec(str),'reg2',reg2.exec(str));
    /* g y g忽悠_继续匹配  y从bbb后面遇到_就null */
    console.log(reg.sticky,reg2.sticky);//false true 判断是否使用y
}


{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));

    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a'));
    
    // .字符不是代表任何 小于0xf 的字符 超过2个字节就识别不了
    console.log(`\u{20BB7}`);

    let str = '吉'; //这个随便大的 
    /*大于连个字节 要用u*/
    console.log('u',/^.$/.test(str)); //false
    console.log('u',/^.$/u.test(str)); //true

    console.log('test',/吉{2}/.test('吉吉')) //fasle
    console.log('test-2',/吉{2}/u.test('吉吉')) //true
    /* u 如果处理的大于2个字节的字符就加u  .不能匹配任何字符 */
    
    /* 换行符  。。。很多符  加 s 就能匹配*/
}