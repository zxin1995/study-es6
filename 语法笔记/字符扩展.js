//babel -polyfill 处理兼容库 引入兼容库
{
    console.log(`a`,`\u0061`);
    /* 大于两个字节 */
    console.log('s',`\u20bb7`);

    console.log('s',`\u{20bb7}`);

}

{

    /* 大于2个字节 */
    let s ='�';
    console.log('lengths',s.length); //2
    console.log("0",s.charAt(0));
    console.log("1",s.charAt(1));

    console.log("at0",s.charCodeAt(0));
    console.log("at1",s.charCodeAt(1));
    
}



{
    let s ='�a';
    console.log('length',s.length);
    console.log('code0',s.codePointAt(0));
    console.log('code0',s.codePointAt(0).toString(16));
    console.log('code0',s.codePointAt(1).toString(16));
    console.log('code0',s.codePointAt(2).toString(16));
    
}

{
    console.log(String.fromCharCode("0x20bb7"));
   /* 两个字节 */
    console.log(String.fromCodePoint("0x20bb7"));
    
}

{
    let str = '\u{20bb7}abc';
    /* 没有处理成功 */
    for(let i=0;i<str.length;i++){
        console.log("es5", str[i]);
    }

    //处理es6 处理 字符好方法
    for(let code of str){
        console.log('es6',code);
    }
}

{
    let str = 'string';
    /* 是否包含r */
    console.log('includes',str.includes('r'));//truee
    
    /* 是否以str 开始 */
    console.log('start',str.startsWith('str')); 
    /* 是否以ng 结束 */
    
    console.log('end',str.endsWith('ng')); 
}

{
    let str = 'abc';
    /* 重复2次  复制*/
    console.log(str.repeat(2)); //abcabc
}

{
    /*模板字符串 */
    let name = 'list';
    let info = 'hello world';
    /*美元符 和 花括号 包裹起来 */
    var templates = ` i am ${name},${info}`;
    console.log(templates);
}

{
    /* 第一参数长度  第二个要补什么 补白 */
    console.log('1',padStart(2,'0'));  // 01 前补
    console.log('1',padEnd(2,'0'));     // 10 后补

}

{
    /* 标签模板 */
    let user = {
        name:'list',
        info:'hello world'
    };
    /* 防止xss攻击 语言的模板好用 */
    console.log(abc`i ame ${user.name},${uer.info}`);
    function abc(s,v1,v2){
        console.log(s,v1,v2);
        return s+v1+v2;
    }
}

{
    /* \n转义了 输出了出来  */
    console.log( String.raw`Hi\n${1+2}` );
    console.log(`Hi\n${1+2}`);
    
}











































